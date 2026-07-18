import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { i18n } = useTranslation();

  // Update document direction based on language
  useEffect(() => {
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="flex flex-col min-h-screen bg-bg-soft text-text-main">
      <Navbar />

      <main className="flex-grow pt-20">
        {children}
      </main>

      <Footer />
      
      <WhatsAppButton />
    </div>
  );
}
