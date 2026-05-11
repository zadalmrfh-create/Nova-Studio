import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Send, Search, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'أرسل طلبك',
    description: 'اختر الخدمة اللي تحتاجها واملأ النموذج بكل التفاصيل المطلوبة',
    icon: Send,
    color: '#d4af37',
  },
  {
    number: '02',
    title: 'نراجع التفاصيل',
    description: 'فريقنا يراجع طلبك ويتواصل معك لتأكيد كل التفاصيل والتوقعات',
    icon: Search,
    color: '#60a5fa',
  },
  {
    number: '03',
    title: 'نُسلّم الخدمة',
    description: 'ننجز عملك بأعلى جودة ونسلمه في الوقت المحدد مع ضمان الرضا',
    icon: Rocket,
    color: '#34d399',
  },
];

export default function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-sm font-medium mb-4">
            خطوات العمل
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            كيف <span className="gold-text">نعمل؟</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            عملية بسيطة وسلسة للحصول على خدمتك بأسرع وقت
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="relative glass rounded-3xl p-8 text-center group hover:bg-[#1e3a5f]/50 transition-colors duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                      style={{ backgroundColor: `${step.color}20`, color: step.color }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-6 mb-6">
                    <div 
                      className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${step.color}15` }}
                    >
                      <step.icon className="w-10 h-10" style={{ color: step.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative Elements */}
                  <div 
                    className="absolute bottom-0 left-0 w-full h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: step.color }}
                  />
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-[#d4af37]/50"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">جاهز تبدأ؟</p>
          <Link
            to="/order"
            className="btn-gold px-8 py-4 rounded-full text-lg inline-block"
          >
            ابدأ مشروعك الآن
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
