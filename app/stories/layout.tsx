import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stories & Impact | Vandana Childcare Trust',
  description: 'Voices from the community—how Vandana Childcare Trust is making a difference in Prayagraj.',
};

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
