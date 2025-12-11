import { ContentConfig, Translation } from './types';

// ==========================================
// CONFIGURATION AREA - UPDATE LINKS HERE
// ==========================================
export const CONFIG: ContentConfig = {
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.afcon2025.app",
  appStoreUrl: "", // Leave empty to show "Coming Soon"
  contactEmail: "contact@afconmorocco2025.com",
  contactPhone: "+212 664 27 28 34",
  contactAddress: "319, Technopark Casablanca, Boulevard Dammam, Casablanca - Morocco",
  socialMedia: {
    facebook: "https://web.facebook.com/afconmorocco2025",
    twitter: "https://x.com/afconmorocco",
    instagram: "https://www.instagram.com/afconmorocco2025",
    tiktok: "https://www.tiktok.com/@afconmorocco2025"
  }
};

export const TRANSLATIONS: Record<string, Translation> = {
  en: {
    tagline: "Independent fan-made app — Africa Cup 2025",
    disclaimer_banner: "Unofficial App - Not affiliated with CAF",
    download_title: "Get the App",
    download_subtitle: "Follow every match, score, and update live from Morocco.",
    play_store_label: "Get it on",
    app_store_label: "Download on the",
    coming_soon: "Coming soon",
    scan_to_download: "Scan to download",
    contact_title: "Contact Us",
    address_label: "Address",
    phone_label: "Phone",
    email_label: "Email",
    legal_disclaimer_footer: "This is an independent, unofficial fan-made app and is not affiliated with CAF or the AFCON Morocco 2025 organizers.",
    terms_link: "Terms & Conditions",
    privacy_link: "Privacy Policy",
    rights_reserved: "All rights reserved.",
    switch_lang: "FR",
  },
  fr: {
    tagline: "Application indépendante créée par des fans — Coupe d'Afrique 2025",
    disclaimer_banner: "Application non officielle - Non affiliée à la CAF",
    download_title: "Télécharger l'application",
    download_subtitle: "Suivez chaque match, score et mise à jour en direct du Maroc.",
    play_store_label: "Disponible sur",
    app_store_label: "Télécharger dans",
    coming_soon: "Bientôt disponible",
    scan_to_download: "Scanner pour télécharger",
    contact_title: "Contactez-nous",
    address_label: "Adresse",
    phone_label: "Téléphone",
    email_label: "Email",
    legal_disclaimer_footer: "Ceci est une application indépendante et non officielle, créée par des fans, et n'est pas affiliée à la CAF ni aux organisateurs de la CAN Maroc 2025.",
    terms_link: "Conditions Générales",
    privacy_link: "Politique de Confidentialité",
    rights_reserved: "Tous droits réservés.",
    switch_lang: "EN",
  }
};