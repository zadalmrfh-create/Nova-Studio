import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Zap, Shield, Edit3, Globe } from 'lucide-react';

const features = [
  { icon: Zap, text: 'تسليم سريع' },
  { icon: Shield, text: 'ضمان رضا العميل' },
  { icon: Edit3, text: 'تعديلات مجانية' },
  { icon: Globe, text: 'شغل أونلاين لأي مكان' },
];

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1e3a5f]/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#d4af37]/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#d4af37]/10 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6"
            >
              <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
              <span className="text-sm text-[#d4af37]">متوفرين 24/7</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              <span className="gold-text">Nova Studio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl font-semibold mb-4 text-white/90"
            >
              خدمات أونلاين احترافية بجودة عالية
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              نصمم، نكتب، وننجز لك كل أعمالك أونلاين بسرعة واحترافية. فريق متخصص جاهز لتحويل أفكارك إلى واقع.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Link
                to="/order"
                className="btn-gold px-8 py-4 rounded-full text-lg flex items-center justify-center gap-2 group"
              >
                اطلب الآن
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/201515474939"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-8 py-4 rounded-full text-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل واتساب
              </a>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[#1e3a5f]/30 border border-[#d4af37]/10"
                >
                  <feature.icon className="w-6 h-6 text-[#d4af37]" />
                  <span className="text-xs sm:text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                    alt="Nova Studio Workspace"
                    className="w-full h-auto rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-4 z-20 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">تصميم احترافي</p>
                    <p className="font-bold text-[#d4af37]">+250 مشروع</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 z-20 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">تقييم العملاء</p>
                    <p className="font-bold text-green-400">4.9/5.0</p>
                  </div>
                </div>
              </motion.div>

              {/* QR Code */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -translate-y-1/2 -left-8 lg:-left-16 z-20"
              >
                <div className="qr-container shadow-2xl">
                  <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
                    <rect fill="#0a1628" width="100" height="100"/>
                    <rect fill="#d4af37" x="10" y="10" width="25" height="25"/>
                    <rect fill="#d4af37" x="65" y="10" width="25" height="25"/>
                    <rect fill="#d4af37" x="10" y="65" width="25" height="25"/>
                    <rect fill="#1e3a5f" x="15" y="15" width="15" height="15"/>
                    <rect fill="#1e3a5f" x="70" y="15" width="15" height="15"/>
                    <rect fill="#1e3a5f" x="15" y="70" width="15" height="15"/>
                    <rect fill="#d4af37" x="40" y="10" width="5" height="5"/>
                    <rect fill="#d4af37" x="50" y="10" width="5" height="5"/>
                    <rect fill="#d4af37" x="40" y="20" width="5" height="5"/>
                    <rect fill="#d4af37" x="45" y="25" width="5" height="5"/>
                    <rect fill="#d4af37" x="55" y="20" width="5" height="5"/>
                    <rect fill="#d4af37" x="40" y="40" width="20" height="20"/>
                    <rect fill="#0a1628" x="45" y="45" width="10" height="10"/>
                    <rect fill="#d4af37" x="10" y="40" width="5" height="5"/>
                    <rect fill="#d4af37" x="20" y="45" width="5" height="5"/>
                    <rect fill="#d4af37" x="25" y="55" width="5" height="5"/>
                    <rect fill="#d4af37" x="65" y="40" width="5" height="5"/>
                    <rect fill="#d4af37" x="75" y="50" width="5" height="5"/>
                    <rect fill="#d4af37" x="85" y="45" width="5" height="5"/>
                    <rect fill="#d4af37" x="70" y="55" width="5" height="5"/>
                    <rect fill="#d4af37" x="40" y="65" width="5" height="5"/>
                    <rect fill="#d4af37" x="50" y="70" width="5" height="5"/>
                    <rect fill="#d4af37" x="55" y="75" width="5" height="5"/>
                    <rect fill="#d4af37" x="45" y="85" width="5" height="5"/>
                    <rect fill="#d4af37" x="60" y="65" width="5" height="5"/>
                    <rect fill="#d4af37" x="70" y="70" width="5" height="5"/>
                    <rect fill="#d4af37" x="80" y="75" width="5" height="5"/>
                    <rect fill="#d4af37" x="65" y="85" width="5" height="5"/>
                    <rect fill="#d4af37" x="85" y="85" width="5" height="5"/>
                  </svg>
                  <p className="text-[#0a1628] text-xs text-center mt-1 font-bold">Scan Me</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
