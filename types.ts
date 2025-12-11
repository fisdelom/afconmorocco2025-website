export type Language = 'en' | 'fr';

export interface Translation {
  tagline: string;
  disclaimer_banner: string;
  download_title: string;
  download_subtitle: string;
  play_store_label: string;
  app_store_label: string;
  coming_soon: string;
  scan_to_download: string;
  contact_title: string;
  address_label: string;
  phone_label: string;
  email_label: string;
  legal_disclaimer_footer: string;
  terms_link: string;
  privacy_link: string;
  rights_reserved: string;
  switch_lang: string;
}

export interface ContentConfig {
  playStoreUrl: string;
  appStoreUrl: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  socialMedia: {
    facebook: string;
    twitter: string;
    instagram: string;
    tiktok: string;
  };
}