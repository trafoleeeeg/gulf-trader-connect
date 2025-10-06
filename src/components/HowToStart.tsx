import { UserPlus, DollarSign, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowToStart = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "التسجيل",
      description: "أنشئ حسابك المجاني في أقل من دقيقة"
    },
    {
      icon: DollarSign,
      title: "الإيداع",
      description: "قم بإيداع مبلغ بسيط بدءًا من 250$"
    },
    {
      icon: Sparkles,
      title: "التفعيل",
      description: "فعّل نظام الذكاء الاصطناعي للتداول"
    },
    {
      icon: TrendingUp,
      title: "الربح",
      description: "راقب أرباحك تنمو يوميًا تلقائيًا"
    }
  ];

  return (
    <section id="start" className="py-12 md:py-24 bg-secondary/50 relative overflow-hidden" dir="rtl">
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-semibold text-base md:text-lg mb-3 md:mb-4 block">كيف تبدأ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            ابدأ الاستثمار في 4 خطوات بسيطة
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            عملية بسيطة وسريعة للبدء في تحقيق الأرباح
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg md:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
              
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:bg-primary/20 transition-all duration-300 group-hover:rotate-6">
                <step.icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 text-center">{step.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground text-center leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="rounded-full text-base md:text-lg px-8 md:px-12 hover:scale-105 transition-transform duration-300">
            <a href="#contact">
              ابدأ الآن مجانًا
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;
