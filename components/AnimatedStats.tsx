'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 2016, suffix: '', label: 'Founded', sub: 'Years of service' },
  { value: 4, suffix: '', label: 'Core initiatives', sub: 'Health, education, talent, culture' },
  { value: 1, suffix: '', label: 'Training centre', sub: 'Minto Road, Prayagraj' },
  { value: 5, suffix: '+', label: 'Office bearers', sub: 'Dedicated leadership' },
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
}: {
  value: number;
  suffix: string;
  label: string;
  sub: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!inView || done.current) return;
    done.current = true;
    animateValue(value, 1500, setDisplay);
  }, [inView, value]);

  const show = inView ? display : 0;

  return (
    <div className="text-center group">
      <p className="font-display text-4xl md:text-5xl font-bold text-white mb-1 group-hover:text-trust-peach transition">
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
    <section ref={ref} className="py-16 md:py-20 bg-trust-navy text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((item, i) => (
            <StatItem
              key={i}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              sub={item.sub}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
