'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Initiatives', href: '/#initiatives' },
  { label: 'Our Moments', href: '/#gallery' },
  { label: 'Stories', href: '/stories/' },
  { label: 'Get Involved', href: '/get-involved/' },
  { label: 'News', href: '/#news' },
  { label: 'Leadership', href: '/#leadership' },
  { label: 'Contact', href: '/#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/98 shadow-soft py-2' : 'bg-trust-peach/95'
      } backdrop-blur-sm border-b border-trust-peach-warm/80`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/vct-image.jpeg"
              alt="Vandana Child Care Trust"
              width={48}
              height={48}
              className="rounded-full object-cover ring-2 ring-trust-navy/10 group-hover:ring-trust-accent/30 transition"
            />
            <span className="font-display text-xl font-semibold text-trust-navy group-hover:text-trust-navy-light transition">
              Vandana Childcare Trust
            </span>
          </Link>
          <div className="hidden md:flex md:items-center md:gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-trust-navy/85 hover:text-trust-accent rounded-lg hover:bg-trust-peach-warm/50 transition"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="ml-4 btn-accent text-sm"
            >
              Get in Touch
            </Link>
          </div>
          <button
            type="button"
            className="md:hidden rounded-lg p-2.5 text-trust-navy hover:bg-trust-peach-warm/50 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden py-4 border-t border-trust-peach-warm/80 animate-fade-in">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-trust-navy font-medium rounded-lg hover:bg-trust-peach-warm/50 hover:text-trust-accent transition"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="mx-4 mt-2 btn-accent text-center"
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
