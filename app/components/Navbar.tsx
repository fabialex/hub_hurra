'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ui';

const navLinks = [
  { label: 'Hub', href: '/#hub' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Security', href: '/#trends' },
  { label: 'Use Case', href: '/#usecase' },
  { label: 'Kontakt', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl' : 'backdrop-blur-sm'
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 pt-6 transition-all duration-300 ${
          scrolled ? 'pt-4' : 'pt-6'
        }`}
      >
        <nav
          className={`flex items-center justify-between gap-6 rounded-3xl border px-6 py-3 shadow-[0_20px_60px_rgba(1,5,15,0.55)] backdrop-blur-lg transition-all duration-300 ${
            scrolled ? 'border-white/20 bg-black/40' : 'border-white/10 bg-white/10'
          }`}
        >
          <Link href="/" className="flex items-center rounded-lg p-2 hover:bg-white/5 transition">
            <Image
              src="/Hub_Hub_Logo.png"
              alt="Hub Hub Logo"
              width={400}
              height={400}
              className="h-15 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              as="a"
              href="#contact"
              className="hidden sm:inline-flex shrink-0 rounded-full px-6 py-2 text-sm"
            >
              Reise beginnen
            </Button>
            <a
              href="#contact"
              className="text-sm font-medium text-white/80 transition hover:text-white sm:hidden"
            >
              Kontakt
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
