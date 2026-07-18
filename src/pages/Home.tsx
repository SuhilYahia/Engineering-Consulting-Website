import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ServicesOverview from '../components/sections/ServicesOverview';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Testimonials from '../components/sections/Testimonials';
import ContactCTA from '../components/sections/ContactCTA';
import { Button } from '../components/ui/Button';
import HeroAnimation3D from '../components/sections/HeroAnimation3D';

export default function Home() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Animation Background */}
        <HeroAnimation3D />

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-surface mb-6 font-serif leading-tight drop-shadow-lg"
          >
            {t('hero_title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-surface/90 max-w-3xl mx-auto mb-10 drop-shadow-md"
          >
            {t('hero_subtitle')}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="secondary" size="lg">
              {t('request_consultation')}
            </Button>
            <Button variant="outline" size="lg" className="border-surface text-surface hover:bg-surface hover:text-primary">
              {isAr ? 'استكشف مشاريعنا' : 'Explore Our Projects'}
            </Button>
          </motion.div>
        </div>
      </section>

      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
    </div>
  );
}
