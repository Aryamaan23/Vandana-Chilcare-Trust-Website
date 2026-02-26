'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const PRESET_AMOUNTS = [500, 1000, 2500, 5000, 10000] as const;
const MIN_AMOUNT = 100; // ₹100 minimum for Razorpay

declare global {
  interface Window {
    Razorpay: new (options: RazorpayCheckoutOptions) => RazorpayInstance;
  }
}

interface RazorpayCheckoutOptions {
  key: string;
  amount: number;
  currency: string;
  order_id: string;
  name: string;
  description?: string;
  handler: (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) => void;
  prefill?: { name?: string; email?: string; contact?: string };
  notes?: Record<string, string>;
}

interface RazorpayInstance {
  open: () => void;
  on: (event: string, handler: () => void) => void;
}

export default function DonatePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [paymentId, setPaymentId] = useState<string | null>(null);

  const amountRupees = (() => {
    const val = customAmount.trim() ? customAmount : amount;
    const n = Number(val);
    return Number.isFinite(n) ? n : 0;
  })();

  const loadRazorpay = useCallback((): Promise<void> => {
    if (typeof window !== 'undefined' && window.Razorpay) return Promise.resolve();
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve();
      document.body.appendChild(script);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (amountRupees < MIN_AMOUNT) {
      setError(`Minimum donation amount is ₹${MIN_AMOUNT}.`);
      return;
    }

    setLoading(true);
    try {
      const orderRes = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amountRupees,
          currency: 'INR',
          receipt: `donate_${Date.now()}`,
          notes: { name, email, phone, message },
        }),
      });
      const orderData = await orderRes.json();

      if (!orderRes.ok) {
        setError(orderData.error || 'Could not create order.');
        setLoading(false);
        return;
      }

      const { orderId, amount: amountPaise, currency, key } = orderData;
      await loadRazorpay();

      const options: RazorpayCheckoutOptions = {
        key,
        amount: amountPaise,
        currency,
        order_id: orderId,
        name: 'Vandana Childcare Trust',
        description: 'Donation',
        handler: async (response) => {
          try {
            const verifyRes = await fetch('/api/razorpay/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
                donor: { name, email, phone, message },
              }),
            });
            const verifyData = await verifyRes.json();
            if (verifyRes.ok && verifyData.success) {
              setPaymentId(verifyData.paymentId);
              setSuccess(true);
            } else {
              setError(verifyData.error || 'Payment verification failed.');
            }
          } catch {
            setError('Could not verify payment. We will contact you if needed.');
          } finally {
            setLoading(false);
          }
        },
        prefill: { name: name || undefined, email: email || undefined, contact: phone || undefined },
        notes: { name, email, phone, message },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', () => {
        setError('Payment failed or was cancelled.');
        setLoading(false);
      });
      rzp.open();
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main>
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-trust-navy to-trust-navy-light text-white">
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex w-16 h-16 rounded-full bg-white/20 text-white mb-6 flex items-center justify-center">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Thank you for your donation</h1>
            <p className="text-xl text-white/90 max-w-xl mx-auto mb-6">
              Your contribution will help us run health camps, educational programmes, and community events in Prayagraj.
            </p>
            {paymentId && (
              <p className="text-sm text-white/70 mb-8">
                Payment ID: <span className="font-mono">{paymentId}</span> (save this for your records)
              </p>
            )}
            <Link href="/" className="btn-primary bg-white text-trust-navy hover:bg-trust-peach">
              Back to home
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-br from-trust-accent via-trust-accent-light to-trust-accent text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(26,54,93,0.12)_0%,_transparent_50%)]" />
        <div className="absolute top-16 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" aria-hidden />
        <div className="absolute bottom-16 left-10 w-40 h-40 bg-trust-navy/10 rounded-full blur-2xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-white/90 text-lg tracking-wide uppercase mb-3">Support us</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Donate</h1>
          <p className="text-xl text-white/95 max-w-2xl">
            Your contribution helps health camps, the training centre, and community programmes. Secure payment via Razorpay. 12A & 80G certified—donations are eligible for tax deduction.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-trust-peach">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-trust-peach-warm shadow-soft">
            <h2 className="font-display text-2xl font-semibold text-trust-navy mb-2">Donation form</h2>
            <p className="text-trust-navy/70 text-sm mb-4">
              Fill in your details and choose an amount. You will be redirected to Razorpay for secure payment.
            </p>
            <p className="text-trust-navy/80 text-sm mb-6 font-medium">
              12A & 80G certified · Your donation is tax-deductible under the Income Tax Act.
            </p>
            {error && (
              <div className="mb-6 p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="donate-name" className="block text-sm font-medium text-trust-navy mb-1.5">
                  Name <span className="text-trust-accent">*</span>
                </label>
                <input
                  id="donate-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-trust-peach-warm bg-trust-peach/30 px-4 py-3 text-trust-navy placeholder:text-trust-navy/50 focus:outline-none focus:ring-2 focus:ring-trust-accent focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="donate-email" className="block text-sm font-medium text-trust-navy mb-1.5">
                  Email <span className="text-trust-accent">*</span>
                </label>
                <input
                  id="donate-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-trust-peach-warm bg-trust-peach/30 px-4 py-3 text-trust-navy placeholder:text-trust-navy/50 focus:outline-none focus:ring-2 focus:ring-trust-accent focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="donate-phone" className="block text-sm font-medium text-trust-navy mb-1.5">
                  Phone <span className="text-trust-accent">*</span>
                </label>
                <input
                  id="donate-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="w-full rounded-lg border border-trust-peach-warm bg-trust-peach/30 px-4 py-3 text-trust-navy placeholder:text-trust-navy/50 focus:outline-none focus:ring-2 focus:ring-trust-accent focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-trust-navy mb-2">
                  Amount (₹) <span className="text-trust-accent">*</span>
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {PRESET_AMOUNTS.map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => {
                        setAmount(String(a));
                        setCustomAmount('');
                      }}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        amount === String(a)
                          ? 'bg-trust-navy text-white'
                          : 'bg-trust-peach-warm text-trust-navy hover:bg-trust-navy/10'
                      }`}
                    >
                      ₹{a.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  min={MIN_AMOUNT}
                  step={1}
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    if (e.target.value) setAmount('');
                  }}
                  placeholder="Or enter custom amount (min ₹100)"
                  className="w-full rounded-lg border border-trust-peach-warm bg-trust-peach/30 px-4 py-3 text-trust-navy placeholder:text-trust-navy/50 focus:outline-none focus:ring-2 focus:ring-trust-accent focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="donate-message" className="block text-sm font-medium text-trust-navy mb-1.5">
                  Message (optional)
                </label>
                <textarea
                  id="donate-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Any note for the trust..."
                  className="w-full rounded-lg border border-trust-peach-warm bg-trust-peach/30 px-4 py-3 text-trust-navy placeholder:text-trust-navy/50 focus:outline-none focus:ring-2 focus:ring-trust-accent focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading || amountRupees < MIN_AMOUNT}
                className="w-full btn-accent-rect flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? (
                  'Opening payment…'
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    Donate ₹{amountRupees >= MIN_AMOUNT ? amountRupees.toLocaleString('en-IN') : '—'}
                  </>
                )}
              </button>
              <p className="text-xs text-trust-navy/60 text-center">
                Secure payment powered by Razorpay. You can use UPI, cards, net banking, or wallets.
              </p>
            </form>
          </div>
          <p className="text-center mt-8">
            <Link href="/get-involved/" className="link-accent font-medium">
              ← Back to Get Involved
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
