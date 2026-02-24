import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Involved | Vandana Childcare Trust',
  description: 'Donate, volunteer, or partner with us to support children and women in Prayagraj.',
};

export default function GetInvolvedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
