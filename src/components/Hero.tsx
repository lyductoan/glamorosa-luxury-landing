"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-ivory">
      {/* Background with slight parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0 bg-champagne/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.p 
          className="text-gold tracking-[0.2em] text-sm md:text-base uppercase mb-6 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          CAO Fine Jewelry
        </motion.p>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-charcoal mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          GLAMOROSA
        </motion.h1>
        
        <motion.p 
          className="text-charcoal/70 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Vẻ đẹp kiêu sa, quyền phái và tinh tế. Một kiệt tác trang sức tôn vinh phong thái của người phụ nữ hiện đại.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button className="px-8 py-4 bg-charcoal text-ivory hover:bg-charcoal/90 transition-colors duration-300 font-sans tracking-wide">
            Khám Phá Ngay
          </button>
          <button className="px-8 py-4 border border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-charcoal/5 transition-all duration-300 font-sans tracking-wide">
            Đặt Lịch Tư Vấn
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-charcoal/50 mb-2">Cuộn để khám phá</span>
        <motion.div 
          className="w-[1px] h-12 bg-charcoal/30 overflow-hidden relative"
        >
          <motion.div
            className="absolute top-0 left-0 w-full bg-charcoal"
            animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
