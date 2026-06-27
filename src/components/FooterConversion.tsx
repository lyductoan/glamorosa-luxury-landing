"use client";

import { MapPin, Phone, Mail } from "lucide-react";

const Facebook = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function FooterConversion() {
  return (
    <footer className="bg-charcoal text-white border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-serif tracking-widest text-gold mb-6">GLAMOROSA</h2>
            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6">
              Biểu tượng của vẻ đẹp vượt thời gian. Trang sức xa xỉ chế tác thủ công, tôn vinh nét quyến rũ độc bản của phái đẹp.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-sans uppercase tracking-widest text-sm mb-6 text-gray-300">Khám Phá</h3>
            <ul className="space-y-4 font-sans text-gray-400 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Về Chúng Tôi</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Bộ Sưu Tập Mới</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Dịch Vụ Quà Tặng</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Chế Tác Theo Yêu Cầu</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Kiến Thức Trang Sức</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans uppercase tracking-widest text-sm mb-6 text-gray-300">Chăm Sóc Khách Hàng</h3>
            <ul className="space-y-4 font-sans text-gray-400 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Chính Sách Bảo Hành</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Chính Sách Thu Đổi</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Hướng Dẫn Bảo Quản</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Hướng Dẫn Đo Size</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Câu Hỏi Thường Gặp</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans uppercase tracking-widest text-sm mb-6 text-gray-300">Liên Hệ</h3>
            <ul className="space-y-4 font-sans text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-gold flex-shrink-0" />
                <span>Tầng 1, Lotte Center, 54 Liễu Giai, Ba Đình, Hà Nội</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <span>Hotline: 1800 1234 (Miễn phí)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <span>Email: concierge@glamorosa.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-gray-500">
          <p>© 2026 Glamorosa Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-white transition-colors">Bảo mật thông tin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
