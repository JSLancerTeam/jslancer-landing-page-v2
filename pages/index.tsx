import Home from '../components/Home';
import About from '../components/About';
import Layout from '../components/common/Layout';

export default function HomePage() {
  return (
    <Layout title="JSlancer">
      <Home />
      <About />
    </Layout>
  )
}
