import { TrendingUp, Shield, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "البساطة",
      description: "واجهة بسيطة وسهلة الاستخدام للتداول المريح"
    },
    {
      icon: Shield,
      title: "الموثوقية",
      description: "منصة مستقرة مع حماية مضمونة لبياناتك"
    },
    {
      icon: Clock,
      title: "السرعة",
      description: "تنفيذ فوري للصفقات ووصول سريع إلى الأسواق في أي وقت"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg mb-4 block">من نحن</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            شريكك الموثوق في عالم التداول
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نوفر كل ما تحتاجه للتداول الفعال: تكنولوجيا متقدمة، معالجة سريعة للطلبات، وأقصى حماية للبيانات
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-primary/10 px-12 py-6 rounded-3xl border border-primary/20">
            <div className="text-5xl font-bold text-primary mb-2">+30</div>
            <div className="text-muted-foreground text-lg">عامًا من الابتكار والثقة</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
