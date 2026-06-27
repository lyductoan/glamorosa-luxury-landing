"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="py-32 bg-charcoal text-ivory relative overflow-hidden">
      {/* Subtly patterned background or glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-dark/20 via-charcoal to-charcoal z-0 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif mb-8 text-champagne"
          >
            Cảm Hứng Thiết Kế
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light leading-loose text-ivory/80 mb-12"
          >
            &quot;Lấy cảm hứng từ ánh sáng rực rỡ của những vì sao đêm, Glamorosa không chỉ là một món trang sức, mà là một biểu tượng của sự tỏa sáng từ bên trong. Mỗi chi tiết đều được chạm khắc để tôn vinh sự kiêu hãnh và thanh lịch của người sở hữu.&quot;
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="font-serif italic text-gold tracking-wider">
              — Nghệ nhân CAO Fine Jewelry
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
