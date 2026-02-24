export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-trust-peach">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-4">Contact Us</h2>
        <p className="text-center text-trust-navy/80 max-w-2xl mx-auto mb-14">
          Visit us, follow our updates, or reach out for collaborations.
        </p>
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row gap-6 sm:items-start bg-white rounded-2xl p-6 md:p-8 border border-trust-peach-warm shadow-soft">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-trust-navy text-white flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-trust-navy mb-2">Address</h3>
              <p className="text-trust-navy/90">
                1A/2B, Minto Road<br />
                Prayagraj (Allahabad), Uttar Pradesh 211001<br />
                India
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:items-start bg-white rounded-2xl p-6 md:p-8 border border-trust-peach-warm shadow-soft">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-trust-navy text-white flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-trust-navy mb-2">Website & Social</h3>
              <p className="text-trust-navy/90 mb-2">
                Official updates:{' '}
                <a
                  href="https://vandanachildcaretrust.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  vandanachildcaretrust.substack.com
                </a>
              </p>
              <p className="text-trust-navy/90">
                Instagram:{' '}
                <a
                  href="https://instagram.com/vandana_childcare_trust"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  @vandana_childcare_trust
                </a>
                {' '}— latest activities and photos (updated through February 2026).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
