import React from 'react';
import QRCode from 'react-qr-code';
import { Smartphone, Apple, ExternalLink } from 'lucide-react';
import { CONFIG } from '../constants';

interface DownloadSectionProps {
  t: any;
}

const DownloadSection: React.FC<DownloadSectionProps> = ({ t }) => {
  return (
    <section id="download" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-morocco-dark">{t.download_title}</h2>
          <p className="mt-2 text-gray-600">{t.download_subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Google Play */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="mb-6 bg-white p-2 rounded-lg border border-gray-100">
              <div style={{ height: "auto", margin: "0 auto", maxWidth: 150, width: "100%" }}>
                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={CONFIG.playStoreUrl}
                  viewBox={`0 0 256 256`}
                />
              </div>
              <p className="text-xs text-center mt-2 text-gray-400 uppercase tracking-wide">{t.scan_to_download}</p>
            </div>

            <a
              href={CONFIG.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[56px] bg-black text-white rounded-lg flex items-center justify-center px-6 py-3 gap-3 hover:bg-gray-800 transition-colors focus:ring-4 focus:ring-gray-300"
            >
              <Smartphone className="w-8 h-8 text-morocco-green" />
              <div className="text-left">
                <div className="text-[10px] uppercase font-semibold opacity-80 leading-none mb-1">{t.play_store_label}</div>
                <div className="text-lg font-bold leading-none">Google Play</div>
              </div>
            </a>
          </div>

          {/* App Store */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center relative overflow-hidden hover:shadow-md transition-shadow">
            {/* Disabled Overlay */}
            {!CONFIG.appStoreUrl && (
              <div className="absolute top-0 right-0 bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                {t.coming_soon}
              </div>
            )}

            <div className={`mb-6 bg-white p-2 rounded-lg border border-gray-100 ${!CONFIG.appStoreUrl ? 'opacity-40' : ''}`}>
              {CONFIG.appStoreUrl ? (
                <div style={{ height: "auto", margin: "0 auto", maxWidth: 150, width: "100%" }}>
                  <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={CONFIG.appStoreUrl}
                    viewBox={`0 0 256 256`}
                  />
                </div>
              ) : (
                <div className="w-[150px] h-[150px] bg-gray-100 flex items-center justify-center text-gray-300">
                  <Smartphone className="w-12 h-12" />
                </div>
              )}
              <p className={`text-xs text-center mt-2 uppercase tracking-wide ${!CONFIG.appStoreUrl ? 'text-gray-300' : 'text-gray-400'}`}>{t.scan_to_download}</p>
            </div>

            {CONFIG.appStoreUrl ? (
              <a
                href={CONFIG.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[56px] bg-black text-white rounded-lg flex items-center justify-center px-6 py-3 gap-3 hover:bg-gray-800 transition-colors focus:ring-4 focus:ring-gray-300"
              >
                <Apple className="w-8 h-8 text-white" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold opacity-80 leading-none mb-1">{t.app_store_label}</div>
                  <div className="text-lg font-bold leading-none">App Store</div>
                </div>
              </a>
            ) : (
              <button
                disabled
                className="w-full sm:w-auto min-h-[56px] bg-gray-100 text-gray-400 rounded-lg flex items-center justify-center px-6 py-3 gap-3 cursor-not-allowed border border-gray-200"
              >
                <Apple className="w-8 h-8 text-gray-400" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold opacity-80 leading-none mb-1">{t.app_store_label}</div>
                  <div className="text-lg font-bold leading-none">App Store</div>
                </div>
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadSection;