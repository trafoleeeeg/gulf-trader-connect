import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between" dir="rtl">
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
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

          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-primary">AXI</span> TRADE
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4" dir="rtl">
            <a 
              href="#home" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              01 / الرئيسية
            </a>
            <a 
              href="#about" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              02 / من نحن
            </a>
            <a 
              href="#calculator" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              03 / الحاسبة
            </a>
            <a 
              href="#reviews" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              04 / التقييمات
            </a>
            <a 
              href="#start" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              05 / كيف تبدأ
            </a>
            <a 
              href="#contact" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              06 / اتصل بنا
            </a>
            <Button asChild variant="default" size="lg" className="w-full rounded-full">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                استثمر الآن
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
