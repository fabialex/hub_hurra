'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ui';

const navLinks = [
  { label: 'API Hub', href: '#solution' },
  { label: 'Security', href: '#trends' },
  { label: 'Agents', href: '#features' },
  { label: 'Use Case', href: '#usecase' },
  { label: 'Kontakt', href: '#contact' },
  { label: 'Dokumentation', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll(); window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`fixed top-0 inset-x-0 z-50 transition
      ${scrolled ? 'backdrop-blur bg-black/30 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-6xl px-4 flex items-start h-20 justify-between relative">
        <Link href="/" className="font-semibold tracking-wide relative -top-2">
          <Image 
            src="/Hub_Hub_Logo.png" 
            alt="Hub Hub Logo" 
            width={160} 
            height={160} 
            className="scale-100 hover:scale-105 transition-transform duration-200"
          />
        </Link>
        <div className="hidden md:flex gap-6 text-sm pt-6">
          {navLinks.map(i => (
            <a key={i.href} href={i.href} className="text-white/70 hover:text-white transition-colors">{i.label}</a>
          ))}
        </div>
        <Button as="a" href="#contact" className="mt-5">
          Reise beginnen!
        </Button>
      </nav>
    </div>
  );
}
