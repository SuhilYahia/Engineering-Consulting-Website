import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PenTool, HardHat, Building2, Calculator, Ruler, FileCheck } from 'lucide-react';

export default function ServicesOverview() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: 'Architectural Design',
      titleAr: 'التصميم المعماري',
      description: 'Creating innovative, functional, and aesthetically pleasing architectural spaces.',
      descriptionAr: 'ابتكار مساحات معمارية تجمع بين الجمال والوظيفة والإبداع.',
      icon: <PenTool size={32} />
    },
    {
      id: 2,
      title: 'Structural Design',
      titleAr: 'التصميم الإنشائي',
      description: 'Ensuring safety and durability through advanced structural engineering.',
      descriptionAr: 'ضمان السلامة والمتانة من خلال هندسة إنشائية متطورة وموثوقة.',
      icon: <Calculator size={32} />
    },
    {
      id: 3,
      title: 'Engineering Supervision',
      titleAr: 'الإشراف الهندسي',
      description: 'On-site monitoring to ensure construction matches design specifications perfectly.',
      descriptionAr: 'متابعة ميدانية لضمان تطابق التنفيذ مع المواصفات التصميمية بأعلى دقة.',
      icon: <HardHat size={32} />
    },
    {
      id: 4,
      title: 'Project Management',
      titleAr: 'إدارة المشاريع',
      description: 'Comprehensive management from concept to final delivery, on time and budget.',
      descriptionAr: 'إدارة متكاملة من الفكرة وحتى التسليم، في الوقت المحدد وضمن الميزانية.',
      icon: <Building2 size={32} />
    },
    {
      id: 5,
      title: 'Engineering Reports',
      titleAr: 'التقارير الهندسية',
      description: 'Detailed analysis, structural assessments, and technical compliance reporting.',
      descriptionAr: 'تحليل دقيق، تقييم إنشائي، وإصدار تقارير المطابقة الفنية.',
      icon: <FileCheck size={32} />
    },
    {
      id: 6,
      title: 'Building Permits',
      titleAr: 'تراخيص البناء',
      description: 'Streamlining the process of acquiring necessary permits and government approvals.',
      descriptionAr: 'تسهيل عملية الحصول على التراخيص والموافقات الحكومية اللازمة.',
      icon: <Ruler size={32} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary mb-6 font-serif"
          >
            {t('services')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-accent mx-auto"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.a
              key={service.id}
              href="/services"
              variants={itemVariants}
              className="p-8 rounded-2xl bg-surface shadow-lg border-t-4 border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group block"
            >
              <div className="w-16 h-16 bg-bg-soft rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-surface group-hover:shadow-lg transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">
                {useTranslation().i18n.language === 'ar' ? service.titleAr : service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {useTranslation().i18n.language === 'ar' ? service.descriptionAr : service.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
