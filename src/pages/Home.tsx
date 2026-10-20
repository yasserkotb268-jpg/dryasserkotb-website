import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import HomepageSpotlight from '@/sections/HomepageSpotlight';
import Works from '@/sections/Works';
import Research from '@/sections/Research';
import Articles from '@/sections/Articles';
import YK7 from '@/sections/YK7';
import VisualGallery from '@/sections/VisualGallery';
import About from '@/sections/About';
import Expertise from '@/sections/Expertise';
import Qualifications from '@/sections/Qualifications';
import Positions from '@/sections/Positions';
import Memberships from '@/sections/Memberships';
import Lectures from '@/sections/Lectures';
import Seminars from '@/sections/Seminars';
import Programs from '@/sections/Programs';
import Publications from '@/sections/Publications';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <HomepageSpotlight />
        <Works />
        <Research />
        <Articles />
        <YK7 />
        <VisualGallery />
        <About />
        <Expertise />
        <Qualifications />
        <Positions />
        <Memberships />
        <Lectures />
        <Seminars />
        <Programs />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
