import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  subject: z.string().min(5, { message: 'Subject is required' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactUs() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-32 pb-20 bg-primary text-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif"
          >
            {isAr ? 'اتصل بنا' : 'Contact Us'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-surface/80 max-w-2xl mx-auto mb-6"
          >
            {isAr 
              ? 'نحن هنا للإجابة على استفساراتك وتقديم أفضل الحلول الهندسية لمشروعك.' 
              : 'We are here to answer your inquiries and provide the best engineering solutions for your project.'}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-1 bg-accent mx-auto"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: isAr ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/3"
            >
              <h2 className="text-3xl font-bold text-primary mb-8 font-serif">
                {isAr ? 'معلومات التواصل' : 'Contact Information'}
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{isAr ? 'العنوان' : 'Address'}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {isAr ? 'طريق الملك فهد، الرياض، المملكة العربية السعودية' : 'King Fahd Road, Riyadh, Saudi Arabia'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{isAr ? 'الهاتف' : 'Phone'}</h3>
                    <p className="text-text-secondary leading-relaxed" dir="ltr">+966 50 000 0000</p>
                    <p className="text-text-secondary leading-relaxed" dir="ltr">+966 11 000 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{isAr ? 'البريد الإلكتروني' : 'Email'}</h3>
                    <p className="text-text-secondary leading-relaxed">info@3dengineering.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-accent">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{isAr ? 'ساعات العمل' : 'Business Hours'}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {isAr ? 'الأحد - الخميس: 8 صباحاً - 5 مساءً' : 'Sunday - Thursday: 8 AM - 5 PM'}
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      {isAr ? 'الجمعة - السبت: مغلق' : 'Friday - Saturday: Closed'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: isAr ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-2/3 bg-surface p-8 md:p-12 rounded-2xl shadow-lg border-t-4 border-accent"
            >
              <h2 className="text-3xl font-bold text-primary mb-8 font-serif">
                {isAr ? 'أرسل لنا رسالة' : 'Send us a message'}
              </h2>
              
              {isSuccess && (
                <div className="mb-8 p-4 bg-success/10 border border-success/30 text-success rounded-md font-semibold text-center">
                  {isAr ? 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً!' : 'Your message has been sent successfully. We will contact you soon!'}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      {isAr ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <input 
                      {...register('name')}
                      className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-error' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-accent bg-surface`}
                      placeholder={isAr ? 'الاسم الكامل' : 'Full Name'}
                    />
                    {errors.name && <p className="text-error text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      {isAr ? 'رقم الهاتف' : 'Phone Number'}
                    </label>
                    <input 
                      {...register('phone')}
                      className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-error' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-accent bg-surface`}
                      placeholder={isAr ? 'رقم الهاتف' : 'Phone Number'}
                    />
                    {errors.phone && <p className="text-error text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input 
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-error' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-accent bg-surface`}
                    placeholder="email@example.com"
                  />
                  {errors.email && <p className="text-error text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    {isAr ? 'الموضوع' : 'Subject'}
                  </label>
                  <input 
                    {...register('subject')}
                    className={`w-full px-4 py-3 rounded-md border ${errors.subject ? 'border-error' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-accent bg-surface`}
                    placeholder={isAr ? 'موضوع الرسالة' : 'Message Subject'}
                  />
                  {errors.subject && <p className="text-error text-sm mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    {isAr ? 'الرسالة' : 'Message'}
                  </label>
                  <textarea 
                    {...register('message')}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-error' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-accent bg-surface resize-none`}
                    placeholder={isAr ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                  />
                  {errors.message && <p className="text-error text-sm mt-1">{errors.message.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full md:w-auto"
                  isLoading={isSubmitting}
                >
                  <span className="flex items-center gap-2">
                    <span>{isAr ? 'إرسال الرسالة' : 'Send Message'}</span>
                    <Send size={18} className={isAr ? 'rotate-180' : ''} />
                  </span>
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-section-bg">
          <div className="text-center text-text-secondary">
            <MapPin size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-lg font-semibold">{isAr ? 'خريطة جوجل (تتطلب مفتاح API)' : 'Google Maps (Requires API Key)'}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
