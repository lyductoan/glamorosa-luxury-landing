"use client";

import { motion } from "framer-motion";

export default function ValueAsGift() {
  return (
    <section className="py-24 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-square relative overflow-hidden">
              <div className="absolute inset-0 border border-gold/30 m-4 z-10 pointer-events-none" />
              <img 
                src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=2940&auto=format&fit=crop" 
                alt="Luxury Gift Packaging" 
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold tracking-widest uppercase text-sm font-sans mb-4 block">
              Nghệ Thuật Trao Tặng
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
              Món Quà Vượt Thời Gian
            </h2>
            <div className="space-y-6 text-gray-300 font-sans">
              <p>
                Không chỉ là trang sức, Dây Cổ Glamorosa là biểu tượng của tình yêu thương, sự trân trọng và những lời chúc tốt đẹp nhất gửi đến người phụ nữ bạn yêu thương.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gold mr-3 mt-1">✦</span>
                  <span><strong>Hộp Quà Cao Cấp:</strong> Thiết kế độc quyền với chất liệu nhung và da, mang lại trải nghiệm mở quà tinh tế và đẳng cấp.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 mt-1">✦</span>
                  <span><strong>Thiệp Viết Tay:</strong> Gửi gắm những tâm tư chân thành qua dịch vụ viết thiệp tay nghệ thuật.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 mt-1">✦</span>
                  <span><strong>Giao Hàng Bí Mật:</strong> Dịch vụ giao hàng tận tay bất ngờ, mang lại niềm vui vỡ òa cho người nhận.</span>
                </li>
              </ul>
              
              <div className="pt-8">
                <button className="px-8 py-4 bg-gold text-charcoal font-sans uppercase tracking-widest text-sm hover:bg-gold-dark transition-colors">
                  Khám Phá Dịch Vụ Quà Tặng
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
