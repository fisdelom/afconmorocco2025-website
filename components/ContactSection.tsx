import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONFIG } from '../constants';

interface ContactSectionProps {
  t: any;
}

// Custom SVG Icons for Brands to ensure correct styling
const XIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <title>X (formerly Twitter)</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <title>TikTok</title>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.55-1.09-.01 2.58.01 5.16-.01 7.74-.21 2.8-2.6 5.37-5.41 5.43-1.56.03-3.08-.54-4.25-1.58-1.05-1.04-1.63-2.52-1.61-4.02.1-3.1 2.61-5.59 5.71-5.55 1.09-.03 2.16.29 3.09.91.03-1.42.01-2.84.02-4.26a10.15 10.15 0 00-3.01-1.02c-3.79-.53-7.56 1.48-8.89 4.96-1.35 3.52.41 7.53 3.92 8.95 2.51 1.02 5.39.52 7.49-1.06 1.68-1.27 2.68-3.25 2.68-5.35V.02h-3.89z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <title>Facebook</title>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <title>Instagram</title>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const ContactSection: React.FC<ContactSectionProps> = ({ t }) => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-10 text-morocco-dark">{t.contact_title}</h2>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-red-50 text-morocco-red rounded-full flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">{t.email_label}</h3>
            <a href={`mailto:${CONFIG.contactEmail}`} className="text-sm text-gray-600 hover:text-morocco-red transition-colors">
              {CONFIG.contactEmail}
            </a>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-50 text-morocco-green rounded-full flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">{t.phone_label}</h3>
            <a href={`tel:${CONFIG.contactPhone.replace(/\s/g, '')}`} className="text-sm text-gray-600 hover:text-morocco-green transition-colors">
              {CONFIG.contactPhone}
            </a>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">{t.address_label}</h3>
            <p className="text-sm text-gray-600 max-w-[200px]">
              {CONFIG.contactAddress}
            </p>
          </div>

        </div>

        {/* Social Media Icons */}
        <div className="mt-12 pt-8 border-t border-gray-50">
          <div className="flex justify-center gap-6">
            <a 
              href={CONFIG.socialMedia.facebook}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a 
              href={CONFIG.socialMedia.twitter}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-all transform hover:-translate-y-1"
              aria-label="X (Twitter)"
            >
              <XIcon className="w-5 h-5" />
            </a>
            <a 
              href={CONFIG.socialMedia.instagram}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 hover:bg-pink-600 hover:text-white transition-all transform hover:-translate-y-1"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a 
              href={CONFIG.socialMedia.tiktok}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-all transform hover:-translate-y-1"
              aria-label="TikTok"
            >
              <TiktokIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;