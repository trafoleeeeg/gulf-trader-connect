import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between" dir="rtl">
          <div className="flex items-center gap-8">
            <Button asChild variant="default" size="lg" className="rounded-full">
              <a href="#contact">
                استثمر الآن
              </a>
            </Button>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              06 / اتصل بنا
            </a>
            <a href="#start" className="text-foreground hover:text-primary transition-colors">
              05 / كيف تبدأ
            </a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">
              04 / التقييمات
            </a>
            <a href="#calculator" className="text-foreground hover:text-primary transition-colors">
              03 / الحاسبة
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              02 / من نحن
            </a>
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              01 / الرئيسية
            </a>
          </div>
          <div className="text-2xl font-bold">
            <span className="text-primary">AXI</span> TRADE
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
