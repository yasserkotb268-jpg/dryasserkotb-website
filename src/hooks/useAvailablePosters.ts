import { useEffect, useMemo, useState } from 'react';
import type { VisualPoster } from '@/data/content';
import { assetPath } from '@/lib/asset';

/** Only expose media once its actual image has loaded; missing files never create broken tiles. */
export function useAvailablePosters(items: VisualPoster[], enabled = true): VisualPoster[] {
  const [available, setAvailable] = useState<string[]>([]);
  const signature = useMemo(() => items.map((item) => item.file).join('|'), [items]);
  useEffect(() => {
    if (!enabled || !items.length) { return; }
    let cancelled = false;
    const ready: string[] = [];
    const images: HTMLImageElement[] = [];
    for (const item of items) {
      const image = new Image();
      images.push(image);
      image.onload = () => {
        if (cancelled) return;
        ready.push(item.file);
        setAvailable([...ready]);
      };
      image.onerror = () => { /* The entry stays hidden until its file has been uploaded. */ };
      image.src = assetPath('uploads', item.file);
    }
    return () => {
      cancelled = true;
      images.forEach((img) => { img.onload = null; img.onerror = null; });
    };
  }, [signature, enabled, items]);
  return items.filter((item) => available.includes(item.file));
}
