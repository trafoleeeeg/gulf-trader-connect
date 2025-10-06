const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 md:py-12" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <div className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              <span className="text-primary">AXI</span> TRADE
            </div>
            <p className="text-sm md:text-base text-background/80 leading-relaxed">
              شريكك الموثوق في عالم التداول والاستثمار بالذكاء الاصطناعي
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a href="#home" className="text-background/80 hover:text-primary transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-background/80 hover:text-primary transition-colors">
                  الحاسبة
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-background/80 hover:text-primary transition-colors">
                  التقييمات
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">الخدمات</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a href="#start" className="text-background/80 hover:text-primary transition-colors">
                  كيف تبدأ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary transition-colors">
                  اتصل بنا
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  الدعم
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">اتصل بنا</h3>
            <ul className="space-y-2 text-sm md:text-base text-background/80">
              <li dir="ltr" className="text-right">+44 77 0016 4196</li>
              <li>support@axitrade.com</li>
              <li>لندن، المملكة المتحدة</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 md:pt-8 text-center text-background/60">
          <p className="text-sm md:text-base">&copy; 2024 AXI TRADE. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
