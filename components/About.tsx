export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-trust-peach">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="section-title mb-6">About Us</h2>
            <p className="text-trust-navy/90 leading-relaxed mb-4">
              <strong className="text-trust-navy">Vandana Childcare Trust</strong> is a non-profit organisation based in Prayagraj (Allahabad),
              Uttar Pradesh, dedicated to the welfare, education, and health of underprivileged children and women.
            </p>
            <p className="text-trust-navy/90 leading-relaxed mb-4">
              Founded in <strong className="text-trust-navy">2016</strong>, the trust operates a training centre and conducts various community
              outreach programmes to foster social unity and cultural values.
            </p>
            <p className="text-trust-navy/90 leading-relaxed">
              Our mission is holistic development—ensuring every child and woman we touch has access to care,
              learning, and opportunity.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-trust-peach-warm shadow-soft hover:shadow-soft-hover transition-shadow">
            <h3 className="font-display text-xl font-semibold text-trust-navy mb-4">Our Vision</h3>
            <p className="text-trust-navy/90 leading-relaxed">
              A society where every child and woman can thrive—with access to health, education, and dignity.
              We work towards environmental awareness, cultural harmony, and lasting social change in our community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
