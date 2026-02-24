'use client';

import { useState } from 'react';

const WHATSAPP_NUMBER = '917355949951';

// Set this in .env.local to your API base (e.g. https://your-api.com) to POST to your server.
// If unset, form POSTs to same-origin /api/contact (works when not using static export).
const CONTACT_API =
  typeof process !== 'undefined' && process.env.NEXT_PUBLIC_CONTACT_API_URL
    ? `${process.env.NEXT_PUBLIC_CONTACT_API_URL.replace(/\/$/, '')}/api/contact`
    : '/api/contact';

const INTEREST_OPTIONS = [
  { value: 'partner', label: 'Partner with the NGO' },
  { value: 'volunteer', label: 'Volunteer' },
  { value: 'help', label: 'General help / Support' },
] as const;

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState<string>('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const buildWhatsAppMessage = () => {
    const lines = [
      '*New interest – Vandana Childcare Trust website*',
      '',
      `*Name:* ${name.trim() || '—'}`,
      `*Phone:* ${phone.trim() || '—'}`,
      `*Interest:* ${INTEREST_OPTIONS.find((o) => o.value === interest)?.label || interest || '—'}`,
      '',
      '*Message:*',
      message.trim() || 'No additional message.',
    ];
    return lines.join('\n');
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(buildWhatsAppMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setSubmitting(true);

    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      interest,
      message: message.trim() || undefined,
    };

    try {
      const res = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setSuccess(true);
        setName('');
        setPhone('');
        setInterest('');
        setMessage('');
        setSubmitting(false);
        return;
      }

      if (res.status === 404) {
        openWhatsApp();
        setSuccess(true);
        setName('');
        setPhone('');
        setInterest('');
        setMessage('');
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      openWhatsApp();
      setSuccess(true);
      setName('');
      setPhone('');
      setInterest('');
      setMessage('');
    } finally {
      setSubmitting(false);
    }
  };

  const canSend = name.trim() && phone.trim() && interest;

  return (
    <section id="contact" className="py-20 md:py-28 bg-trust-peach">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-4">Contact Us</h2>
        <p className="text-center text-trust-navy/80 max-w-2xl mx-auto mb-14">
          Visit us, follow our updates, or send your interest—we&apos;ll get back to you.
        </p>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
          {/* Contact form – sends to WhatsApp */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-trust-peach-warm shadow-soft order-2 md:order-1">
            <h3 className="font-display text-xl font-semibold text-trust-navy mb-1">Send your interest</h3>
            <p className="text-sm text-trust-navy/70 mb-6">
              Fill in your details and submit. You&apos;ll be taken to WhatsApp to send the message to us.
            </p>
            {success && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
                Thank you! Your message has been sent via WhatsApp. We will get back to you soon.
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-trust-navy mb-1.5">
                  Name <span className="text-trust-accent">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-trust-peach-warm bg-trust-peach/30 px-4 py-3 text-trust-navy placeholder:text-trust-navy/50 focus:outline-none focus:ring-2 focus:ring-trust-accent focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-trust-navy mb-1.5">
                  Phone <span className="text-trust-accent">*</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="w-full rounded-lg border border-trust-peach-warm bg-trust-peach/30 px-4 py-3 text-trust-navy placeholder:text-trust-navy/50 focus:outline-none focus:ring-2 focus:ring-trust-accent focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="contact-interest" className="block text-sm font-medium text-trust-navy mb-1.5">
                  I am interested as <span className="text-trust-accent">*</span>
                </label>
                <select
                  id="contact-interest"
                  required
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full rounded-lg border border-trust-peach-warm bg-trust-peach/30 px-4 py-3 text-trust-navy focus:outline-none focus:ring-2 focus:ring-trust-accent focus:border-transparent"
                >
                  <option value="">Select one</option>
                  {INTEREST_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-trust-navy mb-1.5">
                  Message (optional)
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Any details you'd like to share..."
                  className="w-full rounded-lg border border-trust-peach-warm bg-trust-peach/30 px-4 py-3 text-trust-navy placeholder:text-trust-navy/50 focus:outline-none focus:ring-2 focus:ring-trust-accent focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={!canSend || submitting}
                className="w-full btn-accent-rect flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {submitting ? (
                  'Sending…'
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Submit
                  </>
                )}
              </button>
              <p className="text-xs text-trust-navy/60 text-center">
                Your message will be sent to us via WhatsApp.
              </p>
            </form>
          </div>

          {/* Address & social */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="flex flex-col sm:flex-row gap-6 sm:items-start bg-white rounded-2xl p-6 md:p-8 border border-trust-peach-warm shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-trust-navy text-white flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-trust-navy mb-2">Address</h3>
                <p className="text-trust-navy/90">
                  1A/2B, Minto Road<br />
                  Prayagraj (Allahabad), Uttar Pradesh 211001<br />
                  India
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 sm:items-start bg-white rounded-2xl p-6 md:p-8 border border-trust-peach-warm shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-trust-navy text-white flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-trust-navy mb-2">Website & Social</h3>
                <p className="text-trust-navy/90 mb-2">
                  Official updates:{' '}
                  <a
                    href="https://vandanachildcaretrust.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent"
                  >
                    vandanachildcaretrust.substack.com
                  </a>
                </p>
                <p className="text-trust-navy/90">
                  Instagram:{' '}
                  <a
                    href="https://instagram.com/vandana_childcare_trust"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent"
                  >
                    @vandana_childcare_trust
                  </a>
                </p>
                <p className="text-trust-navy/90 mt-2">
                  WhatsApp:{' '}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent"
                  >
                    +91-7355949951
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
