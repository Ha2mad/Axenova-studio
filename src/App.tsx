import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Games } from './components/Games';
import { About } from './components/About';
import { Approach } from './components/Approach';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header root="" />
      <main id="main">
        <Hero />
        <Games />
        <About />
        <Approach />
        <Contact />
      </main>
      <Footer root="" />
    </>
  );
}
