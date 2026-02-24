const initiatives = [
  {
    title: 'Health & Hygiene',
    description:
      'We organise health awareness programmes and provide medical support. On 1 January 2026, we distributed blankets, healthy food, and fresh fruits at the PICU and Ladies\' Ward of Tej Bahadur Sapru Hospital. We also run programmes at Belly Hospital and other facilities, with experts emphasising healthy lifestyle, hygiene, and good habits.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Educational Training',
    description:
      'We operate the Vandana Childcare Trust Training Centre on Minto Road, where children receive academic and vocational guidance in a supportive environment.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Talent Promotion',
    description:
      'We recognise and honour student achievements. For example, student Ved Sharma won a gold medal in the state-level Taekwondo championship—we celebrate such excellence and encourage every child to shine.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Cultural & Social Events',
    description:
      'We regularly organise celebrations like Tulsi Day, Christmas, and Teachers\' Day to instil environmental awareness and cultural harmony in the community.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Initiatives() {
  return (
    <section id="initiatives" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-4">Our Initiatives</h2>
        <p className="text-center text-trust-navy/80 max-w-2xl mx-auto mb-14">
          Holistic development through health, education, talent, and culture.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {initiatives.map((item, i) => (
            <div
              key={i}
              className="group bg-trust-peach/50 rounded-2xl p-6 md:p-8 border border-trust-peach-warm hover:border-trust-accent/30 hover:shadow-soft-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-trust-navy text-white flex items-center justify-center mb-4 group-hover:bg-trust-accent group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-trust-navy mb-3">
                {item.title}
              </h3>
              <p className="text-trust-navy/80 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
