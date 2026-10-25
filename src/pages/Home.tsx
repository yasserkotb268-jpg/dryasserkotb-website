import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import VisionMission from '@/sections/VisionMission';
import Qualifications from '@/sections/Qualifications';
import Positions from '@/sections/Positions';
import Memberships from '@/sections/Memberships';
import Expertise from '@/sections/Expertise';
import Works from '@/sections/Works';
import Research from '@/sections/Research';
import YK7 from '@/sections/YK7';
import Lectures from '@/sections/Lectures';
import Seminars from '@/sections/Seminars';
import Programs from '@/sections/Programs';
import Publications from '@/sections/Publications';
import Articles from '@/sections/Articles';
import QadayaArticles from '@/sections/QadayaArticles';
import MagazineArchive from '@/sections/MagazineArchive';
import CreativeGallery from '@/sections/CreativeGallery';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Qualifications />
        <Positions />
        <Memberships />
        <Expertise />
        <Works />
        <Research />
        <YK7 />
        <Lectures />
        <Seminars />
        <Programs />
        <Articles />
        <QadayaArticles />
        <MagazineArchive />
        <CreativeGallery />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
