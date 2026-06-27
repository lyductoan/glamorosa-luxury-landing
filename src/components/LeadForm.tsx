"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "Website / Landing Page",
    interest: "Mua để sử dụng",
    note: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzO7X9pDTcBz5j0qWVY0N8UDmX_6sNyQk8rJWJk-af8Ca3IW-fbholQFavcjoSB07WA/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("loading");

    const formParams = new URLSearchParams();
    formParams.append("name", formData.name);
    formParams.append("email", formData.email);
    formParams.append("phone", formData.phone);
    formParams.append("channel", formData.source);
    formParams.append("purpose", formData.interest);
    formParams.append("note", formData.note);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formParams,
      });

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        source: "Website / Landing Page",
        interest: "Mua để sử dụng",
        note: "",
      });
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus("error");
    }
  };

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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-sans text-gray-300 mb-2 uppercase tracking-wider">Họ và Tên *</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-500 py-3 text-white focus:outline-none focus:border-gold transition-colors font-sans"
                  placeholder="Nhập họ tên của bạn"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-sans text-gray-300 mb-2 uppercase tracking-wider">Số Điện Thoại *</label>
                <input 
                  type="tel" 
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-500 py-3 text-white focus:outline-none focus:border-gold transition-colors font-sans"
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-sans text-gray-300 mb-2 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-500 py-3 text-white focus:outline-none focus:border-gold transition-colors font-sans"
                  placeholder="Nhập email (không bắt buộc)"
                />
              </div>
              <div>
                <label htmlFor="source" className="block text-sm font-sans text-gray-300 mb-2 uppercase tracking-wider">Kênh Tư Vấn</label>
                <select 
                  id="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-500 py-3 text-white focus:outline-none focus:border-gold transition-colors font-sans appearance-none"
                >
                  <option value="Website / Landing Page" className="bg-charcoal text-white">Website / Landing Page</option>
                  <option value="Facebook" className="bg-charcoal text-white">Facebook</option>
                  <option value="Zalo" className="bg-charcoal text-white">Zalo</option>
                  <option value="Bạn bè giới thiệu" className="bg-charcoal text-white">Bạn bè giới thiệu</option>
                  <option value="Khác" className="bg-charcoal text-white">Khác</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="interest" className="block text-sm font-sans text-gray-300 mb-2 uppercase tracking-wider">Mối Quan Tâm</label>
              <select 
                id="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-500 py-3 text-white focus:outline-none focus:border-gold transition-colors font-sans appearance-none"
              >
                <option value="Mua để sử dụng" className="bg-charcoal text-white">Mua để sử dụng</option>
                <option value="Mua làm quà tặng" className="bg-charcoal text-white">Mua làm quà tặng</option>
                <option value="Thiết kế theo yêu cầu" className="bg-charcoal text-white">Thiết kế theo yêu cầu</option>
                <option value="Tư vấn khác" className="bg-charcoal text-white">Tư vấn khác</option>
              </select>
            </div>

            <div>
              <label htmlFor="note" className="block text-sm font-sans text-gray-300 mb-2 uppercase tracking-wider">Ghi Chú Thêm</label>
              <textarea 
                id="note" 
                rows={3}
                value={formData.note}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-500 py-3 text-white focus:outline-none focus:border-gold transition-colors font-sans resize-none"
                placeholder="Ví dụ: Cần tư vấn chọn quà sinh nhật cho vợ..."
              />
            </div>

            {status === "success" && (
              <div className="p-4 bg-green-900/50 border border-green-500 text-green-300 font-sans text-sm text-center">
                Gửi thông tin thành công! Chuyên viên của chúng tôi sẽ sớm liên hệ với bạn.
              </div>
            )}
            
            {status === "error" && (
              <div className="p-4 bg-red-900/50 border border-red-500 text-red-300 font-sans text-sm text-center">
                Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.
              </div>
            )}

            <div className="pt-6 text-center">
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="px-12 py-4 bg-gold text-charcoal font-sans uppercase tracking-widest text-sm hover:bg-white transition-colors w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Đang Gửi..." : "Nhận Tư Vấn Ngay"}
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
