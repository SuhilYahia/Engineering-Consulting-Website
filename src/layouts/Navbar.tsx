import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
  };

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('projects'), href: '/projects' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'glass-dark py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className={`font-serif text-2xl md:text-3xl font-bold ${isScrolled ? 'text-surface' : 'text-primary'}`}>
            <span className="text-accent">3D</span> Engineering
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-semibold hover:text-accent transition-colors ${
                isScrolled ? 'text-surface' : 'text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-2 hover:text-accent transition-colors ${
              isScrolled ? 'text-surface' : 'text-primary'
            }`}
          >
            <Globe size={20} />
            <span className="font-semibold">{i18n.language === 'ar' ? 'English' : 'عربي'}</span>
          </button>
          
          <Button variant="secondary" size="sm">
            {t('request_consultation')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`lg:hidden p-2 ${isScrolled ? 'text-surface' : 'text-primary'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-surface shadow-xl border-t border-gray-100"
        >
          <div className="flex flex-col p-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="py-3 px-4 text-text-main font-semibold hover:bg-bg-soft hover:text-primary rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-gray-200 my-4"></div>
            <button 
              onClick={toggleLanguage}
              className="py-3 px-4 flex items-center gap-2 text-text-main font-semibold hover:bg-bg-soft hover:text-primary rounded-md"
            >
              <Globe size={20} />
              <span>{i18n.language === 'ar' ? 'Switch to English' : 'التبديل للعربية'}</span>
            </button>
            <div className="mt-4 px-4">
              <Button variant="primary" className="w-full">
                {t('request_consultation')}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
