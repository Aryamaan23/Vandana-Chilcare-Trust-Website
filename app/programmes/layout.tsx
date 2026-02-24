import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programmes & Reports | Vandana Childcare Trust',
  description: 'Historical and current programmes, studies, and reports. Consolidated view of our work for partners and officials.',
};

export default function ProgrammesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
