"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lê Ngọc Diệp",
    role: "Doanh nhân",
    content: "Thiết kế tinh tế, không hề phô trương nhưng lại vô cùng sang trọng. Tôi rất ấn tượng với dịch vụ chăm sóc khách hàng và cách Glamorosa đóng gói sản phẩm. Một trải nghiệm thực sự đẳng cấp.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop"
  },
  {
    name: "Phạm Phương Anh",
    role: "Giám đốc Sáng tạo",
    content: "Sợi dây chuyền này là mảnh ghép hoàn hảo cho phong cách Minimalist tôi theo đuổi. Chất lượng chế tác hoàn hảo từng chi tiết nhỏ nhất. Chắc chắn tôi sẽ quay lại.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop"
  },
  {
    name: "Hoàng Minh Tuấn",
    role: "Kiến trúc sư",
    content: "Tôi mua tặng vợ nhân kỷ niệm 10 năm ngày cưới. Cô ấy đã rất hạnh phúc. Cảm ơn sự tư vấn tận tình của đội ngũ, đã giúp tôi chọn được món quà ý nghĩa nhất.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop"
  }
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-ivory overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold tracking-widest uppercase text-sm font-sans mb-4 block">
            Khách Hàng Nói Gì
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal">
            Dấu Ấn Hài Lòng
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-500"
            >
              <div className="flex text-gold mb-6 gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" className="stroke-none" />
                ))}
              </div>
              <p className="text-gray-600 font-sans italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover grayscale opacity-80"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-charcoal">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 font-sans uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
