import Hero from './components/Hero';
import Trends from './components/Trends';
import Solution from './components/Solution';
import Features from './components/Features';
import UseCase from './components/UseCase';
import Footer from './components/Footer';
import ContactDemo from './components/ContactDemo';
import Navbar from './components/Navbar';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative pt-32">
        <Hero />
        <Solution />
        <Features />
        <Trends />
        <UseCase />
        <ContactDemo />
        <Footer />
      </main>
    </>
  );
}
