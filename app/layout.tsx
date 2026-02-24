import type { Metadata } from 'next';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Vandana Childcare Trust | Prayagraj',
  description:
    'Non-profit in Prayagraj (Allahabad) dedicated to welfare, education, and health of underprivileged children and women. Founded 2016.',
  openGraph: {
    title: 'Vandana Childcare Trust',
    description: 'Welfare, education & health for children and women in Prayagraj.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
