"use client";

import { motion } from "framer-motion";

export default function ProductReveal() {
  return (
    <section className="py-24 bg-ivory text-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Tuyệt Tác Glamorosa</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[4/5] bg-champagne/40 relative overflow-hidden group"
          >
            {/* Placeholder for Product Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-charcoal/30 font-serif text-2xl tracking-widest uppercase">Packshot</span>
            </div>
            <div className="absolute inset-0 bg-charcoal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col space-y-8"
          >
            <div className="aspect-square bg-champagne/20 relative overflow-hidden group w-full md:w-3/4 self-end">
               {/* Placeholder for Model Image */}
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-charcoal/30 font-serif text-xl tracking-widest uppercase">On Model</span>
               </div>
            </div>
            
            <div className="max-w-md self-end text-right">
              <h3 className="text-2xl font-serif mb-4">Sự Hài Hòa Hoàn Mỹ</h3>
              <p className="text-charcoal/70 font-light leading-relaxed">
                Thiết kế dây cổ Glamorosa là sự kết hợp tinh tế giữa những đường nét cổ điển và tư duy thẩm mỹ đương đại, ôm trọn những viên đá quý được tuyển chọn khắt khe nhất.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
