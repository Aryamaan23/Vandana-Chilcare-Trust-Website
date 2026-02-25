'use client';

const collaborations = [
  {
    name: 'Omaxe Prayagraj',
    description: 'Partnership in community outreach and welfare initiatives in Prayagraj.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    iconBg: 'bg-gradient-to-br from-trust-accent/20 to-trust-accent/5 text-trust-accent',
  },
  {
    name: 'Inner Wheel Club Prayagraj',
    description: 'Collaboration on women and children welfare programmes in the region.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    iconBg: 'bg-gradient-to-br from-trust-navy/15 to-trust-navy/5 text-trust-navy',
  },
  {
    name: 'All India Women\'s Conference Prayagraj',
    description: 'Joint efforts for women\'s empowerment and community development in Prayagraj.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: 'bg-trust-peach-warm text-trust-navy',
  },
];

export default function Collaborations() {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-trust-peach-warm/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-trust-navy text-center mb-4">
          Collaborations so far
        </h2>
        <p className="text-center text-trust-navy/75 max-w-2xl mx-auto mb-14">
          We work with trusted partners in Prayagraj to amplify our impact.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {collaborations.map((item, i) => (
            <div
              key={i}
              className="group relative bg-trust-peach/40 rounded-2xl p-6 md:p-8 border border-trust-peach-warm shadow-soft hover:shadow-soft-hover hover:border-trust-accent/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div
                className={`mb-5 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 ${item.iconBg}`}
              >
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-trust-navy mb-2">
                {item.name}
              </h3>
              <p className="text-trust-navy/85 text-sm leading-relaxed flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
