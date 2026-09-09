import type { StaticImageData } from 'next/image';
import purvaImage from '../purvavajrahalli.png';
import brigadeImage from '../Brigadesilvercrest.png';
import courtyardLogo from '../courtyard-logo.png';
import courtyardHero from '../vedant-suraksha-courtyard.jpg';

export interface LandingProject {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  location: string;
  price: string;
  heroImage: StaticImageData;
  logoImage?: StaticImageData;
  contactPhone?: string;
  contactEmail?: string;
  whatsappPhone?: string;
  accent: 'gold' | 'rose';
  highlights: { label: string; value: string }[];
  story: string[];
  configurations: { name: string; size: string; price: string }[];
  amenities: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  disclaimer: string;
}

export const landingProjects: Record<string, LandingProject> = {
  'purva-vajrahalli': {
    slug: 'purva-vajrahalli',
    name: 'Purva Vajrahalli',
    eyebrow: 'Coming soon on Kanakapura Road',
    tagline: 'An exclusive address for the life you have been waiting for.',
    location: 'Vajrahalli, South Bengaluru',
    price: '₹2.93 Cr onwards',
    heroImage: purvaImage,
    accent: 'gold',
    highlights: [
      { label: 'Inventory booked', value: '70%' },
      { label: 'Homes', value: '3, 3.5 & 4 BHK' },
      { label: 'Clubhouse', value: '26,000 sq.ft.' },
      { label: 'Starting rate', value: '₹15,000 / sq.ft.*' },
    ],
    story: [
      'Purva Vajrahalli brings a limited collection of premium residences to Kanakapura Road, South Bengaluru.',
      'With spacious 3 BHK, 3.5 BHK and 4 BHK penthouse residences, it pairs a connected address with a lifestyle built around space, privacy and thoughtful amenities.',
    ],
    configurations: [
      { name: '3 BHK', size: '1,950 sq.ft.', price: '₹2.93 Cr onwards' },
      { name: '3.5 BHK', size: '2,160 sq.ft. with maid room', price: '₹3.24 Cr onwards' },
      { name: '4 BHK Penthouse', size: '4,200 sq.ft. + 700 sq.ft. private garden', price: '₹6.30 Cr onwards' },
    ],
    amenities: [
      { title: 'Signature clubhouse', description: 'A 26,000 sq.ft. social and wellness destination for residents.' },
      { title: 'World-class lifestyle', description: 'Temperature-controlled swimming pool, golf simulator, bowling alley and more.' },
      { title: 'Connected living', description: 'A strategic South Bengaluru address near metro, roads, schools and hospitals.' },
    ],
    faq: [
      { question: 'Where is Purva Vajrahalli located?', answer: 'Purva Vajrahalli is located on Kanakapura Road in Vajrahalli, South Bengaluru.' },
      { question: 'What configurations are available?', answer: 'The current briefing includes 3 BHK, 3.5 BHK and 4 BHK penthouse residences.' },
      { question: 'What is the starting price?', answer: 'Indicative pricing starts at approximately ₹2.93 Cr, subject to availability and applicable charges.' },
      { question: 'How can I get the latest availability?', answer: 'Register your interest and a project specialist can share the latest price and availability details.' },
    ],
    disclaimer: 'Pricing, inventory, amenities and launch details are indicative and subject to change. Please verify the latest terms with the authorised project representative.',
  },
  'brigade-silvercrest': {
    slug: 'brigade-silvercrest',
    name: 'Brigade SilverCrest',
    eyebrow: 'Launching soon in South Bengaluru',
    tagline: 'An exclusive collection of just 133 luxury residences.',
    location: 'Kanakapura Road, South Bengaluru',
    price: '₹3.09 Cr onwards',
    heroImage: brigadeImage,
    accent: 'rose',
    highlights: [
      { label: 'Land parcel', value: '2 acres' },
      { label: 'Residences', value: '133 only' },
      { label: 'Configurations', value: '3 & 4 BHK' },
      { label: 'Structure', value: '2B + G + 28' },
    ],
    story: [
      'Brigade SilverCrest brings an exclusive collection of spacious luxury residences to Kanakapura Road, South Bengaluru.',
      'Spread across approximately 2 acres, the single-tower development is designed around just 133 residences, creating a more private and low-density living environment.',
    ],
    configurations: [
      { name: '3 BHK + 3T', size: '2,010 sq.ft.', price: '₹3.09 Cr onwards' },
      { name: '3 BHK + 3T Large', size: '2,040 sq.ft.', price: '₹3.23 Cr onwards' },
      { name: '3 BHK + Study', size: '2,158 sq.ft.', price: '₹3.55 Cr onwards' },
      { name: '4 BHK + 4T', size: '2,685 sq.ft.', price: '₹4.26 Cr onwards' },
    ],
    amenities: [
      { title: 'Integrated clubhouse', description: 'A residential clubhouse designed for recreation, wellness and social interaction.' },
      { title: 'Rooftop experience', description: 'Elevated lifestyle spaces that complement the single-tower concept.' },
      { title: 'Outdoor spaces', description: 'Landscaped outdoor areas and recreational spaces within the development.' },
    ],
    faq: [
      { question: 'What is Brigade SilverCrest?', answer: 'Brigade SilverCrest is an upcoming luxury residential development on Kanakapura Road offering spacious 3 and 4 BHK residences.' },
      { question: 'How many residences are there?', answer: 'The project comprises 133 residences in a single residential tower.' },
      { question: 'What is the starting price?', answer: 'Indicative pricing currently starts at approximately ₹3.09 Cr, subject to availability and applicable charges.' },
      { question: 'Is RERA approval available?', answer: 'According to the current sales briefing, RERA approval is yet to be received and will be updated when officially issued.' },
      { question: 'Does the EOI guarantee a specific apartment?', answer: 'No. An EOI is an expression of interest and does not guarantee allotment of a particular unit.' },
      { question: 'Can I receive floor plans?', answer: 'At the current EOI stage, floor plans are presented through the project sales team rather than publicly distributed.' },
    ],
    disclaimer: 'Project details, pricing, EOI amounts, inventory, RERA status and launch terms are based on the current sales briefing and are subject to change. EOI does not constitute allotment or confirmation of a specific unit.',
  },
  'vedant-suraksha-courtyard': {
    slug: 'vedant-suraksha-courtyard',
    name: 'Vedant Suraksha Courtyard',
    eyebrow: 'Gottigere, off Bannerghatta Road',
    tagline: 'Bengaluru’s first guitar-themed courtyard, designed with emotion.',
    location: 'Gottigere, South Bengaluru',
    price: '₹9,999 / sq.ft. onwards',
    heroImage: courtyardHero,
    logoImage: courtyardLogo,
    contactPhone: '9845008380',
    contactEmail: 'theglobalenterprises@gmail.com',
    whatsappPhone: '919845008380',
    accent: 'gold',
    highlights: [
      { label: 'Land parcel', value: '4.5 acres' },
      { label: 'Residences', value: '278 homes' },
      { label: 'Open space', value: '82%' },
      { label: 'Clubhouse', value: '25,000 sq.ft.' },
    ],
    story: [
      'Vedant Suraksha Courtyard is a music-inspired residential address where art, architecture and emotion come together.',
      'Spread across 4.5 acres, the project brings 278 thoughtfully designed 3 and 4 BHK homes, a 70,000 sq.ft. guitar-shaped courtyard and Club Élan, a three-level clubhouse created around the rhythm of everyday life.',
    ],
    configurations: [
      { name: '3 BHK Type 1', size: '1,760 sq.ft.', price: '₹9,999 / sq.ft. onwards' },
      { name: '3 BHK Type 2', size: '1,745 sq.ft.', price: '₹9,999 / sq.ft. onwards' },
      { name: '3 BHK Type 3', size: '1,782 sq.ft.', price: '₹9,999 / sq.ft. onwards' },
      { name: '4 BHK Type 1', size: '2,674 sq.ft.', price: '₹9,999 / sq.ft. onwards' },
      { name: '4 BHK Type 2', size: '2,485 sq.ft.', price: '₹9,999 / sq.ft. onwards' },
    ],
    amenities: [
      { title: 'Guitar-shaped courtyard', description: 'A 70,000 sq.ft. central outdoor realm designed around rhythm, movement and community.' },
      { title: 'Club Élan', description: 'A three-level, 25,000 sq.ft. clubhouse with fitness, wellness, recreation and social spaces.' },
      { title: 'Everyday harmony', description: 'Swimming pool, badminton, squash, gym, yoga deck, library, co-working and more.' },
    ],
    faq: [
      { question: 'Where is Vedant Suraksha Courtyard located?', answer: 'Vedant Suraksha Courtyard is located in Gottigere, off Bannerghatta Road in South Bengaluru.' },
      { question: 'What configurations are available?', answer: 'The project offers 3 BHK and 4 BHK residences in multiple floor-plan types.' },
      { question: 'What is the starting price?', answer: 'Pricing starts at approximately ₹9,999 per sq.ft., subject to availability and applicable charges.' },
      { question: 'How many residences are there?', answer: 'The project has 278 residences across three towers with 82% open space.' },
      { question: 'What is the possession timeline?', answer: 'The official project website states that completion and handover are planned for December 2029.' },
      { question: 'What makes the project unique?', answer: 'The project features a 70,000 sq.ft. guitar-shaped courtyard, zero common walls and 100% East and North-facing homes, according to the project website.' },
      { question: 'What is the RERA number?', answer: 'The project RERA number listed on the official website is ACK/KA/RERA/1251/310/PR/011225/009820.' },
    ],
    disclaimer: 'Pricing, availability, specifications, possession timelines and location claims are indicative and subject to change. Please verify the latest terms with the authorised project representative. RERA details are reproduced from the official project website.',
  },
};
