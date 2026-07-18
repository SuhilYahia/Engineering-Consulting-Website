import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  ar: {
    translation: {
      "home": "الرئيسية",
      "about": "عن الشركة",
      "services": "خدماتنا",
      "projects": "المشاريع",
      "contact": "اتصل بنا",
      "request_consultation": "طلب استشارة",
      "hero_title": "نصمم المستقبل بأعلى معايير الهندسة",
      "hero_subtitle": "ثلاثي الأبعاد للاستشارات الهندسية - خبرة تمتد لسنوات في تقديم حلول هندسية متكاملة بلمسة احترافية."
    }
  },
  en: {
    translation: {
      "home": "Home",
      "about": "About Us",
      "services": "Services",
      "projects": "Projects",
      "contact": "Contact Us",
      "request_consultation": "Request Consultation",
      "hero_title": "Designing the Future with the Highest Engineering Standards",
      "hero_subtitle": "Three Dimensions Engineering Consultancy - Years of experience in providing integrated engineering solutions with a professional touch."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
