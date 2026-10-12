// Source of truth: docs/company-profile.md. Do not add facts that are not in that document.
import factoryVideoPoster from '../assets/images/factory-video-poster.jpg';
import isoBadge from '../assets/images/iso-9001-2015-certified.png';
import type { Capability, ContactDetails, FactoryVideoConfig, NavItem } from './types';

export const company = {
  name: 'Priya Life Science',
  legalForm: 'Partnership firm',
  foundedYear: 2008,
  copyrightYear: 2024,
  facilityEstablished: '2008–09',
  region: 'Gujarat',
  country: 'India',
  countryCode: 'IN',
  tagline: ['Committed to Quality', 'Driven by Growth', 'Building Long-Term Partnerships'],
  seo: {
    title: 'Priya Life Science — Pharmaceutical & Nutraceutical Manufacturer, Gujarat',
    description:
      'Priya Life Science manufactures, markets and supplies pharmaceutical and nutraceutical products from its own facility in Gujarat, India — own brands and third-party contract manufacturing since 2008.',
  },
} as const;

export const overview = {
  intro:
    'Priya Life Science is a partnership firm engaged in the manufacturing, marketing, and supply of pharmaceutical and nutraceutical products.',
  paragraphs: [
    'The firm was established in 2008 with the vision of providing quality pharmaceutical products and reliable manufacturing services, and set up its own manufacturing facility during 2008–09 to develop and manufacture quality pharmaceutical formulations.',
    'Our partners are pharmacy graduates with extensive experience across manufacturing, product development, and marketing. With that expertise, the firm has focused its activities on the pharmaceutical and nutraceutical sectors.',
    'With more than a decade of experience and a strong commitment to quality, Priya Life Science has established itself as a growing pharmaceutical company in Gujarat.',
  ],
  reputation: ['Quality products', 'Dependable services', 'Long-term business relationships'],
};

export const segments: Capability[] = [
  {
    title: 'Own Brand Products',
    description:
      'Pharmaceutical and nutraceutical brands developed and marketed by Priya Life Science across various parts of India.',
    icon: 'layers',
  },
  {
    title: 'Third-Party / Contract Manufacturing',
    description:
      'Manufacturing and supply support for pharmaceutical companies and business associates, in India and for international markets.',
    icon: 'handshake',
  },
];

export const keyFacts = [
  { value: '2008', label: 'Year established' },
  { value: '2008–09', label: 'Own manufacturing facility' },
  { value: '2', label: 'Business segments' },
  { value: 'India + Exports', label: 'Domestic & international supply' },
] as const;

export const capabilities: Capability[] = [
  {
    title: 'Liquid Oral Manufacturing',
    description: 'A dedicated liquid oral manufacturing section.',
    points: ['Syrups', 'Suspensions', 'Drops', 'Other liquid formulations'],
    icon: 'flask',
  },
  {
    title: 'Capsule Manufacturing & Packaging',
    description:
      'Capsule manufacturing and packaging sections with appropriate arrangements for manufacturing different categories of capsules.',
    icon: 'capsule',
  },
  {
    title: 'Segregated Antibiotic & Vitamin Production',
    description:
      'Separate arrangements for antibiotic and vitamin tablets and capsules, wherever applicable, to minimise the risk of cross-contamination.',
    icon: 'shield',
  },
  {
    title: 'Systematic Production Infrastructure',
    description:
      'Modern, adequately equipped infrastructure designed for efficient production operations, consistent product quality, and handling different pharmaceutical formulations in accordance with applicable manufacturing requirements.',
    icon: 'factory',
  },
];

export const quality = {
  intro:
    'Quality is one of the core principles of Priya Life Science. We follow systematic quality-control procedures throughout the manufacturing process to ensure consistency, reliability, and compliance with applicable pharmaceutical requirements.',
  testing: ['Raw materials', 'In-process materials', 'Finished products'],
  practices: [
    {
      title: 'Analytical laboratory',
      description: 'Laboratory facilities equipped with basic as well as advanced analytical instruments, as applicable.',
      icon: 'microscope',
    },
    {
      title: 'Qualified personnel',
      description: 'Qualified, trained, and experienced technical and quality-control personnel.',
      icon: 'users',
    },
    {
      title: 'Stage-wise monitoring',
      description:
        'Quality monitoring at various stages of manufacturing, with systematic testing and evaluation of materials and finished products.',
      icon: 'clipboard',
    },
    {
      title: 'Consistent standards',
      description: 'A continuous commitment to consistent product quality and applicable regulatory standards.',
      icon: 'check',
    },
  ] satisfies Capability[],
};

