const principles = [
  'We are committed to care and dignity for every child and woman.',
  'We work for holistic development—health, education, and opportunity.',
  'We foster community, cultural harmony, and environmental awareness.',
  'We are transparent and accountable to our community.',
];

export default function Principles() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-trust-peach-warm/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-trust-navy text-center mb-10">
          The principles that drive us
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {principles.map((line, i) => (
            <p
              key={i}
              className="text-trust-navy/85 text-center text-lg font-medium"
            >
              {line}
            </p>
          ))}
        </div>
        <p className="text-center mt-10">
          <a href="#about" className="link-accent">
            Learn more about who we are →
          </a>
        </p>
      </div>
    </section>
  );
}
