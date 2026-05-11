import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  FileText, 
  Mic, 
  Briefcase, 
  Bot, 
  ArrowLeft 
} from 'lucide-react';

const services = [
  {
    id: 'design',
    category: 'التصميم',
    icon: Palette,
    items: ['تصميم بوستات', 'تصميم أغلفة فيسبوك ويوتيوب', 'تصميم شهادات ودعوات'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'writing',
    category: 'الكتابة والتنسيق',
    icon: FileText,
    items: ['كتابة أبحاث', 'تنسيق ملفات', 'تحويل Word إلى PDF', 'تجهيز ملفات للمذاكرة'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'audio',
    category: 'الصوتيات',
    icon: Mic,
    items: ['تفريغ صوتي', 'تحويل الصوت إلى كتابة'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'professional',
    category: 'الخدمات المهنية',
    icon: Briefcase,
    items: ['تصميم CV احترافي', 'كتابة محتوى', 'أفكار للصفحات'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'ai',
    category: 'الذكاء الاصطناعي',
    icon: Bot,
    items: ['صور بالذكاء الاصطناعي', 'تحسين الصور', 'أفكار وتصميمات AI'],
    color: 'from-[#d4af37] to-yellow-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4af37]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1e3a5f]/30 rounded-full blur-3xl" />
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
            خدماتنا
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            كل ما تحتاجه في <span className="gold-text">مكان واحد</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات الاحترافية لتلبية جميع احتياجاتك
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.category}
              variants={itemVariants}
              className="service-card group relative cursor-pointer"
            >
              <Link to={`/service/${service.id}`} className="block h-full">
                <div className="relative h-full glass rounded-3xl p-6 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-[#d4af37] transition-colors">
                    {service.category}
                  </h3>

                  <ul className="space-y-3 mb-6">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <span className="w-full py-3 rounded-xl border border-[#d4af37]/30 text-[#d4af37] font-medium flex items-center justify-center gap-2 group-hover:bg-[#d4af37] group-hover:text-[#0a1628] transition-all duration-300">
                    اضغط للطلب
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </span>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden">
                    <div className={`absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br ${service.color} opacity-20 rotate-45`} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Special Card - All Services */}
          <motion.div
            variants={itemVariants}
            className="service-card group relative md:col-span-2 lg:col-span-1"
          >
            <div className="relative h-full rounded-3xl p-6 overflow-hidden bg-gradient-to-br from-[#d4af37] to-[#b8860b]">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyem0tNiA2aC00djJoNHYtMnptMC02di00aC00djRoNHptLTYgNmgtNHYyaDR2LTJ6bTAtNnYtNGgtNHY0aDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
              
              <div className="relative h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#0a1628] mb-2">
                    خدمة مخصصة؟
                  </h3>
                  <p className="text-[#0a1628]/80 mb-6">
                    عندك مشروع خاص؟ تواصل معنا ونفذولك اللي تبيه بالضبط
                  </p>
                </div>

                <Link
                  to="/order"
                  className="w-full py-4 rounded-xl bg-[#0a1628] text-[#d4af37] font-bold flex items-center justify-center gap-2 hover:bg-[#0a1628]/90 transition-colors text-center"
                >
                  تواصل معنا
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
