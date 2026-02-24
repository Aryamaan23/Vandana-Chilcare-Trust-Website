import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 pt-28 pb-20 overflow-hidden bg-gradient-to-b from-trust-peach via-white/40 via-trust-peach-warm/50 to-trust-peach">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(26,54,93,0.06)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(196,92,122,0.04)_0%,_transparent_45%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-trust-navy/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-4xl flex flex-col items-center text-center">
        <div className="mb-8 animate-fade-in opacity-0 [animation-fill-mode:forwards]">
          <Image
            src="/vct-image.jpeg"
            alt="Vandana Child Care Trust Prayagraj"
            width={160}
            height={160}
            className="rounded-full object-cover ring-4 ring-white shadow-soft-hover animate-float [animation-delay:700ms]"
          />
        </div>
        <p className="font-display text-trust-navy/70 text-lg md:text-xl mb-3 tracking-wide uppercase animate-fade-in opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]">
          Prayagraj (Allahabad), Uttar Pradesh
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-trust-navy leading-tight mb-6 animate-fade-in-up opacity-0 [animation-delay:150ms] [animation-fill-mode:forwards]">
          Vandana Childcare Trust
        </h1>
        <p className="text-xl md:text-2xl text-trust-navy/80 max-w-2xl mx-auto mb-4 font-medium animate-fade-in-up opacity-0 [animation-delay:250ms] [animation-fill-mode:forwards]">
          We provide care, education, and health support to underprivileged children and women in our community.
        </p>
        <p className="text-lg text-trust-navy/70 max-w-xl mx-auto mb-12 animate-fade-in-up opacity-0 [animation-delay:350ms] [animation-fill-mode:forwards]">
          Building a brighter future since 2016—through holistic development, community outreach, and cultural harmony.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0 [animation-delay:450ms] [animation-fill-mode:forwards]">
          <a href="#initiatives" className="btn-primary">
            Our Initiatives
          </a>
          <a href="#contact" className="btn-accent-rect">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
