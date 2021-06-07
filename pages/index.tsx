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
  return (
    <Layout title="JSlancer">
      <Home />
      <About />
      <Technology />
      <WhyChooseUs />
      <CaseStudies />
      <Clients />
      <Team />
      <Contact />
    </Layout>
  )
}
