import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Qualifications from '@/sections/Qualifications';
import Positions from '@/sections/Positions';
import Memberships from '@/sections/Memberships';
import Expertise from '@/sections/Expertise';
import Works from '@/sections/Works';
import Research from '@/sections/Research';
import Lectures from '@/sections/Lectures';
import Seminars from '@/sections/Seminars';
import Programs from '@/sections/Programs';
import Publications from '@/sections/Publications';
import Articles from '@/sections/Articles';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Qualifications />
        <Positions />
        <Memberships />
        <Expertise />
        <Works />
        <Research />
        <Lectures />
        <Seminars />
        <Programs />
        <Articles />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
