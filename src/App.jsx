import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Team from './sections/Team.jsx';
import Contact from './sections/Contact.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
