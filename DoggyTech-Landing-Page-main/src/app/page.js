import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NewForm from './components/Form/NewForm';
import Hero from './components/Hero/Hero';
import HeroSlider from './components/HeroSlider/HeroSlider';
import Navbar from './components/Navbar/Navbar';
import Servicios from './components/Servicios/Servicios';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <HeroSlider />
      <About />
      <NewForm />
      <Footer />
    </>
  );
}
