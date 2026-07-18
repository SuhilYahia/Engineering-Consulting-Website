import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export default function ContactCTA() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-surface mb-4 font-serif"
            >
              {isAr ? 'جاهز لبدء مشروعك القادم؟' : 'Ready to Start Your Next Project?'}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-surface/80 text-lg md:text-xl"
            >
              {isAr 
                ? 'تواصل معنا اليوم للحصول على استشارة هندسية متخصصة ومناقشة تفاصيل مشروعك.'
                : 'Contact us today to get expert engineering consultancy and discuss your project details.'}
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button variant="secondary" size="lg" className="whitespace-nowrap shadow-[0_0_20px_rgba(200,155,60,0.4)] hover:shadow-[0_0_30px_rgba(200,155,60,0.6)]">
              {t('request_consultation')}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
