import { company, contact } from '../data/company';
import type { IconName } from '../data/types';

export interface ContactChannel {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

const ALLOWED_PROTOCOLS = new Set(['https:', 'mailto:', 'tel:']);

/** Returns the URL only if it uses an allowed protocol; content edits can never inject `javascript:` links. */
export function safeHref(raw: string): string | undefined {
  try {
    const url = new URL(raw);
    return ALLOWED_PROTOCOLS.has(url.protocol) ? url.href : undefined;
  } catch {
    return undefined;
  }
}

const digitsOnly = (value: string) => value.replace(/[^\d]/g, '');

export function telHref(phone: string): string | undefined {
  const plus = phone.trim().startsWith('+') ? '+' : '';
  return safeHref(`tel:${plus}${digitsOnly(phone)}`);
}

export function getContactChannels(): ContactChannel[] {
  const channels: ContactChannel[] = [];

  if (contact.addressLines.length) {
    channels.push({
      icon: 'map-pin',
      label: 'Address',
      value: [...contact.addressLines, `${company.region}, ${company.country}`].join('\n'),
      href: contact.mapUrl ? safeHref(contact.mapUrl) : undefined,
      external: true,
    });
  }

  for (const phone of contact.phones) {
    channels.push({ icon: 'phone', label: phone.label, value: phone.value, href: telHref(phone.value) });
  }

  for (const email of contact.emails) {
    channels.push({ icon: 'mail', label: email.label, value: email.value, href: safeHref(`mailto:${email.value.trim()}`) });
  }

  if (contact.whatsapp) {
    channels.push({
      icon: 'whatsapp',
      label: 'WhatsApp',
      value: `+${digitsOnly(contact.whatsapp)}`,
      href: safeHref(`https://wa.me/${digitsOnly(contact.whatsapp)}`),
      external: true,
    });
  }

  if (contact.website) {
    const href = safeHref(contact.website);
    if (href) channels.push({ icon: 'link', label: 'Website', value: new URL(href).host, href, external: true });
  }

  return channels;
}

export const primaryEmail = contact.emails[0]?.value.trim() ?? null;

export const socialLinks = contact.socials
  .map((social) => ({ label: social.label, href: safeHref(social.href) }))
  .filter((social): social is { label: string; href: string } => Boolean(social.href));
