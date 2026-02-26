/**
 * Studies & Reports – publish reports and studies here.
 * Add new entries to the array; optional link for PDF or external doc.
 */
export type Report = {
  id: string;
  title: string;
  date: string;
  summary: string;
  link?: string;
  linkLabel?: string;
};

export const reports: Report[] = [
  {
    id: 'annual-2024',
    title: 'Annual Activity Report 2024',
    date: 'December 2024',
    summary: 'Summary of Vandana Childcare Trust activities, outreach programmes, health camps, and training centre operations during 2024 in Prayagraj.',
  },
  {
    id: 'health-hygiene-focus',
    title: 'Health & Hygiene Awareness Programmes',
    date: '2024–2025',
    summary: 'Overview of health awareness sessions conducted at Tej Bahadur Sapru Hospital, Bailey Hospital, and community settings, with focus on children and women.',
  },
];

/**
 * Programmes – detailed record of each programme with photos and content.
 * Add new programmes here; put images in public/programmes/ and reference as /programmes/filename.jpg
 */
export type Programme = {
  id: string;
  title: string;
  date: string;
  location?: string;
  category: 'Health' | 'Education' | 'Talent' | 'Cultural' | 'Community' | 'Other';
  status: 'current' | 'completed';
  description: string;
  /** Image paths (e.g. /programmes/xyz.jpg or /gallery/...). First image used as cover. */
  images: string[];
};

const N = '\u202F';
const G = (name: string) => `/gallery/${encodeURIComponent(name)}`;

export const programmes: Programme[] = [
  {
    id: 'new-year-sapru-2026',
    title: 'New Year Health Outreach at Tej Bahadur Sapru Hospital',
    date: 'January 1, 2026',
    location: 'Tej Bahadur Sapru Hospital, Prayagraj',
    category: 'Health',
    status: 'completed',
    description: 'Vandana Childcare Trust celebrated the New Year by spreading warmth and health at the PICU and Ladies\' Ward. The trust distributed blankets, essential healthy food items, and fresh fruits to patients. The programme was guided by Chief Medical Superintendent, Bhavna Sharma. A health awareness programme for children focused on healthy habits and hygiene. The event was graced by President Vandana Pandey, Vice President Kalpna Gupta, Treasurer Mamta Maharani, and senior members Fatima Ali, Chaman, and Amna Ali.',
    images: ['/gallery/tej-sapru-hospital.jpg'],
  },
  {
    id: 'tulsi-christmas-talent',
    title: 'Tulsi Day, Christmas & Talent Felicitation',
    date: '2025',
    location: 'Cultural Centre, Minto Road, Prayagraj',
    category: 'Cultural',
    status: 'completed',
    description: 'Tulsi Day was celebrated with children from the training centre, with messages on environmental conservation. Ved Sharma was honoured for winning a gold medal at the state-level Taekwondo championship. Christmas was celebrated with gift distribution, promoting cultural harmony and "Vasudhaiva Kutumbakam". Led by President Vandana Pandey, Vice President Kalpana Gupta, Treasurer Mamta Maharani, and members including Dr. Pratibha Mishra, Sudha Srivastava, Bhavna Gaur, and Fatima Ali.',
    images: ['/gallery/tulsi-day-celebrations.jpg'],
  },
  {
    id: 'raj-blind-school-winter',
    title: 'Raj Blind School — Winter Support',
    date: 'December 22, 2024',
    location: 'Raj Blind School, Prayagraj',
    category: 'Community',
    status: 'completed',
    description: 'The Trust organized a heartfelt event at Raj Blind School for visually impaired children. Sweaters and essential items were distributed for the cold season. Members inspired children to recognize their potential. Attended by President Vandana Pandey, Vice President Kalpana Gupta, Treasurer Mamta Maharani, and senior members including Dr. Pratima Mishra, Pushpa Shukla, Poonam Tiwari, and others.',
    images: ['/gallery/raj-blind-school.jpg'],
  },
  {
    id: 'teachers-day',
    title: "Teachers' Day Celebration",
    date: '2025',
    location: 'Training Centre, Pritamnagar, Prayagraj',
    category: 'Education',
    status: 'completed',
    description: 'Students of Vandana Childcare Trust Training Centre celebrated Teachers\' Day with enthusiasm alongside President Ms. Vandana Pandey, honouring the spirit of education and gratitude.',
    images: [G(`Screenshot 2026-02-24 at 8.53.46${N}PM.png`)],
  },
  {
    id: 'awareness-visionless-kids',
    title: 'Awareness Session with Visionless Kids',
    date: '2025',
    location: 'Prayagraj',
    category: 'Education',
    status: 'completed',
    description: 'An evening of interaction with visionless children—talented singers and writers. President Vandana Pandey held an awareness session on education and hygiene. Fruits and meals were distributed.',
    images: ['/gallery/visionless-kids.jpg'],
  },
  {
    id: 'training-centre-operations',
    title: 'Training Centre — Academic & Vocational Guidance',
    date: 'Ongoing',
    location: 'Training Centre (Pritamnagar) & Cultural Centre (Minto Road), Prayagraj',
    category: 'Education',
    status: 'current',
    description: 'Vandana Childcare Trust operates two centres: the Training Centre in Pritamnagar for academic and vocational guidance, and the Cultural Centre on Minto Road for events and community gatherings. Regular classes, mentorship, and skill development programmes are conducted at both locations.',
    images: [
      G(`Screenshot 2026-02-24 at 8.54.48${N}PM.png`),
      G(`Screenshot 2026-02-24 at 8.55.10${N}PM.png`),
    ],
  },
];

/** Group programmes by year (for display). */
export function getProgrammesByYear(): { year: string; items: Programme[] }[] {
  const byYear: Record<string, Programme[]> = {};
  programmes.forEach((p) => {
    const year = p.date.includes('2026') ? '2026' : p.date.includes('2025') ? '2025' : p.date.includes('2024') ? '2024' : p.status === 'current' ? 'Ongoing' : 'Earlier';
    if (!byYear[year]) byYear[year] = [];
    byYear[year].push(p);
  });
  const order = ['2026', '2025', '2024', 'Ongoing', 'Earlier'];
  return order.filter((y) => byYear[y]?.length).map((year) => ({ year, items: byYear[year]! }));
}
