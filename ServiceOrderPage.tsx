import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, ArrowRight, CheckCircle, Loader2, Sparkles, Palette, FileText, Mic, Briefcase, Bot } from 'lucide-react';

const serviceCategories: Record<string, { title: string; icon: any; description: string; placeholder: string }> = {
  design: {
    title: 'الخدمات التصميمية',
    icon: Palette,
    description: 'احصل على تصميم احترافي يلبي احتياجاتك',
    placeholder: 'صف لي بالتفصيل ما تحتاجه من تصميم (مقاسات، ألوان، محتوى، إلخ...)',
  },
  writing: {
    title: 'الكتابة والتنسيق',
    icon: FileText,
    description: 'نكتب وننسق لك باحترافية',
    placeholder: 'اشرح لي طبيعة المحتوى المطلوب (نوع الملف، عدد الصفحات، الموضوع...)',
  },
  audio: {
    title: 'الخدمات الصوتية',
    icon: Mic,
    description: 'تفريغ وتحويل صوتي بدقة عالية',
    placeholder: 'صف الملف الصوتي (المدة، اللغة، جودة الصوت، متطلبات خاصة...)',
  },
  professional: {
    title: 'الخدمات المهنية',
    icon: Briefcase,
    description: 'حلول احترافية لعملك',
    placeholder: 'اشرح ما تحتاجه من خدمة مهنية (CV، محتوى، أفكار...)',
  },
  ai: {
    title: 'خدمات الذكاء الاصطناعي',
    icon: Bot,
    description: 'صور وتحسينات بتقنيات AI',
    placeholder: 'صف ما تريد إنشاؤه أو تحسينه بالذكاء الاصطناعي',
  },
};

export default function ServiceOrderPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = serviceId ? serviceCategories[serviceId] : null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">الخدمة غير موجودة</h1>
          <Link to="/" className="btn-gold px-6 py-3 rounded-full">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `*طلب جديد من Nova Studio* 🎨

*نوع الخدمة:* ${service.title}

*الاسم:* ${formData.name}
*رقم الواتساب:* ${formData.phone}

*تفاصيل الطلب:*
${formData.details}

---
تم الإرسال من موقع Nova Studio`;

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/201515474939?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0a1628] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1e3a5f]/50 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#0a1628]" />
            </div>
            <span className="text-xl font-bold gold-text">Nova Studio</span>
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
          >
            <ArrowRight className="w-4 h-4" />
            رجوع
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Service Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center mb-4">
              <ServiceIcon className="w-10 h-10 text-[#0a1628]" />
            </div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-sm font-medium mb-4">
              طلب خدمة
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{service.title}</h1>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">تم إرسال طلبك بنجاح!</h3>
                <p className="text-gray-400 mb-6">
                  تم فتح واتساب مع تفاصيل طلبك. يمكنك متابعة التواصل هناك.
                </p>
                <Link to="/" className="btn-gold px-8 py-3 rounded-full inline-block">
                  العودة للرئيسية
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    الاسم <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input w-full px-4 py-3 rounded-xl"
                    placeholder="اسمك الكامل"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    رقم الواتساب <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input w-full px-4 py-3 rounded-xl"
                    placeholder="مثال: 01515474939"
                    dir="ltr"
                  />
                </div>

                {/* Details */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    تفاصيل الطلب <span className="text-[#d4af37]">*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="form-input w-full px-4 py-3 rounded-xl resize-none"
                    placeholder={service.placeholder}
                  />
                </div>

                {/* Info Note */}
                <div className="p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30">
                  <p className="text-sm text-gray-300">
                    <span className="text-[#d4af37] font-bold">ملاحظة:</span> سيتم توجيهك
                    إلى واتساب مع رسالة جاهزة تحتوي على بياناتك. يمكنك إرفاق الملفات والصور
                    هناك مباشرة.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gold py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      جاري التحضير...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      إرسال الطلب
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
