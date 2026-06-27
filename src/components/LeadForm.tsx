"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
  const [orderCode, setOrderCode] = useState<string>("");
  const [showQR, setShowQR] = useState(false);
  const [countdown, setCountdown] = useState(30);

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzO7X9pDTcBz5j0qWVY0N8UDmX_6sNyQk8rJWJk-af8Ca3IW-fbholQFavcjoSB07WA/exec";
  const ZALO_GROUP = "https://zalo.me/g/sdczb5ehiqm9tyimg1th";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("loading");

    // Sinh mã đơn hàng "AI" + 10 số ngẫu nhiên
    let randomDigits = "";
    for (let i = 0; i < 10; i++) {
      randomDigits += Math.floor(Math.random() * 10).toString();
    }
    const newOrderCode = "AI" + randomDigits;

    const formParams = new URLSearchParams();
    formParams.append("name", formData.name);
    formParams.append("email", formData.email);
    formParams.append("phone", formData.phone);
    formParams.append("channel", formData.source);
    formParams.append("purpose", formData.interest);
    formParams.append("note", formData.note);
    formParams.append("orderCode", newOrderCode);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formParams,
      });

      setOrderCode(newOrderCode);
      setStatus("success");
      setShowQR(true);
      setCountdown(30);
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

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showQR && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [showQR, countdown]);

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

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-charcoal border border-gold/30 p-8 max-w-md w-full relative"
            >
              <button 
                onClick={() => setShowQR(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="text-center">
                <h3 className="text-2xl font-serif text-gold mb-2">Quét Mã Thanh Toán</h3>
                <p className="text-gray-300 font-sans text-sm mb-6">
                  Vui lòng quét mã QR bên dưới để thanh toán <strong className="text-white">19.000đ</strong> xác nhận lịch hẹn riêng tư.
                </p>

                <div className="bg-white p-4 rounded-xl inline-block mb-6 relative shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={`https://vietqr.app/img?bank=BIDV&acc=962476666688888&amount=19000&addInfo=${orderCode}&template=compact&showinfo=true&holder=NGUYEN%20PHUOC%20VINH%20HUNG`} 
                    alt="VietQR Payment"
                    className="w-64 h-auto"
                  />
                </div>

                <div className="space-y-4 font-sans text-sm">
                  <div className="bg-white/5 p-4 border border-white/10 text-left rounded">
                    <p className="text-gray-400 mb-1">Mã đơn hàng (Nội dung chuyển khoản):</p>
                    <p className="font-bold text-xl text-white font-mono bg-black/50 p-2 text-center rounded tracking-widest">{orderCode}</p>
                  </div>
                  
                  {countdown > 0 ? (
                    <div className="flex flex-col items-center justify-center space-y-2 pt-2">
                      <div className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-gold">Đang chờ xác thực tự động... ({countdown}s)</p>
                    </div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="pt-2 space-y-3"
                    >
                      <p className="text-gray-300">Nếu bạn đã chuyển khoản, hãy tham gia nhóm Zalo để chuyên viên của chúng tôi hỗ trợ ngay.</p>
                      <a 
                        href={ZALO_GROUP}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors rounded text-center shadow-lg"
                        onClick={() => setShowQR(false)}
                      >
                        Xác nhận đã chuyển khoản
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
