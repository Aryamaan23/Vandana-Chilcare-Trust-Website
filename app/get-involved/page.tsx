'use client';

import { useState } from 'react';
import Link from 'next/link';

const tabs = [
  {
    id: 'donate',
    label: 'Donate',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    content: (
      <>
        <p className="text-trust-navy/90 leading-relaxed mb-4">
          Your contribution helps us run health camps, educational programmes, and community events. Every amount makes a difference.
        </p>
        <ul className="space-y-2 text-trust-navy/90 mb-6">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-trust-accent" />
            Fund health awareness and hospital outreach
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-trust-accent" />
            Support our Training Centre (Pritamnagar) & Cultural Centre (Minto Road)
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-trust-accent" />
            Sponsor cultural events and talent promotion
          </li>
        </ul>
        <p className="text-trust-navy/80 text-sm mb-4">
          You can donate securely online via Razorpay (cards, UPI, net banking). We will email you a receipt for your records.
        </p>
        <Link href="/donate/" className="btn-accent-rect inline-flex">
          Donate now
        </Link>
      </>
    ),
  },
  {
    id: 'volunteer',
    label: 'Volunteer',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    content: (
      <>
        <p className="text-trust-navy/90 leading-relaxed mb-4">
          Volunteers help us with teaching, event organisation, health camps, and day-to-day support at the training centre.
        </p>
        <ul className="space-y-2 text-trust-navy/90 mb-6">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-trust-accent" />
            Teaching or mentoring at the training centre
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-trust-accent" />
            Assisting at health awareness programmes
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-trust-accent" />
            Helping at cultural and social events
          </li>
        </ul>
        <p className="text-trust-navy/80 text-sm">
          If you are in or around Prayagraj and would like to volunteer, please get in touch via our{' '}
          <Link href="/#contact" className="link-accent">Contact</Link> section or our social channels.
        </p>
      </>
    ),
  },
  {
    id: 'partner',
    label: 'Partner',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    content: (
      <>
        <p className="text-trust-navy/90 leading-relaxed mb-4">
          We welcome partnerships with schools, hospitals, corporates, UN agencies, and other NGOs to scale our impact. We are building towards institutional partnerships with transparency and measurable outcomes.
        </p>
        <ul className="space-y-2 text-trust-navy/90 mb-6">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-trust-accent" />
            Hospital and health institution collaborations
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-trust-accent" />
            Educational and vocational training tie-ups
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-trust-accent" />
            CSR and community outreach programmes
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-trust-accent" />
            UN SDG-aligned programmes (Health, Education, Gender Equality)
          </li>
        </ul>
        <div className="bg-trust-peach/60 rounded-xl p-4 md:p-5 border border-trust-peach-warm mb-6">
          <h4 className="font-display font-semibold text-trust-navy mb-2">Partnership readiness</h4>
          <p className="text-trust-navy/85 text-sm leading-relaxed mb-3">
            We maintain transparent governance, annual activity reports, and documented impact. We are 12A & 80G certified. Our work aligns with UN Sustainable Development Goals (SDGs) 3, 4, and 5. We are open to CSR collaborations, institutional grants, and long-term partnerships. 10+ interns have completed internships with us.
          </p>
          <p className="text-trust-navy/80 text-xs">
            For partnership enquiries, reach out via our <Link href="/#contact" className="link-accent">Contact</Link> page.
          </p>
        </div>
        <Link href="/#contact" className="btn-primary inline-flex">
          Partnership enquiry
        </Link>
      </>
    ),
  },
];

export default function GetInvolvedPage() {
  const [active, setActive] = useState('donate');

  return (
    <main>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-br from-trust-accent via-trust-accent-light to-trust-accent text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(26,54,93,0.15)_0%,_transparent_50%)]" />
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" aria-hidden />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-trust-navy/10 rounded-full blur-2xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-white/90 text-lg tracking-wide uppercase mb-3">Support us</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl text-white/95 max-w-2xl">
            Donate, volunteer, or partner with us to create lasting change for children and women in Prayagraj.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-trust-peach">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-2 p-2 bg-white rounded-2xl shadow-soft border border-trust-peach-warm mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  active === tab.id
                    ? 'bg-trust-navy text-white shadow'
                    : 'text-trust-navy/80 hover:bg-trust-peach-warm/50'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-trust-peach-warm shadow-soft">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={active === tab.id ? 'block' : 'hidden'}
              >
                <h2 className="font-display text-2xl font-semibold text-trust-navy mb-6">{tab.label}</h2>
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-t border-trust-peach-warm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-trust-navy mb-4">Visit or write to us</h2>
          <p className="text-trust-navy/80 max-w-xl mx-auto mb-8">
            Cultural Centre: 1A/2B, Minto Road. Training Centre: Pritamnagar. Prayagraj (Allahabad), Uttar Pradesh 211001. Follow us on Instagram and Substack for updates.
          </p>
          <Link href="/#contact" className="btn-primary">
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}
