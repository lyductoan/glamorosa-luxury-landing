"use client";

import { motion } from "framer-motion";

export default function Craftsmanship() {
  return (
    <section className="py-24 bg-ivory">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 aspect-video bg-charcoal/10 relative overflow-hidden"
          >
             {/* Placeholder for Macro Video/Image */}
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-charcoal/40 font-serif tracking-widest uppercase">Macro Details</span>
             </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-gold tracking-widest text-sm uppercase mb-4 block font-medium">Nghệ Thuật Chế Tác</span>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">Chế Tác Thủ Công Đỉnh Cao</h2>
            <p className="text-charcoal/70 font-light leading-relaxed mb-8">
              Hơn 100 giờ làm việc tỉ mỉ bởi những nghệ nhân kim hoàn lành nghề nhất. Từ khâu tuyển chọn đá quý nghiêm ngặt đến việc đánh bóng bề mặt kim loại hoàn hảo, mỗi sợi dây cổ Glamorosa là minh chứng cho tiêu chuẩn chất lượng không khoan nhượng của CAO.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2"></div>
                <span className="text-charcoal font-light">Tuyển chọn kim cương tiêu chuẩn VVS, nước F trở lên.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2"></div>
                <span className="text-charcoal font-light">Kỹ thuật micro-setting giúp tối đa hóa độ tán sắc.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2"></div>
                <span className="text-charcoal font-light">Chốt gài độc quyền, an toàn và dễ dàng thao tác.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
