import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Principles from '@/components/Principles';
import Initiatives from '@/components/Initiatives';
import Gallery from '@/components/Gallery';
import News from '@/components/News';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Principles />
        <Initiatives />
        <Gallery />
        <News />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
