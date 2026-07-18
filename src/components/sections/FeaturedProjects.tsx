import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';

export default function FeaturedProjects() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const projects = [
    {
      id: 1,
      title: 'Al-Riyadh Corporate Tower',
      titleAr: 'برج الرياض التجاري',
      category: 'Commercial',
      categoryAr: 'تجاري',
      image: 'https://images.unsplash.com/photo-1576089851167-27b687f87fdf?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Luxury Villas Complex',
      titleAr: 'مجمع الفيلات الفاخرة',
      category: 'Residential',
      categoryAr: 'سكني',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Modern Tech Hub',
      titleAr: 'المركز التقني الحديث',
      category: 'Mixed Use',
      categoryAr: 'متعدد الاستخدامات',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-24 bg-bg-soft">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-primary mb-6 font-serif"
            >
              {isAr ? 'مشاريعنا المميزة' : 'Featured Projects'}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`w-24 h-1 bg-accent ${isAr ? 'ml-auto md:ml-0' : 'mr-auto md:mr-0'}`}
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary mt-6 text-lg"
            >
              {isAr 
                ? 'استعرض مجموعة من أبرز مشاريعنا التي تعكس التزامنا بالتميز والابتكار في مجال الاستشارات الهندسية.'
                : 'Browse a selection of our prominent projects that reflect our commitment to excellence and innovation in engineering consultancy.'}
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: isAr ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" className="flex items-center gap-2">
              <span>{isAr ? 'عرض كل المشاريع' : 'View All Projects'}</span>
              {isAr ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer rounded-2xl overflow-hidden relative shadow-lg h-[450px]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-accent text-primary text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
                  {isAr ? project.categoryAr : project.category}
                </div>
                <h3 className="text-2xl font-bold text-surface mb-2 font-serif">
                  {isAr ? project.titleAr : project.title}
                </h3>
                <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-semibold">{isAr ? 'عرض التفاصيل' : 'View Details'}</span>
                  {isAr ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
