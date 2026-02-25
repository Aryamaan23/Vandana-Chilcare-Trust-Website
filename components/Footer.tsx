import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-trust-navy text-white py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
              className="text-white/80 hover:text-trust-peach text-sm font-medium transition"
            >
              Instagram
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
