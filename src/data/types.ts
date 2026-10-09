import type { ImageMetadata } from 'astro';

export interface Photo {
  src: ImageMetadata;
  alt: string;
}

export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface Capability {
  title: string;
  description: string;
  points?: string[];
  icon: IconName;
}

export interface Product {
  id: string;
  name: string;
  /** Dosage form exactly as printed on the carton. */
  form?: string;
  /** Composition / generic name exactly as printed on the carton. */
  composition?: string;
  strength?: string;
  pack: string;
  /** Short statements printed on the carton front. */
  labelNotes?: string[];
  photo: Photo;
  /** Crop anchor used when the photo is fitted into the card frame. */
  focus?: string;
}

export interface Partner {
  name: string;
  role: string;
  photo: Photo;
}

export interface GalleryItem extends Photo {
  caption: string;
}

export interface ContactDetails {
  /** Street address, one line per entry, without region/country (those come from `company`). */
  addressLines: string[];
  locality: string | null;
  postalCode: string | null;
  /** GST identification number, as printed on the facility signboard. */
  gstin: string | null;
  phones: { label: string; value: string }[];
  emails: { label: string; value: string }[];
  /** International format without spaces or "+", e.g. 91XXXXXXXXXX. */
  whatsapp: string | null;
  website: string | null;
  /** Share URL for a verified map listing (opened in a new tab; no embed). */
  mapUrl: string | null;
  socials: { label: string; href: string }[];
}

export interface FactoryVideoConfig {
  /** Path under /public, e.g. "/media/factory-tour.mp4". */
  src: string;
  type: 'video/mp4' | 'video/webm';
  poster: Photo;
  title: string;
  description: string;
  /** Approximate length shown on the play button, e.g. "1:24". */
  duration?: string;
}

export type IconName =
  | 'flask'
  | 'capsule'
  | 'shield'
  | 'factory'
  | 'check'
  | 'globe'
  | 'handshake'
  | 'arrow-right'
  | 'map-pin'
  | 'phone'
  | 'mail'
  | 'link'
  | 'whatsapp'
  | 'play'
  | 'expand'
  | 'close'
  | 'chevron-left'
  | 'chevron-right'
  | 'menu'
  | 'microscope'
  | 'clipboard'
  | 'users'
  | 'layers';