export const network = {
  markets: ['India', 'Afghanistan', 'Europe', 'Africa', 'Asia'],
  marketsNote:
    'Our products are marketed across various parts of India. Through business associates and export partners, we are also engaged in merchant exports to Afghanistan, Europe, Africa, Asia, and other international markets.',
  directExport: {
    customer: 'Xanaano General Trading Company',
    location: 'Mogadishu, Somalia',
  },
  exportAssociates: [
    'Savvy Care & Cosmetics Private Limited',
    'Gennichem Healthcare Pvt. Ltd.',
    'Shreechem Pharma',
    'Seepromed',
    'Oxford Laboratories Pvt. Ltd.',
    'Everest Biocare',
    'Ramsa Healthcare',
    'Wellona Pharma Private Limited',
    'Wonder Formulations',
    'Burhani Globex',
  ],
  domesticAssociates: [
    'Zota Healthcare Ltd.',
    'Healthcare Formulation Pvt. Ltd.',
    'Medipoint',
    'New Drug House',
    'Makvin Pharma',
    'A Global Healthcare Pvt. Ltd.',
    'McAstro Pharma',
  ],
  partnershipPromise: [
    'Reliable manufacturing support',
    'Consistent product quality',
    'Timely service',
    'Professional business coordination',
  ],
};

export const mission = {
  statement:
    'At Priya Life Science, we are committed to continuous improvement, innovation, and sustainable growth in the pharmaceutical industry.',
  points: [
    'Pursue excellence in pharmaceutical manufacturing and marketing through good manufacturing and quality practices.',
    'Provide courteous, prompt, reliable, and efficient service to our customers.',
    'Explore and develop new business opportunities that strengthen our competitive position.',
    'Recruit, develop, and train competent professionals who contribute to our continued growth.',
    'Build strong, long-term relationships with customers, business associates, and international partners.',
    'Develop and establish our brands in domestic as well as international markets.',
    'Continuously improve our manufacturing capabilities and quality systems.',
    'Maintain a strong commitment to quality, customer satisfaction, reliability, and continuous improvement.',
  ],
  values: ['Quality', 'Trust', 'Consistency', 'Reliability', 'Customer satisfaction'],
  strive: [
    'Strengthen our manufacturing capabilities',
    'Enhance our quality-control systems',
    'Expand our pharmaceutical and nutraceutical portfolio',
    'Develop new domestic and international business opportunities',
    'Build strong, sustainable relationships with customers and partners',
    'Maintain consistent standards of quality and service',
    'Support customer growth through reliable manufacturing and supply',
  ],
  commitment:
    'Our commitment is to create long-term value for our customers and business partners while continuously strengthening our position in the pharmaceutical industry.',
};

export const enquiryTopics = [
  'Own brand products',
  'Third-party / contract manufacturing',
  'Export & merchant-export supply',
  'Other business enquiry',
];

/**
 * Address and GSTIN are transcribed from the facility signboard (see docs/company-profile.md §8).
 * The enquiry form appears once an email is added.
 */
export const contact: ContactDetails = {
  addressLines: ['Plot No. 174-A/175, Siddhi Industrial Infrastructure Park, Opp. Waghodia G.I.D.C., Waghodia – 391 760'],
  locality: 'Waghodia',
  postalCode: '391760',
  gstin: '24AAKFP3605Q1ZV',
  phones: [{ label: 'Palak Patel', value: '+91 7229032143' }],
  emails: [],
  whatsapp: null,
  website: null,
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Priya+Life+Science+Siddhi+Industrial+Infrastructure+Park+Waghodia+391760',
  socials: [],
};

export const certification = {
  label: 'An ISO 9001 : 2015 Certified Company',
  image: isoBadge,
  alt: 'ISO 9001 : 2015 certification mark',
};

export const factoryVideo: FactoryVideoConfig | null = {
  src: '/media/factory-tour.mp4',
  type: 'video/mp4',
  poster: {
    src: factoryVideoPoster,
    alt: 'Packing staff in blue uniforms assembling product cartons at the Priya Life Science facility',
  },
  title: 'A walk through our manufacturing facility',
  description:
    'Manufacturing, quality control, packing and dispatch — filmed at our facility in Waghodia, Gujarat.',
  duration: '0:58',
};

export const navigation: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Facility', href: '#facility' },
  { label: 'Quality', href: '#quality' },
  { label: 'Products', href: '#products' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Network', href: '#network' },
  { label: 'Contact', href: '#contact' },
];
