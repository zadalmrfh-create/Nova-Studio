import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'بوست توعيدي',
    category: 'تصميم بوستات',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
    description: 'تصميم بوست توعيدي لصفحة فيسبوك',
  },
  {
    id: 2,
    title: 'CV احترافي',
    category: 'تصميم CV',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80',
    description: 'تصميم سيرة ذاتية احترافية لمتخصص في التقنية',
  },
  {
    id: 3,
    title: 'شهادة تقدير',
    category: 'تصميم شهادات',
    image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?w=600&q=80',
    description: 'شهادة تقدير للمتدربين في دورة تطوير المهارات',
  },
  {
    id: 4,
    title: 'عرض تقديمي',
    category: 'عروض تقديمية',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=600&q=80',
    description: 'تصميم عرض تقديمي لشركة نشئة',
  },
  {
    id: 5,
    title: 'غلاف يوتيوب',
    category: 'تصميم أغلفة',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80',
    description: 'غلاف قناة يوتيوب لمحتوى تقني',
  },
  {
    id: 6,
    title: 'دعوة زفاف',
    category: 'تصميم دعوات',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
    description: 'بطاقة دعوة لحفل زفاف فاخر',
  },
];

const categories = ['الكل', 'تصميم بوستات', 'تصميم CV', 'تصميم شهادات', 'عروض تقديمية', 'تصميم أغلفة', 'تصميم دعوات'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredItems = selectedCategory === 'الكل' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-sm font-medium mb-4">
            أعمالنا
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            معرض <span className="gold-text">أعمالنا</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            تصفح بعض من أعمالنا التي قدمناها لعملائنا
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#d4af37] text-[#0a1628]'
                  : 'bg-[#1e3a5f]/30 text-gray-400 hover:bg-[#d4af37]/20 hover:text-[#d4af37]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#d4af37] text-sm mb-2">{item.category}</span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2">{item.description}</p>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <ExternalLink className="w-5 h-5 text-[#0a1628]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-outline px-8 py-3 rounded-full inline-flex items-center gap-2">
            عرض المزيد
            <ChevronLeft className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#0a1628]/80 flex items-center justify-center hover:bg-[#d4af37] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="aspect-square md:aspect-auto">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-[#d4af37] text-sm mb-2">{selectedItem.category}</span>
                  <h3 className="text-2xl font-bold mb-4">{selectedItem.title}</h3>
                  <p className="text-gray-400 mb-6">{selectedItem.description}</p>
                  <Link
                    to="/order"
                    className="btn-gold py-3 rounded-xl block text-center"
                  >
                    اطلب مثل هذا التصميم
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
