import Image from 'next/image';
import Link from 'next/link';

export default function FounderMessagePage() {
  return (
    <main>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-br from-trust-navy via-trust-navy-light to-trust-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(196,92,122,0.1)_0%,_transparent_50%)]" />
        <div className="absolute top-20 right-20 w-56 h-56 bg-trust-accent/10 rounded-full blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-trust-peach/90 text-lg tracking-wide uppercase mb-3">From our leadership</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Founder & Co-founder Message</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            A shared vision for holistic development, care, and opportunity for every child and woman in our community.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-trust-peach">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20">
            {/* Founder: Vandana Pandey */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
              <div className="flex-shrink-0 w-full md:w-72">
                <div className="relative aspect-[3/4] max-w-[280px] mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-soft border border-trust-peach-warm">
                  <Image
                    src="/gallery/IMG_9245.jpeg"
                    alt="Vandana Pandey - Founder & President"
                    fill
                    className="object-cover object-[center_20%]"
                    unoptimized
                    priority
                  />
                </div>
                <p className="text-center md:text-left font-display text-lg font-semibold text-trust-navy mt-4">Vandana Pandey</p>
                <p className="text-center md:text-left text-trust-accent font-medium text-sm">Founder & President</p>
              </div>
              <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 border border-trust-peach-warm shadow-soft">
                <h2 className="font-display text-xl font-semibold text-trust-navy mb-4">Founder&apos;s Message</h2>
                <p className="text-trust-navy/90 leading-relaxed mb-4">
                  Vandana Childcare Trust was born from a simple belief: every child and woman deserves care, dignity, and the chance to thrive. Since 2016, we have worked tirelessly in Prayagraj to turn this belief into reality—through our training centre, health programmes, and community outreach.
                </p>
                <p className="text-trust-navy/90 leading-relaxed">
                  Our mission is holistic development. We strive to ensure that every life we touch has access to education, health, and opportunity. Thank you for being part of this journey with us.
                </p>
              </div>
            </div>

            {/* Co-founder: Aryamaan Pandey */}
            <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-14 items-start">
              <div className="flex-shrink-0 w-full md:w-72">
                <div className="relative aspect-[3/4] max-w-[280px] mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-soft border border-trust-peach-warm">
                  <Image
                    src="/gallery/IMG_9145.png"
                    alt="Aryamaan Pandey - Co-founder & Secretary General"
                    fill
                    className="object-cover object-[center_20%]"
                    unoptimized
                    priority
                  />
                </div>
                <p className="text-center md:text-right font-display text-lg font-semibold text-trust-navy mt-4">Aryamaan Pandey</p>
                <p className="text-center md:text-right text-trust-accent font-medium text-sm">Co-founder & Secretary General</p>
              </div>
              <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 border border-trust-peach-warm shadow-soft">
                <h2 className="font-display text-xl font-semibold text-trust-navy mb-4">Co-founder&apos;s Message</h2>
                <p className="text-trust-navy/90 leading-relaxed mb-4">
                  Building Vandana Childcare Trust alongside our team has been a privilege. We believe in transparency, accountability, and working hand in hand with the community. Every programme we run—whether at the training centre, in hospitals, or at schools—is designed to create lasting change.
                </p>
                <p className="text-trust-navy/90 leading-relaxed">
                  Together, we can foster a society where every child and woman has the support they need to flourish. We invite you to join us in this mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-t border-trust-peach-warm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/#leadership" className="btn-primary">
            Meet our full leadership team
          </Link>
        </div>
      </section>
    </main>
  );
}
