import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PenTool, HardHat, Building2, Calculator, Ruler, FileCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Services() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const services = [
    {
      id: 1,
      title: 'Architectural Design',
      titleAr: 'التصميم المعماري',
      description: 'Creating innovative, functional, and aesthetically pleasing architectural spaces. We combine art and science to design spaces that are visually stunning and structurally sound.',
      descriptionAr: 'ابتكار مساحات معمارية تجمع بين الجمال والوظيفة والإبداع. نجمع بين الفن والعلم لتصميم مساحات رائعة بصرياً وسليمة إنشائياً.',
      icon: <PenTool size={48} />,
      link: '/services/architectural'
    },
    {
      id: 2,
      title: 'Structural Design',
      titleAr: 'التصميم الإنشائي',
      description: 'Ensuring safety and durability through advanced structural engineering. We utilize the latest software and engineering practices to guarantee structural integrity.',
      descriptionAr: 'ضمان السلامة والمتانة من خلال هندسة إنشائية متطورة وموثوقة. نستخدم أحدث البرامج والممارسات الهندسية لضمان السلامة الإنشائية.',
      icon: <Calculator size={48} />,
      link: '/services/structural'
    },
    {
      id: 3,
      title: 'Engineering Supervision',
      titleAr: 'الإشراف الهندسي',
      description: 'On-site monitoring to ensure construction matches design specifications perfectly. Our team ensures that every detail is executed flawlessly according to plan.',
      descriptionAr: 'متابعة ميدانية لضمان تطابق التنفيذ مع المواصفات التصميمية بأعلى دقة. فريقنا يتأكد من تنفيذ كل تفصيلة بدقة متناهية حسب الخطة.',
      icon: <HardHat size={48} />,
      link: '/services/supervision'
    },
    {
      id: 4,
      title: 'Project Management',
      titleAr: 'إدارة المشاريع',
      description: 'Comprehensive management from concept to final delivery, on time and budget. We oversee timelines, resources, and coordination among all stakeholders.',
      descriptionAr: 'إدارة متكاملة من الفكرة وحتى التسليم، في الوقت المحدد وضمن الميزانية. نشرف على الجداول الزمنية، والموارد، والتنسيق بين جميع الأطراف.',
      icon: <Building2 size={48} />,
      link: '/services/management'
    },
    {
      id: 5,
      title: 'Engineering Reports',
      titleAr: 'التقارير الهندسية',
      description: 'Detailed analysis, structural assessments, and technical compliance reporting for existing structures and new constructions alike.',
      descriptionAr: 'تحليل دقيق، تقييم إنشائي، وإصدار تقارير المطابقة الفنية للمنشآت القائمة والإنشاءات الجديدة على حد سواء.',
      icon: <FileCheck size={48} />,
      link: '/services/reports'
    },
    {
      id: 6,
      title: 'Building Permits',
      titleAr: 'تراخيص البناء',
      description: 'Streamlining the process of acquiring necessary permits, demolition, and renovation approvals from local authorities.',
      descriptionAr: 'تسهيل عملية الحصول على التراخيص والموافقات الحكومية اللازمة للبناء، الهدم، والترميم من الجهات المختصة.',
      icon: <Ruler size={48} />,
      link: '/services/permits'
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-32 pb-20 bg-primary text-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif"
          >
            {isAr ? 'خدماتنا الهندسية' : 'Our Engineering Services'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-surface/80 max-w-2xl mx-auto mb-6"
          >
            {isAr 
              ? 'نقدم مجموعة متكاملة من الخدمات الهندسية التي تلبي تطلعاتك وتضمن نجاح مشروعك بأعلى معايير الجودة.' 
              : 'We provide a comprehensive suite of engineering services tailored to your needs, ensuring the success of your project with the highest quality standards.'}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-1 bg-accent mx-auto"
          />
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-surface rounded-2xl p-8 md:p-10 shadow-lg border-t-4 border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="w-20 h-20 bg-bg-soft text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-surface group-hover:shadow-lg transition-all duration-300">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4 font-serif">
                  {isAr ? service.titleAr : service.title}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                  {isAr ? service.descriptionAr : service.description}
                </p>
                <div className="mt-auto">
                  <Button variant="outline" className="w-full sm:w-auto flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-surface">
                    <span>{isAr ? 'عرض التفاصيل' : 'View Details'}</span>
                    {isAr ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
