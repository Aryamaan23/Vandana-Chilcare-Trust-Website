import Image from 'next/image';

const newsItems = [
  {
    title: 'Health awareness programme at Belly Hospital',
    date: 'Jan 4, 2026',
    source: 'Live Hindustan',
    summary:
      'Vandana Childcare Trust organised a health awareness programme at Belly Hospital. Dr. Bhavna Sharma (Chief Medical Superintendent) emphasised the importance of a healthy lifestyle, hygiene, and good habits. The trust distributed warm clothes and food to patients in the PICU and Ladies\' Ward. Vice President Kalpna Gupta, Treasurer Mamta, and other office bearers were present.',
    url: 'https://www.livehindustan.com/uttar-pradesh/prayagraj/story-health-awareness-program-at-belly-hospital-by-vandana-child-care-trust-201767540638701.html',
  },
  {
    title: 'Warm clothes and food distributed at Raj Andh Vidyalaya',
    date: 'Dec 23, 2024',
    source: 'Live Hindustan',
    summary:
      'At Raj Andh Vidyalaya (Civil Lines), the trust distributed warm clothes and food to children. President Vandana Pandey, Vice President Kalpna Gupta, Treasurer Mamta Maharani, and other members including Dr. Pratima Mishra, Pushpa Shukla, and Poonam Tiwari were present.',
    url: 'https://www.livehindustan.com/uttar-pradesh/prayagraj/story-vandana-child-care-trust-distributes-warm-clothes-and-food-to-children-in-prayagraj-201734960211768.html',
  },
];

export default function News() {
  return (
    <section id="news" className="py-20 md:py-28 bg-gradient-to-b from-trust-peach via-white to-trust-peach">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-4">Recent News & Stories</h2>
        <p className="text-center text-trust-navy/80 max-w-2xl mx-auto mb-8">
          Our work in the community, as covered by the press.
        </p>
        {/* As featured in - Hindustan logo */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-trust-navy text-white shadow-soft">
            <span className="text-sm font-medium text-white/90 uppercase tracking-wider">As featured in</span>
            <div className="relative w-32 h-10 flex-shrink-0">
              <Image
                src="/gallery/image.png"
                alt="Hindustan"
                fill
                className="object-contain object-center"
                unoptimized
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {newsItems.map((item, i) => (
            <article
              key={i}
              className="group rounded-2xl border border-trust-peach-warm bg-white p-6 md:p-8 hover:border-trust-accent/30 hover:shadow-soft-hover transition-all duration-300 overflow-hidden relative"
            >
              <div className="absolute top-4 right-4 w-16 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
                <Image
                  src="/gallery/image.png"
                  alt="Hindustan"
                  width={64}
                  height={32}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-trust-accent font-medium mb-3 pr-20">
                <time dateTime={item.date}>{item.date}</time>
                <span>·</span>
                <span>{item.source}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-trust-navy mb-3">
                {item.title}
              </h3>
              <p className="text-trust-navy/80 text-sm leading-relaxed mb-4">
                {item.summary}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent inline-flex items-center gap-1 text-sm"
              >
                Read on Live Hindustan
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
