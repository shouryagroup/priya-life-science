import type { GalleryItem, Partner, Photo } from './types';

import packingLine from '../assets/images/packing-line.jpg';
import facilityCorridor from '../assets/images/facility-corridor.jpg';
import technicalTeam from '../assets/images/technical-team.jpg';
import liquidFillingLine from '../assets/images/liquid-filling-line.jpg';
import packingTeam from '../assets/images/packing-team.jpg';
import dispatchCartons from '../assets/images/dispatch-cartons.jpg';
import storageRoom from '../assets/images/storage-room.jpg';
import hasmukhPatel from '../assets/images/partner-hasmukh-patel.jpg';
import trusharPatel from '../assets/images/partner-trushar-patel.jpg';

export const heroPhoto: Photo = {
  src: packingLine,
  alt: 'Production staff in blue uniforms and hair caps packing liquid oral bottles into cartons along a stainless-steel packing line',
};

export const aboutPhoto: Photo = {
  src: facilityCorridor,
  alt: 'Facility corridor with blue doors to the office and quarantine room, epoxy floor and double doors at the far end',
};

export const qualityPhoto: Photo = {
  src: technicalTeam,
  alt: 'Technical staff in white coats and hair caps working at computers with documentation in the facility',
};

export const facilityGallery: GalleryItem[] = [
  {
    src: liquidFillingLine,
    alt: 'Operator in gloves feeding caps beside an automated liquid filling and capping line with amber bottles',
    caption: 'Liquid oral filling & capping line',
  },
  {
    src: packingTeam,
    alt: 'Packing staff placing bottles into printed cartons at a packing table',
    caption: 'Secondary packing',
  },
  {
    src: dispatchCartons,
    alt: 'Worker strapping a shipper carton of EERY Suspension with finished cartons stacked behind',
    caption: 'Finished goods ready for dispatch',
  },
  {
    src: storageRoom,
    alt: 'Storage room with steel racks holding labelled cartons and packing material',
    caption: 'Organised material storage',
  },
];

// Photo-to-name pairing follows the partners' patronymic order in the profile; confirm before publishing.
export const partners: Partner[] = [
  {
    name: 'Mr. Hasmukh Chimanbhai Patel',
    role: 'Partner',
    phone: '+91 9714503300',
    photo: { src: hasmukhPatel, alt: 'Mr. Hasmukh Chimanbhai Patel working at his desk' },
  },
  {
    name: 'Mr. Trushar Hasmukhbhai Patel',
    role: 'Partner',
    phone: '+91 9824414597',
    photo: { src: trusharPatel, alt: 'Mr. Trushar Hasmukhbhai Patel working at his desk' },
  },
];

export const partnersBio =
  'Our partners are pharmacy graduates with extensive experience in various areas of the pharmaceutical industry, including manufacturing, product development, and marketing.';
