import Hero from './components/Hero';
import Trends from './components/Trends';
import Hub from './components/Hub';
import Solutions from './components/Solutions';
import UseCase from './components/UseCase';
import Footer from './components/Footer';
import ContactDemo from './components/ContactDemo';
import Navbar from './components/Navbar';
import { PageBackground } from './components/ui';

export default function Page() {
  return (
    <PageBackground>
      <Navbar />
      <main className="relative pt-32">
        <Hero />
        <Solutions />        
        <Hub />
        <Trends />
        <UseCase />
        <ContactDemo />
        <Footer />
      </main>
    </PageBackground>
  );
}
