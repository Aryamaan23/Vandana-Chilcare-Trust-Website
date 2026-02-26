import Image from 'next/image';
import Link from 'next/link';

const timeline = [
  { year: '2016', title: 'Foundation', desc: 'Vandana Childcare Trust was established in Prayagraj (Allahabad) to support underprivileged children and women.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { year: '2017–2019', title: 'Centres', desc: 'Established the Training Centre in Pritamnagar and the Cultural Centre on Minto Road, offering academic, vocational, and cultural programmes.', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { year: '2020–2022', title: 'Health & Outreach', desc: 'Expanded health awareness programmes and hospital outreach at Tej Bahadur Sapru and Bailey Hospital.', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { year: '2023–Present', title: 'Growth & Impact', desc: 'Talent promotion, cultural events, and stronger community partnerships across Prayagraj.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
];

export const metadata = {
  title: 'About Us | Vandana Childcare Trust',
  description: 'Our story, mission, vision, and journey since 2016 in Prayagraj (Allahabad).',
};

export default function AboutPage() {
  return (
    <main>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-br from-trust-navy via-trust-navy-light to-trust-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(253,240,232,0.08)_0%,_transparent_50%)]" />
        <div className="absolute top-20 right-0 w-64 h-64 bg-trust-accent/10 rounded-full blur-3xl" aria-hidden />
        <div className="absolute bottom-20 left-0 w-48 h-48 bg-trust-peach/10 rounded-full blur-2xl" aria-hidden />
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
                We run a Training Centre in Pritamnagar and a Cultural Centre on Minto Road, and conduct health awareness programmes, talent promotion, and cultural events—building a more inclusive and caring community.
              </p>
              <Link href="/#initiatives" className="btn-primary mt-4">
                See our initiatives
              </Link>
            </div>
            <div className="flex justify-center items-center bg-gradient-to-br from-trust-peach to-trust-peach-warm rounded-2xl p-8 md:p-10 border border-trust-peach-warm shadow-soft min-h-[280px] md:min-h-[320px]">
              <Image
                src="/vct-image.jpeg"
                alt="Vandana Childcare Trust"
                width={320}
                height={320}
                className="w-full max-w-[280px] md:max-w-[320px] h-auto object-contain rounded-2xl shadow-soft"
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

      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-trust-peach/60 via-white to-trust-peach/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(196,92,122,0.06)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(26,54,93,0.05)_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">Our Journey</h2>
          <p className="text-center text-trust-navy/80 max-w-2xl mx-auto mb-16">
            Key milestones since our foundation.
          </p>
          <div className="relative max-w-3xl mx-auto">
            <ul className="space-y-6">
              {timeline.map((item, i) => (
                <li key={i} className="relative flex gap-5 md:gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border-2 border-trust-accent/30 shadow-soft flex items-center justify-center z-10 ring-4 ring-white">
                      <svg className="w-6 h-6 md:w-7 md:h-7 text-trust-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 min-h-[24px] bg-gradient-to-b from-trust-accent/40 to-trust-accent/20 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="bg-white rounded-2xl border border-trust-peach-warm shadow-soft hover:shadow-soft-hover hover:border-trust-accent/20 p-6 md:p-8 transition-all duration-300">
                      <span className="inline-block font-display text-2xl font-bold text-trust-accent mb-2">{item.year}</span>
                      <h3 className="font-display text-xl font-semibold text-trust-navy mb-3">{item.title}</h3>
                      <p className="text-trust-navy/85 leading-relaxed">{item.desc}</p>
                    </div>
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
