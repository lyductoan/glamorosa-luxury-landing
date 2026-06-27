"use client";

import { motion } from "framer-motion";

export default function LeadForm() {
  return (
    <section className="py-24 bg-charcoal text-white relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-gold tracking-widest uppercase text-sm font-sans mb-4 block">
            Tư Vấn Đặc Quyền
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            Khởi Đầu Hành Trình Của Bạn
          </h2>
          <p className="text-gray-300 font-sans max-w-2xl mx-auto">
            Để lại thông tin, chuyên viên trang sức cấp cao của Glamorosa sẽ liên hệ trực tiếp để tư vấn cá nhân hóa và sắp xếp buổi trải nghiệm riêng tư dành cho bạn.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-md p-8 md:p-12 border border-white/10"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-sans text-gray-300 mb-2 uppercase tracking-wider">Họ và Tên *</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border-b border-gray-500 py-3 text-white focus:outline-none focus:border-gold transition-colors font-sans"
                  placeholder="Nhập họ tên của bạn"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-sans text-gray-300 mb-2 uppercase tracking-wider">Số Điện Thoại *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-transparent border-b border-gray-500 py-3 text-white focus:outline-none focus:border-gold transition-colors font-sans"
                  placeholder="Nhập số điện thoại"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="interest" className="block text-sm font-sans text-gray-300 mb-2 uppercase tracking-wider">Mối Quan Tâm</label>
              <select 
                id="interest" 
                className="w-full bg-transparent border-b border-gray-500 py-3 text-white focus:outline-none focus:border-gold transition-colors font-sans appearance-none"
              >
                <option value="buy" className="bg-charcoal text-white">Mua để sử dụng</option>
                <option value="gift" className="bg-charcoal text-white">Mua làm quà tặng</option>
                <option value="custom" className="bg-charcoal text-white">Thiết kế theo yêu cầu</option>
                <option value="other" className="bg-charcoal text-white">Tư vấn khác</option>
              </select>
            </div>

            <div>
              <label htmlFor="note" className="block text-sm font-sans text-gray-300 mb-2 uppercase tracking-wider">Ghi Chú Thêm</label>
              <textarea 
                id="note" 
                rows={3}
                className="w-full bg-transparent border-b border-gray-500 py-3 text-white focus:outline-none focus:border-gold transition-colors font-sans resize-none"
                placeholder="Ví dụ: Cần tư vấn chọn quà sinh nhật cho vợ..."
              />
            </div>

            <div className="pt-6 text-center">
              <button 
                type="button" 
                className="px-12 py-4 bg-gold text-charcoal font-sans uppercase tracking-widest text-sm hover:bg-white transition-colors w-full md:w-auto"
              >
                Nhận Tư Vấn Ngay
              </button>
              <p className="text-xs text-gray-400 font-sans mt-4">
                Thông tin của bạn được bảo mật tuyệt đối. Chúng tôi sẽ liên hệ lại trong vòng 2 giờ làm việc.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
