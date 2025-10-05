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
      description: "قم بإيداع مبلغ بسيط بدءًا من 100$"
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
    <section id="start" className="py-24 bg-secondary/50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg mb-4 block">كيف تبدأ</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ابدأ الاستثمار في 4 خطوات بسيطة
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            عملية بسيطة وسريعة للبدء في تحقيق الأرباح
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card p-8 rounded-3xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                {index + 1}
              </div>
              
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">{step.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="rounded-full text-lg px-12">
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
