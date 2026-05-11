import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, ArrowRight, CheckCircle, Loader2, Sparkles } from 'lucide-react';

const serviceTypes = [
  'تصميم بوستات',
  'تصميم أغلفة فيسبوك ويوتيوب',
  'تصميم شهادات ودعوات',
  'كتابة أبحاث',
  'تنسيق ملفات',
  'تحويل Word إلى PDF',
  'تجهيز ملفات للمذاكرة',
  'تفريغ صوتي',
  'تحويل الصوت إلى كتابة',
  'تصميم CV احترافي',
  'كتابة محتوى',
  'أفكار للصفحات',
  'صور بالذكاء الاصطناعي',
  'تحسين الصور',
  'أفكار وتصميمات AI',
  'خدمة أخرى',
];

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare WhatsApp message
    const message = `*طلب جديد من Nova Studio* 🎨

*الاسم:* ${formData.name}
*رقم الواتساب:* ${formData.phone}
*نوع الخدمة:* ${formData.service}

*وصف الطلب:*
${formData.description}

---
تم الإرسال من موقع Nova Studio`;

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Open WhatsApp with the message
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/201515474939?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0a1628] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1e3a5f]/50 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#0a1628]" />
            </div>
            <span className="text-xl font-bold gold-text">Nova Studio</span>
          </a>
          <a
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
          >
            <ArrowRight className="w-4 h-4" />
            العودة للرئيسية
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-sm font-medium mb-4">
              اطلب خدمتك الآن
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              املأ بيانات <span className="gold-text">طلبك</span>
            </h1>
            <p className="text-gray-400">
              سيتم توجيهك تلقائياً لواتساب مع تفاصيل طلبك
            </p>
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
                <h3 className="text-2xl font-bold mb-4">
                  تم إرسال طلبك بنجاح!
                </h3>
                <p className="text-gray-400 mb-6">
                  تم فتح واتساب مع تفاصيل طلبك. يمكنك متابعة التواصل هناك.
                </p>
                <a
                  href="/"
                  className="btn-gold px-8 py-3 rounded-full inline-block"
                >
                  العودة للرئيسية
                </a>
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
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="form-input w-full px-4 py-3 rounded-xl"
                    placeholder="مثال: 01515474939"
                    dir="ltr"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    نوع الخدمة <span className="text-[#d4af37]">*</span>
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="form-input w-full px-4 py-3 rounded-xl appearance-none cursor-pointer"
                  >
                    <option value="">اختر الخدمة المطلوبة</option>
                    {serviceTypes.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    وصف الطلب <span className="text-[#d4af37]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="form-input w-full px-4 py-3 rounded-xl resize-none"
                    placeholder="اشرح بالتفصيل ما تحتاجه..."
                  />
                </div>

                {/* Info Note */}
                <div className="p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30">
                  <p className="text-sm text-gray-300">
                    <span className="text-[#d4af37] font-bold">ملاحظة:</span> سيتم
                    توجيهك إلى واتساب مع رسالة جاهزة تحتوي على بياناتك. يمكنك
                    إرفاق الملفات والصور هناك مباشرة.
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

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>استجابة سريعة خلال 24 ساعة</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span>تشفير مجاني على التعديلات</span>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
