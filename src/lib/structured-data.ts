import { company, contact, overview } from '../data/company';

/** Organization schema built strictly from verified company data; empty contact fields are omitted. */
export function organizationSchema(siteUrl?: URL, imageUrl?: string) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    description: overview.intro,
    foundingDate: String(company.foundedYear),
    slogan: company.tagline.join(' | '),
    address: {
      '@type': 'PostalAddress',
      ...(contact.addressLines.length ? { streetAddress: contact.addressLines.join(', ') } : {}),
      addressRegion: company.region,
      addressCountry: company.countryCode,
    },
  };

  if (siteUrl) schema.url = siteUrl.href;
  if (imageUrl) schema.image = imageUrl;
  if (contact.phones[0]) schema.telephone = contact.phones[0].value;
  if (contact.emails[0]) schema.email = contact.emails[0].value;

  const sameAs = contact.socials.map((social) => social.href);
  if (sameAs.length) schema.sameAs = sameAs;

  return schema;
}

/** Serialises JSON-LD safely for embedding inside a <script> element. */
export function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');
}
