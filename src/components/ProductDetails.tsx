"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const details = [
  {
    title: "Chất Liệu & Chế Tác",
    content: "Được chế tác từ Vàng Trắng 18K nguyên khối, kết hợp cùng Kim Cương Tự Nhiên đạt chuẩn VS/G. Mỗi chi tiết đều được đánh bóng thủ công bởi các nghệ nhân kim hoàn lành nghề với hơn 20 năm kinh nghiệm, đảm bảo độ sáng bóng hoàn hảo và bền vững theo thời gian.",
  },
  {
    title: "Thông Số Kỹ Thuật",
    content: "Trọng lượng vàng xấp xỉ 2.5 chỉ. Chiều dài dây tùy chỉnh 40cm - 45cm. Viên kim cương chủ kích thước 4.5 ly, bao quanh bởi 16 viên kim cương tấm 1.2 ly. Khóa cài an toàn hai lớp độc quyền.",
  },
  {
    title: "Chăm Sóc & Bảo Quản",
    content: "Bảo quản trong hộp lót nhung đi kèm khi không sử dụng. Tránh tiếp xúc trực tiếp với hóa chất mạnh, nước hoa. Vệ sinh định kỳ bằng dung dịch chuyên dụng hoặc mang đến cửa hàng để được làm sạch siêu âm miễn phí trọn đời.",
  },
  {
    title: "Bảo Hành & Hậu Mãi",
    content: "Bảo hành rơi rớt kim cương tấm trọn đời. Đánh bóng và làm mới miễn phí trọn đời. Thu đổi lên đến 80% giá trị. Mỗi sản phẩm đều đi kèm Giấy chứng nhận chất lượng quốc tế.",
  },
];

export default function ProductDetails() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-ivory">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">
              Sự Hoàn Hảo Trong Từng Chi Tiết
            </h2>
            <p className="text-gray-600 font-sans mb-8">
              Mỗi thiết kế của Glamorosa không chỉ là một món trang sức, mà là một tuyệt tác nghệ thuật được tạo ra từ sự kết hợp giữa kỹ thuật thủ công tinh xảo và vật liệu thượng hạng nhất.
            </p>
            
            <div className="w-full h-[400px] bg-gray-200 relative overflow-hidden group">
               {/* Placeholder for detail image */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {details.map((detail, index) => (
              <div 
                key={index}
                className="border-b border-gray-200 pb-4"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center py-4 text-left group"
                >
                  <span className="font-serif text-xl text-charcoal group-hover:text-gold-dark transition-colors">
                    {detail.title}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gold"
                  >
                    <Plus size={24} />
                  </motion.span>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 font-sans pb-4 leading-relaxed">
                    {detail.content}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
