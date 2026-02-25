import Hero from '@/components/Hero';
import AnimatedStats from '@/components/AnimatedStats';
import About from '@/components/About';
import Principles from '@/components/Principles';
import Initiatives from '@/components/Initiatives';
import Collaborations from '@/components/Collaborations';
import Gallery from '@/components/Gallery';
import News from '@/components/News';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';
import FadeInSection from '@/components/FadeInSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <AnimatedStats />
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <Principles />
      </FadeInSection>
      <FadeInSection>
        <Initiatives />
      </FadeInSection>
      <FadeInSection>
        <Collaborations />
      </FadeInSection>
      <FadeInSection>
        <Gallery />
      </FadeInSection>
      <FadeInSection>
        <News />
      </FadeInSection>
      <FadeInSection>
        <Leadership />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
    </main>
  );
}
