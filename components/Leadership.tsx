'use client';

import Image from 'next/image';

const leadership = {
  level1: [
    { role: 'President', name: 'Vandana Pandey', photo: '/gallery/IMG_9245.jpeg' },
  ],
  level2: [
    { role: 'Secretary General & Co-Founder', name: 'Aryamaan Pandey', photo: '/gallery/IMG_9145.png' },
    { role: 'Vice President', name: 'Kalpna Gupta' },
    { role: 'Treasurer', name: 'Mamta Maharani' },
  ],
  level3: [
    { role: 'Senior Advisor', name: 'Ranjana Gulati' },
    { role: 'Senior Member', name: 'Fatima Ali' },
    { role: 'Healthcare Advisor', name: 'Dr Pratima Mishra' },
    { role: 'Training Centre Head', name: 'Neelu Sharma' },
  ],
};

function PersonCard({
  name,
  role,
  level,
  photo,
}: {
  name: string;
  role: string;
  level: 1 | 2 | 3;
  photo?: string;
}) {
  const levelStyles = {
    1: 'ring-2 ring-trust-navy/20 shadow-soft-hover bg-gradient-to-br from-trust-navy to-trust-navy-light text-white border-0',
    2: 'border-trust-peach-warm bg-white shadow-soft hover:shadow-soft-hover hover:border-trust-accent/30',
    3: 'border-trust-peach-warm bg-trust-peach/50 hover:bg-trust-peach/70 hover:border-trust-navy/15',
  };
  const roleStyles = {
    1: 'text-white/95',
    2: 'text-trust-accent',
    3: 'text-trust-navy/80',
  };
  const nameStyles = {
    1: 'text-white',
    2: 'text-trust-navy',
    3: 'text-trust-navy',
  };
  const initialStyles = {
    1: 'bg-white/20 text-white',
    2: 'bg-trust-navy text-white',
    3: 'bg-trust-accent/20 text-trust-accent',
  };

  return (
    <div
      className={`
        rounded-2xl p-5 md:p-6 text-center border transition-all duration-300
        flex flex-col items-center min-w-[160px] max-w-[200px]
        ${levelStyles[level]}
      `}
    >
      <div
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-display text-xl md:text-2xl font-semibold mb-3 overflow-hidden flex-shrink-0 ${
          photo ? '' : initialStyles[level]
        }`}
      >
        {photo ? (
          <Image
            src={photo}
            alt={name}
            width={64}
            height={64}
            className="w-full h-full object-cover object-[center_12%]"
            unoptimized
          />
        ) : (
          name.split(' ').map((n) => n.charAt(0)).join('').slice(0, 2)
        )}
      </div>
      <h3 className={`font-display text-base md:text-lg font-semibold ${nameStyles[level]}`}>
        {name}
      </h3>
      <p className={`text-xs md:text-sm font-medium mt-1 ${roleStyles[level]}`}>
        {role}
      </p>
    </div>
  );
}

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 md:py-28 bg-gradient-to-b from-trust-peach/50 via-white to-trust-peach/30 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-4">Our Leadership</h2>
        <p className="text-center text-trust-navy/80 max-w-2xl mx-auto mb-14">
          A dedicated team of office bearers and advisors guiding the trust.
        </p>

        <div className="flex flex-col items-center gap-0">
          {/* Level 1: President */}
          <PersonCard
            name={leadership.level1[0].name}
            role={leadership.level1[0].role}
            level={1}
            photo={leadership.level1[0].photo}
          />

          {/* Tree: vertical stem then horizontal branch */}
          <div className="flex flex-col items-center w-full max-w-xl mx-auto">
            <div className="w-0.5 h-6 bg-trust-navy/35 shrink-0" aria-hidden />
            <div className="w-full border-t border-trust-navy/25" style={{ maxWidth: '85%' }} aria-hidden />
            <div className="w-0.5 h-3 bg-trust-navy/25 shrink-0" aria-hidden />
          </div>

          {/* Level 2: Core leadership */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {leadership.level2.map((person, i) => (
              <PersonCard key={i} name={person.name} role={person.role} level={2} photo={person.photo} />
            ))}
          </div>

          {/* Tree: stem to level 3 */}
          <div className="flex flex-col items-center w-full max-w-2xl mx-auto mt-1">
            <div className="w-0.5 h-5 bg-trust-navy/25 shrink-0" aria-hidden />
            <div className="w-full border-t border-trust-navy/20" style={{ maxWidth: '90%' }} aria-hidden />
            <div className="w-0.5 h-3 bg-trust-navy/20 shrink-0" aria-hidden />
          </div>

          {/* Level 3: Advisors & heads */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-5">
            {leadership.level3.map((person, i) => (
              <PersonCard key={i} name={person.name} role={person.role} level={3} />
            ))}
          </div>
        </div>

        <p className="text-center text-trust-navy/50 text-xs mt-10 uppercase tracking-wider">
          Organizational structure
        </p>
      </div>
    </section>
  );
}
