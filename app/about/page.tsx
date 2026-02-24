import Image from 'next/image';
import Link from 'next/link';

const timeline = [
  { year: '2016', title: 'Foundation', desc: 'Vandana Childcare Trust was established in Prayagraj (Allahabad) to support underprivileged children and women.' },
  { year: '2017–2019', title: 'Training Centre', desc: 'Set up the training centre on Minto Road, offering academic and vocational guidance.' },
  { year: '2020–2022', title: 'Health & Outreach', desc: 'Expanded health awareness programmes and hospital outreach at Tej Bahadur Sapru and Belly Hospital.' },
  { year: '2023–Present', title: 'Growth & Impact', desc: 'Talent promotion, cultural events, and stronger community partnerships across Prayagraj.' },
];

export const metadata = {
  title: 'About Us | Vandana Childcare Trust',
  description: 'Our story, mission, vision, and journey since 2016 in Prayagraj (Allahabad).',
};

export default function AboutPage() {
  return (
    <main>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-trust-navy to-trust-navy-light text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(253,240,232,0.08)_0%,_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-trust-peach/90 text-lg tracking-wide uppercase mb-3">Who we are</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Vandana Childcare Trust</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            A non-profit in Prayagraj dedicated to the welfare, education, and health of underprivileged children and women since 2016.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Our Story</h2>
              <p className="text-trust-navy/90 leading-relaxed mb-4">
                <strong className="text-trust-navy">Vandana Childcare Trust</strong> was founded in 2016 in Prayagraj (Allahabad), Uttar Pradesh, with a clear focus: to support underprivileged children and women through care, education, and health initiatives.
              </p>
              <p className="text-trust-navy/90 leading-relaxed mb-4">
                We run a training centre on Minto Road and conduct health awareness programmes, talent promotion, and cultural events—building a more inclusive and caring community.
              </p>
              <Link href="/#initiatives" className="btn-primary mt-4">
                See our initiatives
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-soft-hover border border-trust-peach-warm">
              <Image
                src="/vct-image.jpeg"
                alt="Vandana Childcare Trust"
                width={600}
                height={400}
                className="w-full h-72 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-trust-peach">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">Mission & Vision</h2>
          <p className="text-center text-trust-navy/80 max-w-2xl mx-auto mb-14">
            Our guiding principles for holistic development and lasting change.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-trust-peach-warm shadow-soft">
              <div className="w-14 h-14 rounded-xl bg-trust-navy text-white flex items-center justify-center mb-5">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-trust-navy mb-3">Our Mission</h3>
              <p className="text-trust-navy/90 leading-relaxed">
                To ensure every child and woman we touch has access to care, learning, and opportunity—through health programmes, education, talent promotion, and cultural harmony.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-trust-peach-warm shadow-soft">
              <div className="w-14 h-14 rounded-xl bg-trust-accent text-white flex items-center justify-center mb-5">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-trust-navy mb-3">Our Vision</h3>
              <p className="text-trust-navy/90 leading-relaxed">
                A society where every child and woman can thrive—with access to health, education, and dignity. We work towards environmental awareness, cultural harmony, and lasting social change in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">Our Journey</h2>
          <p className="text-center text-trust-navy/80 max-w-2xl mx-auto mb-14">
            Key milestones since our foundation.
          </p>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-trust-peach-warm -translate-x-1/2 md:translate-x-0" />
            <ul className="space-y-10">
              {timeline.map((item, i) => (
                <li key={i} className="relative flex flex-col md:flex-row gap-4 md:gap-8 md:items-center">
                  <div className="md:w-1/2 md:text-right md:pr-12">
                    <span className="inline-block font-display text-2xl font-bold text-trust-accent">{item.year}</span>
                    <h3 className="font-display text-lg font-semibold text-trust-navy mt-1">{item.title}</h3>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-trust-navy border-4 border-white shadow -translate-x-1/2 md:translate-x-0 mt-1.5" />
                  <div className="md:w-1/2 pl-12 md:pl-12">
                    <p className="text-trust-navy/85 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-trust-navy text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">Join us in making a difference</h2>
          <p className="text-white/85 max-w-xl mx-auto mb-8">
            Support our programmes through donations, volunteering, or partnerships.
          </p>
          <Link href="/get-involved/" className="btn-accent">
            Get involved
          </Link>
        </div>
      </section>
    </main>
  );
}
