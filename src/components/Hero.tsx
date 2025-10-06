import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 bg-gradient-to-br from-primary to-primary-glow" dir="rtl">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-right space-y-6 md:space-y-8 order-2 lg:order-1 animate-fade-in">
            <div className="inline-block bg-background/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full text-primary-foreground border border-background/30 hover:bg-background/30 transition-all duration-300 hover:scale-105">
              <span className="font-semibold text-sm md:text-base">الاستثمارات المتاحة</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              افتح فرصًا جديدة للنمو
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              حلول بسيطة لإنجازات عظيمة. استثمر الآن مع الذكاء الاصطناعي
            </p>
            
            <div className="flex gap-4 justify-end">
              <Button asChild variant="hero" size="lg" className="rounded-full text-base md:text-lg gap-3">
                <a href="#contact">
                  ابدأ الآن
                  <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-3 md:gap-6 pt-6 md:pt-8">
              <div className="text-center p-3 md:p-6 bg-background/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-background/20 hover:bg-background/20 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-2xl md:text-4xl font-bold text-primary-foreground mb-1 md:mb-2">100$</div>
                <div className="text-xs md:text-base text-primary-foreground/80">الحد الأدنى للإيداع</div>
              </div>
              <div className="text-center p-3 md:p-6 bg-background/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-background/20 hover:bg-background/20 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-2xl md:text-4xl font-bold text-primary-foreground mb-1 md:mb-2">100%</div>
                <div className="text-xs md:text-base text-primary-foreground/80">الموثوقية. لا مخاطر</div>
              </div>
              <div className="text-center p-3 md:p-6 bg-background/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-background/20 hover:bg-background/20 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-2xl md:text-4xl font-bold text-primary-foreground mb-1 md:mb-2">24/7</div>
                <div className="text-xs md:text-base text-primary-foreground/80">نعمل باستمرار</div>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 animate-scale-in">
            <div className="absolute inset-0 bg-primary-foreground/10 blur-3xl rounded-full animate-pulse"></div>
            <img 
              src={heroImage} 
              alt="Professional trader" 
              className="relative rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-background p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl hover:scale-110 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl md:text-5xl font-bold text-primary mb-1 md:mb-2">100%</div>
              <div className="text-sm md:text-base text-muted-foreground">النتيجة</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
