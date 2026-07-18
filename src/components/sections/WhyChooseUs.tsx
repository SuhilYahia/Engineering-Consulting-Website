import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Clock, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const stats = [
    {
      id: 1,
      value: '+15',
      title: isAr ? 'سنوات الخبرة' : 'Years Experience',
      icon: <Clock size={40} className="text-accent" />
    },
    {
      id: 2,
      value: '+500',
      title: isAr ? 'مشروع منجز' : 'Projects Completed',
      icon: <BuildingIcon />
    },
    {
      id: 3,
      value: '+50',
      title: isAr ? 'مهندس وخبير' : 'Expert Engineers',
      icon: <Users size={40} className="text-accent" />
    },
    {
      id: 4,
      value: '100%',
      title: isAr ? 'رضا العملاء' : 'Client Satisfaction',
      icon: <ShieldCheck size={40} className="text-accent" />
    }
  ];

  return (
    <section className="py-24 bg-primary text-surface relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: isAr ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">
                {isAr ? 'لماذا تختار ثلاثي الأبعاد؟' : 'Why Choose Three Dimensions?'}
              </h2>
              <div className="w-20 h-1 bg-accent mb-8" />
              <p className="text-surface/80 text-lg leading-relaxed mb-8">
                {isAr 
                  ? 'نحن نلتزم بتقديم أرقى المعايير الهندسية في كل مشروع نتولاه. يجمع فريقنا بين الخبرة الطويلة والابتكار لضمان تحقيق رؤيتك بأعلى مستويات الجودة والسلامة.'
                  : 'We are committed to delivering the highest engineering standards in every project we undertake. Our team combines deep experience with innovation to ensure your vision is realized with unmatched quality and safety.'}
              </p>
              
              <ul className="space-y-4">
                {[
                  isAr ? 'معايير هندسية معتمدة عالمياً' : 'Internationally accredited engineering standards',
                  isAr ? 'فريق عمل متكامل من الخبراء والاستشاريين' : 'Integrated team of experts and consultants',
                  isAr ? 'الالتزام التام بالجداول الزمنية والميزانيات' : 'Strict adherence to timelines and budgets',
                  isAr ? 'استخدام أحدث التقنيات الهندسية والمعمارية' : 'Utilization of the latest architectural and engineering technologies'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="flex items-center gap-3"
                  >
                    <Award className="text-accent flex-shrink-0" size={24} />
                    <span className="font-semibold text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-surface/5 backdrop-blur-sm border border-surface/10 p-8 rounded-2xl text-center hover:bg-surface/10 transition-colors"
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold font-serif mb-2 text-white">{stat.value}</div>
                  <div className="text-surface/70 font-semibold">{stat.title}</div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

// Simple building icon component to avoid importing another huge icon set just for one icon
function BuildingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
      <path d="M9 22v-4h6v4"></path>
      <path d="M8 6h.01"></path>
      <path d="M16 6h.01"></path>
      <path d="M12 6h.01"></path>
      <path d="M12 10h.01"></path>
      <path d="M12 14h.01"></path>
      <path d="M16 10h.01"></path>
      <path d="M16 14h.01"></path>
      <path d="M8 10h.01"></path>
      <path d="M8 14h.01"></path>
    </svg>
  )
}
