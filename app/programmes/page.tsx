import Link from 'next/link';
import {
  reports,
  programmes,
  getProgrammesByYear,
  type Report,
  type Programme,
} from '@/lib/programmes-data';

function ReportCard({ report }: { report: Report }) {
  return (
    <article className="bg-white rounded-2xl border border-trust-peach-warm shadow-card hover:shadow-card-hover p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
        <h3 className="font-display text-xl font-semibold text-trust-navy">{report.title}</h3>
        <span className="text-sm font-medium text-trust-accent shrink-0">{report.date}</span>
      </div>
      <p className="text-trust-navy/85 leading-relaxed mb-4">{report.summary}</p>
      {report.link && (
        <a
          href={report.link}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent text-sm font-semibold"
        >
          {report.linkLabel || 'View report'} →
        </a>
      )}
    </article>
  );
}

function ProgrammeCard({ programme }: { programme: Programme }) {
  const coverImage = programme.images[0];
  const otherImages = programme.images.slice(1, 5);

  return (
    <article className="bg-white rounded-2xl border border-trust-peach-warm shadow-card hover:shadow-card-hover overflow-hidden transition-all duration-300 hover:-translate-y-0.5">
      <div className="grid md:grid-cols-5 gap-0">
        <div className="md:col-span-2 relative aspect-[4/3] md:aspect-auto md:min-h-[280px] bg-trust-peach-warm/50">
          {coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={coverImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-trust-navy/40">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          {otherImages.length > 0 && (
            <div className="absolute bottom-2 left-2 right-2 flex gap-1 overflow-x-auto pb-1">
              {otherImages.map((src, i) => (
                <div key={i} className="w-12 h-12 shrink-0 rounded overflow-hidden border-2 border-white shadow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-trust-navy text-white">
              {programme.category}
            </span>
            {programme.status === 'current' && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                Ongoing
              </span>
            )}
          </div>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-trust-navy mb-2">
            {programme.title}
          </h3>
          <p className="text-sm text-trust-navy/70 mb-3">
            {programme.date}
            {programme.location && ` · ${programme.location}`}
          </p>
          <p className="text-trust-navy/85 leading-relaxed">{programme.description}</p>
        </div>
      </div>
    </article>
  );
}

export default function ProgrammesPage() {
  const byYear = getProgrammesByYear();

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-br from-trust-navy via-trust-navy-light to-trust-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(253,240,232,0.08)_0%,_transparent_50%)]" />
        <div className="absolute top-24 right-16 w-48 h-48 bg-trust-accent/10 rounded-full blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-trust-peach/90 text-lg tracking-wide uppercase mb-3">
            Documentation & impact
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Programmes & Reports
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            A consolidated view of our studies, reports, and all programmes—current and historical—for partners, donors, and officials.
          </p>
        </div>
      </section>

      {/* Studies & Reports */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-trust-navy mb-2">
            Studies & Reports
          </h2>
          <p className="text-trust-navy/75 max-w-2xl mb-12">
            Published reports and studies on our activities and impact. Add new entries in{' '}
            <code className="text-sm bg-trust-peach-warm px-1.5 py-0.5 rounded">lib/programmes-data.ts</code>.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {reports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
          {reports.length === 0 && (
            <p className="text-trust-navy/60 italic">No reports published yet. Add entries in the data file to list them here.</p>
          )}
        </div>
      </section>

      {/* Programmes – full history */}
      <section className="py-20 md:py-28 bg-trust-peach">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-trust-navy mb-2">
            Programmes
          </h2>
          <p className="text-trust-navy/75 max-w-2xl mb-12">
            Detailed record of each programme with photographs and outcomes. Add new programmes and photos via the data file and <code className="text-sm bg-trust-peach-warm px-1.5 py-0.5 rounded">public/programmes/</code>.
          </p>

          {byYear.map(({ year, items }) => (
            <div key={year} className="mb-16 last:mb-0">
              <h3 className="font-display text-2xl font-semibold text-trust-navy mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-trust-navy text-white flex items-center justify-center text-lg font-bold">
                  {year}
                </span>
                {year}
              </h3>
              <div className="space-y-8">
                {items.map((programme) => (
                  <ProgrammeCard key={programme.id} programme={programme} />
                ))}
              </div>
            </div>
          ))}

          {programmes.length === 0 && (
            <p className="text-trust-navy/60 italic">No programmes added yet. Add entries in the data file to list them here.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-trust-navy text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
            For more updates
          </h2>
          <p className="text-white/85 max-w-xl mx-auto mb-8">
            Follow our activities on Instagram and Substack, or get in touch for detailed documentation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#gallery" className="btn-accent-rect">
              Our Moments
            </Link>
            <Link href="/#contact" className="inline-flex items-center justify-center rounded-lg border-2 border-white/50 px-6 py-3.5 text-white font-semibold hover:bg-white/10 transition">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
