import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-surface pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div>
            <div className="font-serif text-2xl font-bold mb-6">
              <span className="text-accent">3D</span> Engineering
            </div>
            <p className="text-surface/80 leading-relaxed mb-6">
              {t('hero_subtitle')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="/about" className="text-surface/80 hover:text-white transition-colors">{t('about')}</a></li>
              <li><a href="/services" className="text-surface/80 hover:text-white transition-colors">{t('services')}</a></li>
              <li><a href="/projects" className="text-surface/80 hover:text-white transition-colors">{t('projects')}</a></li>
              <li><a href="/contact" className="text-surface/80 hover:text-white transition-colors">{t('contact')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent">Our Services</h3>
            <ul className="space-y-4">
              <li><a href="/services/architectural" className="text-surface/80 hover:text-white transition-colors">Architectural Design</a></li>
              <li><a href="/services/structural" className="text-surface/80 hover:text-white transition-colors">Structural Design</a></li>
              <li><a href="/services/supervision" className="text-surface/80 hover:text-white transition-colors">Engineering Supervision</a></li>
              <li><a href="/services/management" className="text-surface/80 hover:text-white transition-colors">Project Management</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                <span className="text-surface/80">King Fahd Road, Riyadh, Saudi Arabia</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-accent flex-shrink-0" size={24} />
                <span className="text-surface/80" dir="ltr">+966 50 000 0000</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-accent flex-shrink-0" size={24} />
                <span className="text-surface/80">info@3dengineering.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-surface/60 text-sm">
            © 2026 Three Dimensions Engineering Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-surface/60">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
