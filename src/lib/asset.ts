/**
 * يبني مسار ملف قابل للتحميل.
 * - القيم القديمة (اسم ملف فقط) تُسبق بمجلدها الافتراضي: articles/... إلخ.
 * - القيم المخزنة كمسار كامل يبدأ بـ "/" (الملفات المرفوعة من لوحة التحكم إلى /uploads) تُستخدم كما هي.
 */
export const assetPath = (dir: string, file: string): string =>
  file.startsWith('/') ? file : `/${dir}/${file}`;
