const stats = [
  { value: '2016', label: 'Founded', sub: 'Years of service' },
  { value: '4', label: 'Core initiatives', sub: 'Health, education, talent, culture' },
  { value: '1', label: 'Training centre', sub: 'Minto Road, Prayagraj' },
  { value: '5+', label: 'Office bearers', sub: 'Dedicated leadership' },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20 bg-trust-navy text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((item, i) => (
            <div
              key={i}
              className="text-center group"
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-white mb-1 group-hover:text-trust-peach transition">
                {item.value}
              </p>
              <p className="font-semibold text-trust-peach/90">{item.label}</p>
              <p className="text-sm text-white/70 mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
