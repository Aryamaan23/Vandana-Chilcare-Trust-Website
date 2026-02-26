'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const mainLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    dropdown: [
      { label: 'About Us', href: '/about/' },
      { label: 'Founder & Co-founder Message', href: '/founder-message/' },
    ],
  },
  {
    label: 'Our Work',
    dropdown: [
      { label: 'Programmes & Reports', href: '/programmes/' },
      { label: 'Initiatives', href: '/#initiatives' },
      { label: 'Our Moments', href: '/#gallery' },
      { label: 'Stories', href: '/stories/' },
    ],
  },
  { label: 'Get Involved', href: '/get-involved/' },
  { label: 'Donate', href: '/donate/' },
  {
    label: 'More',
    dropdown: [
      { label: 'News', href: '/#news' },
      { label: 'Leadership', href: '/#leadership' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
];

const getInTouchClass = 'btn-accent-rect text-sm';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkClass =
    'flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-trust-navy/90 hover:text-trust-accent rounded-lg transition-colors duration-200';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 shadow-[0_1px_20px_rgba(26,54,93,0.06)] py-1 border-b border-trust-peach-warm/60'
          : 'bg-gradient-to-r from-trust-peach via-white/90 to-trust-peach/95 py-2 border-b border-trust-peach-warm/70'
      } backdrop-blur-md`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 md:h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <span className="relative flex shrink-0">
              <Image
                src="/vct-image.jpeg"
                alt="Vandana Child Care Trust"
                width={44}
                height={44}
                className="rounded-full object-cover ring-2 ring-trust-navy/10 group-hover:ring-trust-accent/40 transition-all duration-300 group-hover:scale-105"
              />
            </span>
            <span className="font-display text-lg md:text-xl font-semibold text-trust-navy group-hover:text-trust-navy-light transition hidden sm:block">
              Vandana Childcare Trust
            </span>
          </Link>

          {/* Desktop: dropdown nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {mainLinks.map((item) => {
              if ('href' in item && item.href) {
                return (
                  <Link key={item.href} href={item.href} className={navLinkClass}>
                    {item.label}
                  </Link>
                );
              }
              const isOpen = openDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className={navLinkClass}
                    onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`absolute left-0 top-full pt-1 transition-all duration-200 ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
                  >
                    <div className="min-w-[200px] rounded-xl bg-white border border-trust-peach-warm shadow-soft-hover py-1">
                      {(item.dropdown ?? []).map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-trust-navy/90 hover:bg-trust-peach-warm/60 hover:text-trust-accent transition"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
            <Link href="/#contact" className={`ml-3 ${getInTouchClass}`}>
              Get in Touch
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden rounded-xl p-2.5 text-trust-navy hover:bg-trust-peach-warm/60 transition"
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

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden py-4 border-t border-trust-peach-warm/80 animate-fade-in">
            <div className="flex flex-col gap-0.5">
              <Link
                href="/"
                className="px-4 py-3 text-trust-navy font-medium rounded-lg hover:bg-trust-peach-warm/50 hover:text-trust-accent transition"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <div className="px-4 py-2 text-xs font-semibold text-trust-navy/70 uppercase tracking-wider">
                About
              </div>
              <Link
                href="/about/"
                className="pl-8 pr-4 py-2.5 text-trust-navy font-medium rounded-lg hover:bg-trust-peach-warm/50 hover:text-trust-accent transition text-sm"
                onClick={() => setOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/founder-message/"
                className="pl-8 pr-4 py-2.5 text-trust-navy font-medium rounded-lg hover:bg-trust-peach-warm/50 hover:text-trust-accent transition text-sm"
                onClick={() => setOpen(false)}
              >
                Founder & Co-founder Message
              </Link>
              <div className="px-4 py-2 text-xs font-semibold text-trust-navy/70 uppercase tracking-wider">
                Our Work
              </div>
              <Link
                href="/programmes/"
                className="pl-8 pr-4 py-2.5 text-trust-navy font-medium rounded-lg hover:bg-trust-peach-warm/50 hover:text-trust-accent transition text-sm"
                onClick={() => setOpen(false)}
              >
                Programmes & Reports
              </Link>
              <Link
                href="/#initiatives"
                className="pl-8 pr-4 py-2.5 text-trust-navy font-medium rounded-lg hover:bg-trust-peach-warm/50 hover:text-trust-accent transition text-sm"
                onClick={() => setOpen(false)}
              >
                Initiatives
              </Link>
              <Link
                href="/#gallery"
                className="pl-8 pr-4 py-2.5 text-trust-navy font-medium rounded-lg hover:bg-trust-peach-warm/50 hover:text-trust-accent transition text-sm"
                onClick={() => setOpen(false)}
              >
                Our Moments
              </Link>
              <Link
                href="/stories/"
                className="pl-8 pr-4 py-2.5 text-trust-navy font-medium rounded-lg hover:bg-trust-peach-warm/50 hover:text-trust-accent transition text-sm"
                onClick={() => setOpen(false)}
              >
                Stories
              </Link>
              <Link
                href="/get-involved/"
                className="px-4 py-3 text-trust-navy font-medium rounded-lg hover:bg-trust-peach-warm/50 hover:text-trust-accent transition"
                onClick={() => setOpen(false)}
              >
                Get Involved
              </Link>
              <div className="px-4 py-2 text-xs font-semibold text-trust-navy/70 uppercase tracking-wider">
                More
              </div>
              <Link
                href="/#news"
                className="pl-8 pr-4 py-2.5 text-trust-navy font-medium rounded-lg hover:bg-trust-peach-warm/50 hover:text-trust-accent transition text-sm"
                onClick={() => setOpen(false)}
              >
                News
              </Link>
              <Link
                href="/#leadership"
                className="pl-8 pr-4 py-2.5 text-trust-navy font-medium rounded-lg hover:bg-trust-peach-warm/50 hover:text-trust-accent transition text-sm"
                onClick={() => setOpen(false)}
              >
                Leadership
              </Link>
              <Link
                href="/#contact"
                className="pl-8 pr-4 py-2.5 text-trust-navy font-medium rounded-lg hover:bg-trust-peach-warm/50 hover:text-trust-accent transition text-sm"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/#contact"
                className={`mx-4 mt-4 ${getInTouchClass}`}
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
