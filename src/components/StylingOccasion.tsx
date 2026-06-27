"use client";

import { motion } from "framer-motion";

const styles = [
  {
    title: "Thanh Lịch Chốn Công Sở",
    description: "Điểm nhấn tinh tế, tôn lên phong thái tự tin và chuyên nghiệp.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2938&auto=format&fit=crop"
  },
  {
    title: "Quyến Rũ Dạ Tiệc",
    description: "Thu hút mọi ánh nhìn, tỏa sáng lộng lẫy trong những sự kiện quan trọng.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2938&auto=format&fit=crop"
  },
  {
    title: "Dạo Phố Cuối Tuần",
    description: "Dễ dàng kết hợp cùng trang phục thường ngày, mang lại vẻ ngoài năng động nhưng vẫn sang trọng.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2938&auto=format&fit=crop"
  }
];

export default function StylingOccasion() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold tracking-widest uppercase text-sm font-sans mb-4 block">
            Phối Đồ Đa Phong Cách
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-6">
            Dấu Ấn Của Riêng Bạn
          </h2>
          <p className="text-gray-600 font-sans">
            Thiết kế kinh điển vượt thời gian của Dây Cổ Glamorosa dễ dàng đồng hành cùng bạn trong mọi khoảnh khắc, từ những ngày thường nhật đến những sự kiện lộng lẫy nhất.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${style.image})` }}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-2 group-hover:text-gold transition-colors">
                {style.title}
              </h3>
              <p className="text-gray-600 font-sans text-sm">
                {style.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
