import logo from '../images/logo.png';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, t }) => {
  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'fr' : 'en');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="App Logo"
            className="w-10 h-10 rounded-xl shadow-sm object-cover"
          />
          <span className="font-bold text-xl tracking-tight text-morocco-dark">
            afconmorocco2025
          </span>
        </div>

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700"
        >
          <Globe className="w-4 h-4" />
          <span>{t.switch_lang}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;