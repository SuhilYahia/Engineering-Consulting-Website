import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function AboutUs() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-32 pb-20 bg-primary text-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif"
          >
            {isAr ? 'عن الشركة' : 'About Us'}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-1 bg-accent mx-auto"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: isAr ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
                {isAr ? 'قصتنا وتاريخنا' : 'Our Story & History'}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6 text-lg">
                {isAr 
                  ? 'تأسست شركة ثلاثي الأبعاد للاستشارات الهندسية برؤية واضحة تهدف إلى إرساء معايير جديدة في عالم الهندسة والعمارة. على مدار سنوات من العمل الجاد والتطوير المستمر، نجحنا في تنفيذ مجموعة واسعة من المشاريع الرائدة التي ساهمت في تشكيل الأفق المعماري وتلبية تطلعات عملائنا بأعلى درجات الدقة.'
                  : 'Three Dimensions Engineering Consultancy was founded with a clear vision to set new standards in the world of engineering and architecture. Over years of hard work and continuous development, we have successfully executed a wide range of pioneering projects that have contributed to shaping the architectural skyline and meeting our clients’ aspirations with the highest degree of precision.'}
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                {isAr 
                  ? 'نحن نؤمن بأن الهندسة ليست مجرد أرقام وحسابات، بل هي فن صناعة الحياة. لذا نجمع بين التصميم الإبداعي والتنفيذ الهندسي الصارم للوصول إلى حلول مستدامة وآمنة وذات طابع جمالي فريد.'
                  : 'We believe that engineering is not just numbers and calculations, but the art of shaping life. Therefore, we combine creative design with rigorous engineering execution to reach sustainable, safe, and aesthetically unique solutions.'}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: isAr ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" 
                  alt="Engineering team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-surface p-8 rounded-2xl shadow-xl max-w-[250px] hidden lg:block">
                <div className="text-4xl font-bold font-serif mb-2 text-accent">15+</div>
                <div className="font-semibold">{isAr ? 'عاماً من التميز الهندسي' : 'Years of Engineering Excellence'}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-bg-soft">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface p-12 rounded-2xl shadow-lg border-t-4 border-accent"
            >
              <h3 className="text-3xl font-bold text-primary mb-6 font-serif">
                {isAr ? 'رؤيتنا' : 'Our Vision'}
              </h3>
              <p className="text-text-secondary leading-relaxed text-lg mb-8">
                {isAr
                  ? 'أن نكون الشركة الرائدة والأولى في تقديم الاستشارات الهندسية المبتكرة والمستدامة في المنطقة، وأن نساهم بشكل فعال في تطوير البنية التحتية والمشهد المعماري.'
                  : 'To be the leading and premier company in providing innovative and sustainable engineering consultancy in the region, and to actively contribute to the development of infrastructure and the architectural landscape.'}
              </p>
              <ul className="space-y-4">
                {[
                  isAr ? 'الريادة في التصميم المعماري' : 'Leadership in architectural design',
                  isAr ? 'الاعتماد على التقنيات الحديثة' : 'Reliance on modern technologies',
                  isAr ? 'تحقيق الاستدامة البيئية' : 'Achieving environmental sustainability'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-success" size={24} />
                    <span className="text-primary font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary text-surface p-12 rounded-2xl shadow-lg border-t-4 border-accent relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="text-3xl font-bold text-surface mb-6 font-serif relative z-10">
                {isAr ? 'رسالتنا' : 'Our Mission'}
              </h3>
              <p className="text-surface/80 leading-relaxed text-lg mb-8 relative z-10">
                {isAr
                  ? 'تقديم خدمات هندسية واستشارية ذات جودة عالية تتجاوز توقعات عملائنا، مع الالتزام بأعلى معايير السلامة المهنية، والشفافية التامة في التعامل.'
                  : 'Providing high-quality engineering and consulting services that exceed our clients\' expectations, while committing to the highest occupational safety standards, and full transparency in dealings.'}
              </p>
              <ul className="space-y-4 relative z-10">
                {[
                  isAr ? 'الدقة العالية في التنفيذ' : 'High precision in execution',
                  isAr ? 'الالتزام التام بالجودة والأمان' : 'Strict commitment to quality and safety',
                  isAr ? 'بناء شراكات طويلة الأمد مع العملاء' : 'Building long-term partnerships with clients'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={24} />
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
