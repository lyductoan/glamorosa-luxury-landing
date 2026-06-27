"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, RotateCcw, Gem } from "lucide-react";

const signals = [
  {
    icon: <Gem className="w-8 h-8 stroke-1" />,
    title: "Kim Cương Chuẩn GIA",
    description: "Mỗi viên kim cương từ 3.6 ly đều đi kèm kiểm định GIA quốc tế độc lập, đảm bảo chất lượng tuyệt đối."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 stroke-1" />,
    title: "Bảo Hành Trọn Đời",
    description: "Miễn phí đánh bóng, làm mới và bảo hành rơi rớt kim cương tấm trọn đời."
  },
  {
    icon: <Truck className="w-8 h-8 stroke-1" />,
    title: "Giao Hàng Bảo Hiểm 100%",
    description: "Giao hàng hỏa tốc, bảo mật và được bảo hiểm 100% giá trị trên toàn quốc."
  },
  {
    icon: <RotateCcw className="w-8 h-8 stroke-1" />,
    title: "Thu Đổi Linh Hoạt",
    description: "Chính sách thu mua lên đến 80% và đổi mới lên đến 90% giá trị vô cùng minh bạch."
  }
];

export default function TrustSignals() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-serif text-charcoal mb-4">
            Đẳng Cấp Đi Cùng Sự An Tâm
          </h2>
          <p className="text-gray-600 font-sans">
            Glamorosa cam kết mang đến trải nghiệm mua sắm trang sức xa xỉ hoàn hảo nhất với những chính sách hậu mãi vượt trội.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center flex flex-col items-center group"
            >
              <div className="w-16 h-16 rounded-full bg-ivory flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                {signal.icon}
              </div>
              <h3 className="text-lg font-serif text-charcoal mb-3">
                {signal.title}
              </h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                {signal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
