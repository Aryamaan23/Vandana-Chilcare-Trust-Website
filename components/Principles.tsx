'use client';

const principles = [
  {
    title: 'Care & Dignity',
    text: 'We are committed to care and dignity for every child and woman.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    iconBg: 'bg-gradient-to-br from-trust-accent/20 to-trust-accent/5 text-trust-accent',
  },
  {
    title: 'Holistic Development',
    text: 'We work for holistic development—health, education, and opportunity.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12h.01" />
      </svg>
    ),
    iconBg: 'bg-gradient-to-br from-trust-navy/15 to-trust-navy/5 text-trust-navy',
  },
  {
    title: 'Community & Harmony',
    text: 'We foster community, cultural harmony, and environmental awareness.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    iconBg: 'bg-trust-peach-warm text-trust-navy',
  },
  {
    title: 'Transparency & Accountability',
    text: 'We are transparent and accountable to our community.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    iconBg: 'bg-trust-navy/10 text-trust-navy',
  },
];

export default function Principles() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-trust-peach/30 to-white border-y border-trust-peach-warm/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-trust-navy text-center mb-4">
          The principles that drive us
        </h2>
        <p className="text-center text-trust-navy/75 max-w-2xl mx-auto mb-14">
          Our values guide every programme and decision.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {principles.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-6 md:p-8 border border-trust-peach-warm shadow-soft hover:shadow-soft-hover hover:border-trust-accent/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div
                className={`mb-5 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 ${item.iconBg}`}
              >
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-trust-navy mb-2">
                {item.title}
              </h3>
              <p className="text-trust-navy/85 text-sm leading-relaxed flex-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12">
          <a href="#about" className="link-accent font-semibold inline-flex items-center gap-1.5">
            Learn more about who we are
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </p>
      </div>
    </section>
  );
}
