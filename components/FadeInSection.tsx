'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300;
};

export default function FadeInSection({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delayClass =
    delay === 100
      ? '[animation-delay:100ms]'
      : delay === 200
        ? '[animation-delay:200ms]'
        : delay === 300
          ? '[animation-delay:300ms]'
          : '';

  const visibleClass =
    visible && reducedMotion
      ? 'opacity-100 translate-y-0'
      : visible
        ? 'animate-fade-in-up opacity-0 [animation-fill-mode:forwards]'
        : 'opacity-0 translate-y-6';

  return (
    <div ref={ref} className={`${visibleClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
