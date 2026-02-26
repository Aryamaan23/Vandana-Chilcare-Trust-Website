import Image from 'next/image';
import Link from 'next/link';
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from './SocialIcons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-trust-navy text-white py-14 md:py-16 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-trust-accent/30 to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/vct-image.jpeg"
                alt="Vandana Child Care Trust"
                width={56}
                height={56}
                className="rounded-full object-cover ring-2 ring-white/20"
              />
              <div>
                <p className="font-display text-xl font-semibold">Vandana Childcare Trust</p>
                <p className="text-white/75 text-sm mt-0.5">Prayagraj (Allahabad), Uttar Pradesh · Since 2016</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <Link href="/about/" className="text-white/80 hover:text-trust-peach text-sm font-medium transition">
              About
            </Link>
            <Link href="/get-involved/" className="text-white/80 hover:text-trust-peach text-sm font-medium transition">
              Get Involved
            </Link>
            <Link href="/donate/" className="text-white/80 hover:text-trust-peach text-sm font-medium transition">
              Donate
            </Link>
            <Link href="/stories/" className="text-white/80 hover:text-trust-peach text-sm font-medium transition">
              Stories
            </Link>
            <Link href="/programmes/" className="text-white/80 hover:text-trust-peach text-sm font-medium transition">
              Programmes & Reports
            </Link>
            <a
              href="https://vandanachildcaretrust.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-trust-peach text-sm font-medium transition"
            >
              Substack
            </a>
            <a
              href="https://instagram.com/vandana_childcare_trust"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-trust-peach text-sm font-medium transition inline-flex items-center gap-1.5"
            >
              <InstagramIcon className="w-4 h-4" /> Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/vandana-childcare-trust/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-trust-peach text-sm font-medium transition inline-flex items-center gap-1.5"
            >
              <LinkedInIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="https://wa.me/917355949951"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-trust-peach text-sm font-medium transition inline-flex items-center gap-1.5"
            >
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp
            </a>
            <Link href="/#contact" className="text-trust-peach font-medium text-sm hover:underline">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/15 text-center text-white/60 text-sm">
          © {year} Vandana Childcare Trust. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
