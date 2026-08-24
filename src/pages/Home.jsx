// ============================================================
//  src/pages/Home.jsx
//  Assembles Hero + Services + Works + Testimonials sections
// ============================================================
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import WorksSection from '../components/sections/WorksSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WorksSection />
    </>
  );
}
