'use client';

import Image from 'next/image';

const collaborations = [
  {
    name: 'Omaxe Prayagraj',
    description: 'Partnership in community outreach and welfare initiatives in Prayagraj.',
    logo: '/gallery/image%20copy.png',
  },
  {
    name: 'Inner Wheel Club Prayagraj',
    description: 'Collaboration on women and children welfare programmes in the region.',
    logo: '/gallery/image%20copy%203.png',
  },
  {
    name: 'All India Women\'s Conference Prayagraj',
    description: 'Joint efforts for women\'s empowerment and community development in Prayagraj.',
    logo: '/gallery/image%20copy%202.png',
  },
];

export default function Collaborations() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-trust-peach/30 via-white to-trust-peach/30 border-y border-trust-peach-warm/80 overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-trust-navy mb-2">
            Collaborations so far
          </h2>
          <div className="section-subtitle section-subtitle-center" />
          <p className="text-center text-trust-navy/75 max-w-2xl mx-auto mt-4">
          We work with trusted partners in Prayagraj to amplify our impact. We are open to institutional partnerships with corporates, UN agencies, and NGOs—aligned with SDGs and transparent impact reporting.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {collaborations.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white/80 backdrop-blur rounded-2xl p-6 md:p-8 border border-trust-peach-warm shadow-card hover:shadow-card-hover hover:border-trust-accent/25 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-5 w-24 h-24 md:w-28 md:h-28 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  className="object-contain p-1"
                  unoptimized
                />
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
