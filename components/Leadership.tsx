const team = [
  { role: 'President', name: 'Vandana Pandey' },
  { role: 'Secretary General & Co-Founder', name: 'Aryamaan Pandey' },
  { role: 'Vice President', name: 'Kalpna Gupta' },
  { role: 'Treasurer', name: 'Mamta Maharani' },
  { role: 'Training Centre Head', name: 'Neelu Sharma' },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-4">Our Leadership</h2>
        <p className="text-center text-trust-navy/80 max-w-2xl mx-auto mb-14">
          A dedicated team of office bearers guiding the trust.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((person, i) => (
            <div
              key={i}
              className="bg-trust-peach/40 rounded-2xl p-6 md:p-8 text-center border border-trust-peach-warm hover:border-trust-navy/20 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-trust-navy text-white flex items-center justify-center font-display text-2xl font-semibold">
                {person.name.charAt(0)}
              </div>
              <h3 className="font-display text-lg font-semibold text-trust-navy">
                {person.name}
              </h3>
              <p className="text-trust-accent text-sm font-medium mt-1">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
