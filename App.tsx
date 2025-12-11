import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DownloadSection from './components/DownloadSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-morocco-green selection:text-white">
      <Header lang={lang} setLang={setLang} t={t} />
      
      <main>
        <Hero t={t} />
        <DownloadSection t={t} />
        <ContactSection t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}

export default App;