'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 2016, suffix: '', label: 'Founded', sub: 'Establishment year', textOnly: false },
  { value: 10, suffix: '+', label: 'Years of service', sub: 'Serving the community', textOnly: false },
  { value: 4, suffix: '', label: 'Core initiatives', sub: 'Health, education, talent, culture', textOnly: false },
  { value: 2, suffix: '', label: 'Centres', sub: 'Training (Pritamnagar) & Cultural (Minto Road), Prayagraj', textOnly: false },
  { value: 50, suffix: '+', label: 'Team', sub: 'Dedicated members', textOnly: false },
  { value: 10, suffix: '+', label: 'Interns', sub: 'Completed internships', textOnly: false },
  { value: 0, suffix: '', label: '12A & 80G', sub: 'Certified', textOnly: true },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}

function animateValue(end: number, duration: number, onUpdate: (n: number) => void) {
  const start = 0;
  const startTime = performance.now();
  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (end - start) * easeOut);
    onUpdate(current);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function StatItem({
  value,
  suffix,
  label,
  sub,
  inView,
  textOnly,
}: {
  value: number;
  suffix: string;
  label: string;
  sub: string;
  inView: boolean;
  textOnly?: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (textOnly || !inView || done.current) return;
    done.current = true;
    animateValue(value, 1500, setDisplay);
  }, [inView, value, textOnly]);

  const show = inView ? display : 0;

  if (textOnly) {
    return (
      <div className="text-center group relative">
        <p className="font-display text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-trust-peach transition-colors duration-300">
          {label}
        </p>
        <p className="text-sm text-white/70 mt-0.5">{sub}</p>
      </div>
    );
  }

  return (
    <div className="text-center group relative">
      <p className="font-display text-4xl md:text-5xl font-bold text-white mb-1 group-hover:text-trust-peach transition-colors duration-300">
        {show}
        {suffix}
      </p>
      <p className="font-semibold text-trust-peach/90">{label}</p>
      <p className="text-sm text-white/70 mt-0.5">{sub}</p>
    </div>
  );
}

export default function AnimatedStats() {
  const { ref, inView } = useInView(0.15);

  return (
    <section ref={ref} className="relative py-20 md:py-24 bg-trust-navy text-white overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30" aria-hidden />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-7 gap-8 md:gap-12">
          {stats.map((item, i) => (
            <StatItem
              key={i}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              sub={item.sub}
              inView={inView}
              textOnly={item.textOnly}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
