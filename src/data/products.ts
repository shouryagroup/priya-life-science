// Product details are transcribed only from what is printed on each carton photograph.
import type { Photo, Product } from './types';

import quiniril from '../assets/images/product-quiniril.jpg';
import eery from '../assets/images/product-eery.jpg';
import antispas from '../assets/images/product-antispas.jpg';
import wonderCypro from '../assets/images/product-wonder-cypro.jpg';
import hungerAppetite from '../assets/images/product-hunger-appetite.jpg';
import azithroGold from '../assets/images/product-azithro-gold.jpg';
import evemol from '../assets/images/product-evemol.jpg';
import mefa100 from '../assets/images/product-mefa-100.jpg';
import productsRange from '../assets/images/products-range.jpg';

export const products: Product[] = [
  {
    id: 'quiniril',
    name: 'QuiniRIL',
    form: 'Suspension',
    composition: 'Quinine Sulphate Oral Suspension BP',
    strength: '50 mg / 5 ml',
    pack: '100 ml',
    labelNotes: ['Antimalarial'],
    photo: { src: quiniril, alt: 'QuiniRIL Suspension carton — Quinine Sulphate Oral Suspension BP 50 mg/5 ml, 100 ml' },
  },
  {
    id: 'eery',
    name: 'EERY',
    form: 'Suspension',
    composition: 'Érythromycine Estolate Suspension Buvable',
    strength: '125 mg / 5 ml',
    pack: '100 ml',
    photo: { src: eery, alt: 'EERY Suspension carton — Erythromycin Estolate suspension 125 mg/5 ml, 100 ml' },
  },
  {
    id: 'antispas',
    name: 'ANTISPAS',
    form: 'Infants Gas Relief Drops',
    composition: 'Simethicone Drops',
    strength: '67 mg / ml',
    pack: '30 ml + plastic dropper',
    labelNotes: ['Dye-free', 'Saccharin-free', 'No artificial colours or flavours'],
    photo: { src: antispas, alt: 'ANTISPAS Infants Gas Relief Drops carton — Simethicone Drops 67 mg/ml, 30 ml with plastic dropper' },
  },
  {
    id: 'wonder-cypro',
    name: 'WONDER CYPRO',
    pack: '200 ml',
    photo: { src: wonderCypro, alt: 'WONDER CYPRO 200 ml carton with fruit artwork' },
  },
  {
    id: 'hunger-appetite',
    name: 'HUNGER APPETITE',
    form: 'Syrup',
    composition: 'Cyproheptadine & Vitamin B-Complex Syrup',
    pack: '200 ml',
    photo: { src: hungerAppetite, alt: 'HUNGER APPETITE Syrup carton — Cyproheptadine and Vitamin B-Complex Syrup, 200 ml' },
  },
  {
    id: 'azithro-gold',
    name: 'AZITHRO GOLD',
    form: 'Oral Suspension',
    composition: 'Azithromycin Oral Suspension',
    pack: '15 ml + dropper',
    labelNotes: ['For paediatric use'],
    photo: { src: azithroGold, alt: 'AZITHRO GOLD carton — Azithromycin Oral Suspension for paediatric use, 15 ml with dropper' },
  },
  {
    id: 'evemol',
    name: 'Evemol',
    form: 'Suspension',
    composition: 'Paracetamol Oral Suspension BP',
    pack: '100 ml',
    labelNotes: ['Fast pain relief', 'Reduces fever', 'Cold symptoms'],
    photo: { src: evemol, alt: 'Evemol Suspension carton — Paracetamol Oral Suspension BP, 100 ml' },
  },
  {
    id: 'mefa-100',
    name: 'MEFA-100',
    form: 'Suspension',
    composition: 'Mefenamic Acid Suspension BP',
    pack: '100 ml',
    photo: { src: mefa100, alt: 'MEFA-100 Suspension carton — Mefenamic Acid Suspension BP, 100 ml' },
  },
];

export const productRangePhoto: Photo = {
  src: productsRange,
  alt: 'A range of liquid oral product cartons including Metrozest, Histalive, Azithro Gold, Hunger Appetite, Antispas and King Power arranged on a table',
};
