import  { useState, useEffect } from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Layout from '../components/common/Layout';
import Technology from '../components/Technology';
import WhyChooseUs from '../components/WhyChooseUs';
import CaseStudies from '../components/CaseStudies';
import Clients from '../components/Clients';
import Team from '../components/Team';
import Contact from '../components/Contact';

export default function HomePage() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);

    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  function onWindowResize(): void {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }
  return (
    <Layout title="JSlancer">
      <Home />
      <About />
      <Technology isMobile={isMobile} />
      <WhyChooseUs />
      <CaseStudies />
      <Clients />
      <Team isMobile={isMobile} />
      <Contact />
    </Layout>
  )
}
