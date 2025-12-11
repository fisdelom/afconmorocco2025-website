import React from 'react';

interface FooterProps {
  t: any;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-morocco-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
           <div className="font-bold text-xl mb-4 md:mb-0">
             afconmorocco2025
           </div>
           <div className="flex gap-6 text-sm text-gray-400">
             <a href="terms-of-service.html" className="hover:text-white transition-colors">{t.terms_link}</a>
             <a href="privacy-policy.html" className="hover:text-white transition-colors">{t.privacy_link}</a>
             <a href="user-data-deletion.html" className="hover:text-white transition-colors">Data Deletion</a>
             <a href="marketing.html" className="hover:text-white transition-colors">Marketing</a>
             <a href="support.html" className="hover:text-white transition-colors">Support</a>
           </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm mb-4 max-w-3xl">
            {t.legal_disclaimer_footer}
          </p>
          <div className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} afconmorocco2025.com. {t.rights_reserved}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;