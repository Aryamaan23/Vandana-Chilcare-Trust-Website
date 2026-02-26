'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const stories = [
  {
    quote: 'The health camp at the hospital showed our family how small habits can keep children safe. We are grateful for the blankets and the care.',
    author: 'Parent, Prayagraj',
    type: 'Health outreach',
  },
  {
    quote: 'My son won a gold in Taekwondo. The trust honoured him and encouraged other children to pursue their talents. It means a lot to us.',
    author: 'Parent of Ved Sharma',
    type: 'Talent promotion',
  },
  {
    quote: 'The training centre gave my daughter a place to study after school. The teachers are kind and the environment is safe.',
    author: 'Guardian, Pritamnagar area',
    type: 'Education',
  },
  {
    quote: 'We celebrated Tulsi Day and Christmas together. Such events bring the community closer and teach our children to respect all cultures.',
    author: 'Community member',
    type: 'Cultural events',
  },
  {
    quote: 'The blanket and fruit distribution at the hospital in January was a blessing in the cold. Thank you for thinking of the families.',
    author: 'Family at Tej Bahadur Sapru Hospital',
    type: 'Health outreach',
  },
];

export default function StoriesPage() {
  const [active, setActive] = useState(0);
  const current = stories[active];

  return (
    <main>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-br from-trust-navy via-trust-navy-light to-trust-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(196,92,122,0.12)_0%,_transparent_50%)]" />
        <div className="absolute top-24 right-24 w-48 h-48 bg-trust-accent/10 rounded-full blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-trust-peach/90 text-lg tracking-wide uppercase mb-3">Impact</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Stories & Impact</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Voices from the community—parents, guardians, and partners—on how Vandana Childcare Trust has made a difference.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-trust-peach">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-trust-peach-warm shadow-soft min-h-[320px] flex flex-col">
            <span className="text-6xl text-trust-accent/30 font-display leading-none mb-4">“</span>
            <blockquote className="font-display text-xl md:text-2xl text-trust-navy leading-relaxed flex-1">
              {current.quote}
            </blockquote>
            <div className="mt-8 pt-6 border-t border-trust-peach-warm flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-trust-navy">{current.author}</p>
                <p className="text-sm text-trust-accent">{current.type}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActive((prev) => (prev === 0 ? stories.length - 1 : prev - 1))}
                  className="w-12 h-12 rounded-full bg-trust-peach-warm text-trust-navy flex items-center justify-center hover:bg-trust-navy hover:text-white transition"
                  aria-label="Previous story"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setActive((prev) => (prev === stories.length - 1 ? 0 : prev + 1))}
                  className="w-12 h-12 rounded-full bg-trust-navy text-white flex items-center justify-center hover:bg-trust-navy-light transition"
                  aria-label="Next story"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {stories.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === active ? 'bg-trust-navy scale-125' : 'bg-trust-navy/30 hover:bg-trust-navy/50'
                }`}
                aria-label={`Go to story ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">More impact</h2>
          <p className="text-center text-trust-navy/80 max-w-2xl mx-auto mb-8">
            Explore our initiatives and moments from the field.
          </p>
          <div className="flex justify-center mb-10">
            <Link
              href="/#news"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-trust-navy text-white hover:bg-trust-navy-light transition shadow-soft hover:shadow-soft-hover"
            >
              <span className="text-sm font-medium text-white/90">As featured in</span>
              <div className="relative w-28 h-7">
                <Image
                  src="/gallery/image.png"
                  alt="Hindustan"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#initiatives" className="btn-primary">
              Our initiatives
            </Link>
            <Link href="/#gallery" className="btn-accent">
              Our moments
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
