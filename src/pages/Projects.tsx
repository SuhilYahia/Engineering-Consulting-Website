import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function Projects() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const categories = [
    { id: 'all', name: 'All', nameAr: 'الكل' },
    { id: 'residential', name: 'Residential', nameAr: 'سكني' },
    { id: 'commercial', name: 'Commercial', nameAr: 'تجاري' },
    { id: 'mixed', name: 'Mixed Use', nameAr: 'متعدد الاستخدامات' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Al-Riyadh Corporate Tower',
      titleAr: 'برج الرياض التجاري',
      category: 'commercial',
      categoryName: 'Commercial',
      categoryNameAr: 'تجاري',
      location: 'Riyadh',
      locationAr: 'الرياض',
      image: 'https://images.unsplash.com/photo-1576089851167-27b687f87fdf?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Luxury Villas Complex',
      titleAr: 'مجمع الفيلات الفاخرة',
      category: 'residential',
      categoryName: 'Residential',
      categoryNameAr: 'سكني',
      location: 'Jeddah',
      locationAr: 'جدة',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Modern Tech Hub',
      titleAr: 'المركز التقني الحديث',
      category: 'mixed',
      categoryName: 'Mixed Use',
      categoryNameAr: 'متعدد الاستخدامات',
      location: 'Dammam',
      locationAr: 'الدمام',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'City Center Mall',
      titleAr: 'مول سيتي سنتر',
      category: 'commercial',
      categoryName: 'Commercial',
      categoryNameAr: 'تجاري',
      location: 'Riyadh',
      locationAr: 'الرياض',
      image: 'https://images.unsplash.com/photo-1519420573924-65fcd45245f8?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Sea View Apartments',
      titleAr: 'شقق الإطلالة البحرية',
      category: 'residential',
      categoryName: 'Residential',
      categoryNameAr: 'سكني',
      location: 'Khobar',
      locationAr: 'الخبر',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Cultural Center',
      titleAr: 'المركز الثقافي',
      category: 'mixed',
      categoryName: 'Mixed Use',
      categoryNameAr: 'متعدد الاستخدامات',
      location: 'Jeddah',
      locationAr: 'جدة',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-32 pb-20 bg-primary text-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif"
          >
            {isAr ? 'مشاريعنا' : 'Our Projects'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-surface/80 max-w-2xl mx-auto mb-6"
          >
            {isAr 
              ? 'تصفح محفظتنا المتنوعة من المشاريع الناجحة التي تعكس التزامنا بالتميز والابتكار.' 
              : 'Browse our diverse portfolio of successful projects that reflect our commitment to excellence and innovation.'}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-1 bg-accent mx-auto"
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-surface shadow-md scale-105'
                    : 'bg-bg-soft text-text-secondary hover:bg-gray-200'
                }`}
              >
                {isAr ? category.nameAr : category.name}
              </button>
            ))}
          </div>

          {/* Projects */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer rounded-2xl overflow-hidden relative shadow-md hover:shadow-xl h-[400px]"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <div className="bg-accent text-primary text-sm font-bold py-1 px-3 rounded-full">
                        {isAr ? project.categoryNameAr : project.categoryName}
                      </div>
                      <div className="text-surface/80 text-sm font-semibold">
                        {isAr ? project.locationAr : project.location}
                      </div>
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
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-text-secondary text-lg font-semibold">
              {isAr ? 'لا توجد مشاريع في هذا التصنيف حالياً.' : 'No projects found in this category currently.'}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
