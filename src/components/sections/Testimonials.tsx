import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Al-Farsi',
      nameAr: 'أحمد الفارسي',
      role: 'CEO, Al-Riyadh Real Estate',
      roleAr: 'الرئيس التنفيذي، شركة الرياض العقارية',
      content: 'Working with Three Dimensions was a seamless experience. Their attention to detail and commitment to structural integrity gave us immense confidence in our high-rise project.',
      contentAr: 'كان العمل مع شركة ثلاثي الأبعاد تجربة سلسة ومثمرة. اهتمامهم بالتفاصيل والتزامهم بالسلامة الإنشائية منحنا ثقة كبيرة في مشروعنا.'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      nameAr: 'سارة جونسون',
      role: 'Project Director, Global Tech',
      roleAr: 'مديرة المشاريع، شركة جلوبال تك',
      content: 'They delivered the architectural designs ahead of schedule without compromising on the aesthetic vision we wanted. Highly professional team.',
      contentAr: 'لقد سلموا التصاميم المعمارية قبل الموعد المحدد دون المساومة على الرؤية الجمالية التي أردناها. فريق احترافي للغاية.'
    },
    {
      id: 3,
      name: 'Khalid Abdullah',
      nameAr: 'خالد عبدالله',
      role: 'Private Investor',
      roleAr: 'مستثمر خاص',
      content: 'The engineering supervision they provided saved us countless hours and significantly reduced material waste. I highly recommend their consultancy services.',
      contentAr: 'لقد وفر الإشراف الهندسي الذي قدموه الكثير من الوقت والجهد وقلل بشكل كبير من الهدر في المواد. أوصي بشدة بخدماتهم الاستشارية.'
    }
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary mb-6 font-serif"
          >
            {isAr ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-accent mx-auto"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            dir={isAr ? 'rtl' : 'ltr'}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-surface rounded-2xl p-8 md:p-12 shadow-lg border-t-4 border-accent text-center my-4 mx-2">
                  <Quote size={48} className="text-accent/30 mx-auto mb-6" />
                  <p className="text-xl md:text-2xl text-primary font-medium italic leading-relaxed mb-8">
                    "{isAr ? testimonial.contentAr : testimonial.content}"
                  </p>
                  <div>
                    <h4 className="text-lg font-bold text-primary">{isAr ? testimonial.nameAr : testimonial.name}</h4>
                    <span className="text-text-secondary text-sm">{isAr ? testimonial.roleAr : testimonial.role}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
