import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Experience from './components/Experience';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Experience />
        <Menu />
        <Testimonials />
        <Gallery />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
