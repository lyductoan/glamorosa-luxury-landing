"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Kim cương của Glamorosa có giấy chứng nhận không?",
    answer: "Có. Tất cả kim cương từ 3.6 ly trở lên tại Glamorosa đều đi kèm Giấy chứng nhận kiểm định quốc tế GIA. Với kim cương tấm, chúng tôi cung cấp Giấy chứng nhận chất lượng độc quyền của Glamorosa, cam kết độ sạch từ VS trở lên và nước màu F-G."
  },
  {
    question: "Tôi có thể đặt chế tác theo yêu cầu riêng không?",
    answer: "Hoàn toàn có thể. Đội ngũ thiết kế của chúng tôi luôn sẵn sàng lắng nghe ý tưởng và hiện thực hóa món trang sức mang dấu ấn cá nhân của bạn. Quá trình phác thảo 3D và tinh chỉnh thiết kế sẽ được thực hiện trước khi đưa vào chế tác thủ công."
  },
  {
    question: "Sản phẩm mua rồi có được đổi trả không?",
    answer: "Glamorosa có chính sách thu mua và đổi trả minh bạch. Đối với trang sức kim cương, chúng tôi hỗ trợ thu mua lại với mức giá lên đến 80% và đổi sang sản phẩm mới với mức giá lên đến 90% giá trị hóa đơn ban đầu."
  },
  {
    question: "Bao lâu tôi nên mang trang sức đi vệ sinh, làm mới?",
    answer: "Chúng tôi khuyến khích quý khách mang trang sức đến showroom Glamorosa để vệ sinh siêu âm và kiểm tra chấu giữ kim cương mỗi 6 tháng một lần. Dịch vụ này hoàn toàn miễn phí trọn đời cho mọi sản phẩm mua tại hệ thống."
  },
  {
    question: "Làm sao để biết chính xác kích cỡ vòng cổ phù hợp?",
    answer: "Sợi dây chuyền mặc định của chúng tôi có khoen phụ giúp điều chỉnh độ dài linh hoạt từ 40cm đến 45cm, phù hợp với hầu hết mọi người và nhiều kiểu trang phục. Nếu bạn cần kích thước đặc biệt, hãy liên hệ chuyên viên tư vấn để được hỗ trợ đo cắt theo yêu cầu."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold tracking-widest uppercase text-sm font-sans mb-4 block">
            Câu Hỏi Thường Gặp
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal">
            Những Điều Bạn Cần Biết
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <span className="font-serif text-lg text-charcoal group-hover:text-gold-dark transition-colors pr-8">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gold flex-shrink-0"
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
                <p className="text-gray-600 font-sans pb-6 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
