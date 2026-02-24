import Hero from '@/components/Hero';
import AnimatedStats from '@/components/AnimatedStats';
import About from '@/components/About';
import Principles from '@/components/Principles';
import Initiatives from '@/components/Initiatives';
import Gallery from '@/components/Gallery';
import News from '@/components/News';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <AnimatedStats />
      <About />
      <Principles />
      <Initiatives />
      <Gallery />
      <News />
      <Leadership />
      <Contact />
    </main>
  );
}
