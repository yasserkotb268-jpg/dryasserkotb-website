/**
 * محمّل المحتوى — يقرأ كل محتوى الموقع من content.json
 * content.json هو الملف الذي تحرّره لوحة التحكم (Decap CMS) عبر /admin.
 * لا تحرر هذا الملف لتغيير المحتوى؛ حرّر content.json أو استخدم اللوحة.
 */
import raw from './content.json';

export interface ProfileStat { value: string; label: string }
export interface Profile {
  name: string;
  nameEn: string;
  titles: string[];
  bio: string[];
  stats: ProfileStat[];
}
export interface Qualification { title: string; detail: string }
export interface Position { org: string; role: string }
export interface Membership { org: string; role: string }
export interface ExpertiseArea { area: string; detail: string; icon: string }
export interface Framework { name: string; desc: string }
export interface Photo { src: string; alt: string }
export interface ModelItem { name: string; desc: string; file: string }
export interface Seminar { title: string; kind: string; topic: string; file: string }
export interface Book { title: string; topic: string; status: string }
export interface Program { name: string; org: string }
export interface Article { title: string; field: string; file?: string }
export interface Lecture { title: string; axis: string }
export interface ResearchItem { title: string; type: string; venue?: string; year?: string; file: string }
export interface SeriesLecture { num: string; title: string; file: string }
export interface LectureSeries {
  program: string;
  org: string;
  lectures: SeriesLecture[];
  note?: string;
  link?: { url: string; label: string };
}
export interface FeaturedVideo { title: string; desc: string; url: string }
export interface Presentation { title: string; desc: string; file: string }
export interface ContactLink { name: string; url: string }
export interface Contact {
  email: string;
  phone: string;
  phoneDisplay: string;
  location: string;
  links: ContactLink[];
}
export interface NavLink { id: string; label: string }

const data = raw as unknown as {
  profile: Profile;
  qualifications: Qualification[];
  positions: Position[];
  memberships: Membership[];
  expertise: ExpertiseArea[];
  frameworks: Framework[];
  photos: Photo[];
  models: ModelItem[];
  seminars: Seminar[];
  books: Book[];
  programs: Program[];
  articles: Article[];
  lectures: Lecture[];
  research: ResearchItem[];
  lectureSeries: LectureSeries[];
  featuredVideo: FeaturedVideo;
  presentations: Presentation[];
  contact: Contact;
  navLinks: NavLink[];
};

export const profile: Profile = data.profile;
export const qualifications: Qualification[] = data.qualifications;
export const positions: Position[] = data.positions;
export const memberships: Membership[] = data.memberships;
export const expertise: ExpertiseArea[] = data.expertise;
export const frameworks: Framework[] = data.frameworks;
export const photos: Photo[] = data.photos;
export const models: ModelItem[] = data.models;
export const seminars: Seminar[] = data.seminars;
export const books: Book[] = data.books;
export const programs: Program[] = data.programs;
export const articles: Article[] = data.articles;
export const lectures: Lecture[] = data.lectures;
export const research: ResearchItem[] = data.research;
export const lectureSeries: LectureSeries[] = data.lectureSeries;
export const featuredVideo: FeaturedVideo = data.featuredVideo;
export const presentations: Presentation[] = data.presentations;
export const contact: Contact = data.contact;
export const navLinks: NavLink[] = data.navLinks;
