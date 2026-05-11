import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Upload, CheckCircle, Loader2 } from 'lucide-react';

const serviceTypes = [
  'تصميم بوستات',
  'تصميم أغلفة فيسبوك ويوتيوب',
  'تصميم شهادات ودعوات',
  'كتابة أبحاث',
  'تنسيق ملفات',
  'تحويل Word إلى PDF',
  'تفريغ صوتي',
  'تحويل الصوت إلى كتابة',
  'تصميم CV احترافي',
  'كتابة محتوى',
  'صور بالذكاء الاصطناعي',
  'خدمة أخرى',
];

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    description: '',
    file: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', service: '', description: '', file: null });
    }, 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  return (
    <section id="order" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-sm font-medium mb-4">
            اطلب الآن
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            اطلب <span className="gold-text">خدمتك الآن</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            املأ النموذج بالتفاصيل وسنتواصل معك في أقرب وقت
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="glass rounded-3xl p-8 sm:p-12">
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
                <p className="text-gray-400">سنتواصل معك في أقرب وقت عبر الواتساب</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">الاسم</label>
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
                    <label className="block text-sm font-medium mb-2">رقم الواتساب</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input w-full px-4 py-3 rounded-xl"
                      placeholder="05xxxxxxxx"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-medium mb-2">نوع الخدمة</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="form-input w-full px-4 py-3 rounded-xl appearance-none cursor-pointer"
                  >
                    <option value="">اختر الخدمة المطلوبة</option>
                    {serviceTypes.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium mb-2">وصف الطلب</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="form-input w-full px-4 py-3 rounded-xl resize-none"
                    placeholder="اوصف تفاصيل ما تحتاجه في الخدمة..."
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium mb-2">الملفات المرفقة (اختياري)</label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex items-center justify-center gap-3 w-full px-4 py-4 rounded-xl border-2 border-dashed border-[#d4af37]/30 hover:border-[#d4af37]/60 cursor-pointer transition-colors"
                    >
                      <Upload className="w-5 h-5 text-[#d4af37]" />
                      <span className="text-gray-400">
                        {formData.file ? formData.file.name : 'اضغط لرفع الملف أو اسحب وأفلت هنا'}
                      </span>
                    </label>
                  </div>
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
                      جاري إرسال الطلب...
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
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mt-8 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>استجابة سريعة خلال 24 ساعة</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <span>تشفير مجاني على التعديلات</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span>دفع 戮ns بعد استلام العمل</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
