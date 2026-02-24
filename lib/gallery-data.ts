export type GalleryItem = {
  id: string;
  image: string;
  imagePng?: string;
  imageJpg: string;
  title: string;
  date: string;
  caption: string;
};

// Actual filenames use narrow no-break space (U+202F) before "PM"
const N = '\u202F'; // narrow no-break space
const G = (name: string) => `/gallery/${encodeURIComponent(name)}`;

export const galleryItems: GalleryItem[] = [
  {
    id: 'new-year-sapru',
    image: G(`Screenshot 2026-02-24 at 8.53.09${N}PM.png`),
    imagePng: G(`Screenshot 2026-02-24 at 8.53.09${N}PM.png`),
    imageJpg: G(`Screenshot 2026-02-24 at 8.53.09${N}PM.png`),
    title: 'New Year at Tej Bahadur Sapru Hospital',
    date: 'January 1, 2026',
    caption: 'Vandana Childcare Trust celebrated the New Year by spreading warmth and health at the PICU and Ladies\' Ward of Tej Bahadur Sapru Hospital, Prayagraj. The trust distributed blankets, essential healthy food items, and fresh fruits to patients. The program was guided by Chief Medical Superintendent, Bhavna Sharma, along with the dedicated team of Vandana Childcare Trust. In addition to distributing essential items, the team conducted a health awareness program for children, focusing on promoting healthy habits and hygiene. The event was graced by President Vandana Pandey, Vice President Kalpna Gupta, Treasurer Mamta Maharani, and senior members Fatima Ali, Chaman, and Amna Ali. The organizers emphasized the importance of community support and healthcare awareness, especially for children, and expressed their commitment to continue such welfare activities in the future.',
  },
  {
    id: 'tulsi-christmas-talent',
    image: G(`Screenshot 2026-02-24 at 8.53.29${N}PM.png`),
    imagePng: G(`Screenshot 2026-02-24 at 8.53.29${N}PM.png`),
    imageJpg: G(`Screenshot 2026-02-24 at 8.53.29${N}PM.png`),
    title: 'Tulsi Day, Christmas & Talent Felicitation',
    date: 'Prayagraj',
    caption: 'Vandana Child Care Trust celebrated Tulsi Day with great enthusiasm along with the children receiving training at its training center located on Minto Road. Children were informed about the importance of the Tulsi plant and were given a message on environmental conservation. The program was organized under the leadership of President Vandana Pandey, Vice President Kalpana Gupta, and Treasurer Mamta Maharani, with members Dr. Pratibha Mishra, Sudha Srivastava, Bhavna Gaur, and Fatima Ali in attendance. Ved Sharma, a student of the training center, was specially honored for winning a gold medal at the state-level Taekwondo championship. The main arrangements were managed by Neelu Sharma, Head of the Training Center, with active participation from head girls Shalini and Khushi. Embracing "Vasudhaiva Kutumbakam" (the world is one family), the Trust also celebrated Christmas and distributed gifts. The objective was to instill cultural values, mutual love, harmony, and social unity among children, along with encouraging them toward sports and education.',
  },
  {
    id: 'teachers-day',
    image: G(`Screenshot 2026-02-24 at 8.53.46${N}PM.png`),
    imagePng: G(`Screenshot 2026-02-24 at 8.53.46${N}PM.png`),
    imageJpg: G(`Screenshot 2026-02-24 at 8.53.46${N}PM.png`),
    title: "Teachers' Day Celebration",
    date: '',
    caption: 'Students of Vandana Childcare Trust Training Centre celebrated Teachers\' Day with great enthusiasm alongside the President of Vandana Childcare Trust, Ms. Vandana Pandey, honoring the spirit of education and gratitude.',
  },
  {
    id: 'awareness-visionless-kids',
    image: G(`Screenshot 2026-02-24 at 8.54.02${N}PM.png`),
    imagePng: G(`Screenshot 2026-02-24 at 8.54.02${N}PM.png`),
    imageJpg: G(`Screenshot 2026-02-24 at 8.54.02${N}PM.png`),
    title: 'Awareness Session with Visionless Kids',
    date: '',
    caption: 'An evening of lovely interaction with visionless kids—talented singers and writers. President of Vandana Childcare Trust Vandana Pandey had an awareness session with these kids and threw light on the importance of education and hygiene. To cheer them up, fruits and delectable meals were distributed to the children.',
  },
  {
    id: 'raj-blind-school',
    image: G(`Screenshot 2026-02-24 at 8.54.17${N}PM.png`),
    imagePng: G(`Screenshot 2026-02-24 at 8.54.17${N}PM.png`),
    imageJpg: G(`Screenshot 2026-02-24 at 8.54.17${N}PM.png`),
    title: 'Raj Blind School — Winter Support',
    date: 'December 22, 2024',
    caption: 'Vandana Child Care Trust organized a heartfelt event at Raj Blind School, focusing on providing assistance and encouragement to visually impaired children during the cold season. Children were distributed sweaters and other essential items to ensure their comfort during the chilly months. The members of the trust inspired the children to recognize their true potential, emphasizing that their abilities could overcome any challenge. The event was graced by President Vandana Pandey, Vice President Kalpana Gupta, Treasurer Mamta Maharani, and senior members Dr. Pratima Mishra, Pushpa Shukla, Poonam Tiwari, Deepika Keservani, Ranjana Gulati, Rekha Tripathi, Nisha Shukla, Mandavi Upadhyay, and Mridula Srivastava. This initiative reflects the Trust\'s unwavering commitment to empowering underprivileged children and fostering a sense of hope and self-reliance in society.',
  },
  {
    id: 'moment-6',
    image: G(`Screenshot 2026-02-24 at 8.54.48${N}PM.png`),
    imagePng: G(`Screenshot 2026-02-24 at 8.54.48${N}PM.png`),
    imageJpg: G(`Screenshot 2026-02-24 at 8.54.48${N}PM.png`),
    title: 'Community moment',
    date: 'Prayagraj',
    caption: 'Vandana Childcare Trust continues to bring care, education, and warmth to children and families in our community.',
  },
  {
    id: 'moment-7',
    image: G(`Screenshot 2026-02-24 at 8.55.10${N}PM.png`),
    imagePng: G(`Screenshot 2026-02-24 at 8.55.10${N}PM.png`),
    imageJpg: G(`Screenshot 2026-02-24 at 8.55.10${N}PM.png`),
    title: 'Trust activity',
    date: 'Prayagraj',
    caption: 'Our team and volunteers at work—building connections and supporting those in need.',
  },
  {
    id: 'moment-8',
    image: G(`Screenshot 2026-02-24 at 8.55.19${N}PM.png`),
    imagePng: G(`Screenshot 2026-02-24 at 8.55.19${N}PM.png`),
    imageJpg: G(`Screenshot 2026-02-24 at 8.55.19${N}PM.png`),
    title: 'Together for change',
    date: 'Prayagraj',
    caption: 'Every event and every smile reflects our commitment to holistic development and community welfare.',
  },
  {
    id: 'moment-9',
    image: G(`Screenshot 2026-02-24 at 8.55.54${N}PM.png`),
    imagePng: G(`Screenshot 2026-02-24 at 8.55.54${N}PM.png`),
    imageJpg: G(`Screenshot 2026-02-24 at 8.55.54${N}PM.png`),
    title: 'Our moments',
    date: 'Prayagraj',
    caption: 'Thank you to everyone who supports Vandana Childcare Trust in making a difference.',
  },
];
