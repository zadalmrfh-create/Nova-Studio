import { motion } from 'framer-motion';
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'الرئيسية', href: '#hero' },
  { name: 'الخدمات', href: '#services' },
  { name: 'أعمالنا', href: '#portfolio' },
  { name: 'الأسعار', href: '#pricing' },
  { name: 'آراء العملاء', href: '#testimonials' },
  { name: 'اطلب خدمة', href: '#order' },
];

const services = [
  'تصميم بوستات',
  'تصميم CV',
  'كتابة محتوى',
  'تفريغ صوتي',
  'صور AI',
  'تنسيق ملفات',
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/share/1AoF2H1nHW/', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/malek154746', label: 'Instagram' },
  { icon: Twitter, href: 'https://x.com/@MalekSameh49884', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com/@MalekSameh-u1c', label: 'Youtube' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0a1628] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#0a1628]" />
              </div>
              <span className="text-xl font-bold gold-text">Nova Studio</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              نوفا ستوديو - خدمات أونلاين احترافية بجودة عالية. نصمم، نكتب، وننجز لك كل أعمالك أونلاين.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#d4af37]/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-[#d4af37]" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">واتساب</p>
                  <a href="https://wa.me/201515474939" className="text-sm hover:text-[#d4af37] transition-colors" dir="ltr">
                    01515474939
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">البريد</p>
                  <a href="mailto:maleksameh121@gmail.com" className="text-sm hover:text-[#d4af37] transition-colors">
                    maleksameh121@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">الموقع</p>
                  <span className="text-sm">عالمي - أونلاين</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#d4af37]/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center sm:text-right">
              © 2025 Nova Studio. جميع الحقوق محفوظة.
            </p>

            {/* Tagline */}
            <p className="gold-text font-bold text-lg">شغل احترافي... يفرق.</p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#d4af37]/20 transition-colors group"
              aria-label="العودة للأعلى"
            >
              <ArrowUp className="w-5 h-5 text-[#d4af37] group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
