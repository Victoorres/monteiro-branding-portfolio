import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Stats } from '@/components/stats';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Projects } from '@/components/projects';
import { Testimonials } from '@/components/testimonials';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Cursor } from '@/components/cursor';
import { DoubleCurveWaveDivider } from '@/components/wave-divider';

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-monteiro-white">
      {/* <Cursor /> */}
      <Header />
      <Hero />
      <DoubleCurveWaveDivider />

      <Stats />
      <DoubleCurveWaveDivider />

      <About />
      <DoubleCurveWaveDivider />
      <Services />
      <DoubleCurveWaveDivider />

      <Projects />
      <DoubleCurveWaveDivider />

      <Testimonials />
      <DoubleCurveWaveDivider />

      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
