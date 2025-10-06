import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "أحمد محمد",
      role: "مستثمر",
      rating: 5,
      text: "منصة رائعة وموثوقة. حققت أرباحًا ممتازة في الأشهر القليلة الماضية. الدعم ممتاز والتنفيذ سريع جدًا.",
      avatar: "AM"
    },
    {
      name: "فاطمة علي",
      role: "تاجرة محترفة",
      rating: 5,
      text: "أفضل منصة استخدمتها. واجهة سهلة الاستخدام وخدمة عملاء متميزة. أنصح بها بشدة للمبتدئين والمحترفين.",
      avatar: "FA"
    },
    {
      name: "خالد حسن",
      role: "رجل أعمال",
      rating: 5,
      text: "استثمرت مبلغًا كبيرًا وكانت النتائج أفضل من المتوقع. الشفافية والأمان على أعلى مستوى. شكرًا للفريق الرائع.",
      avatar: "KH"
    }
  ];

  return (
    <section id="reviews" className="py-12 md:py-24 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-semibold text-base md:text-lg mb-3 md:mb-4 block">التقييمات</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            آلاف العملاء السعداء في جميع أنحاء العالم
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-card p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg md:text-xl flex-shrink-0">
                  {review.avatar}
                </div>
                <div className="text-right flex-1">
                  <div className="font-bold text-foreground text-base md:text-lg">{review.name}</div>
                  <div className="text-muted-foreground text-xs md:text-sm">{review.role}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-3 md:mb-4 justify-end">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-right">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 md:gap-8 bg-primary/10 px-8 md:px-12 py-4 md:py-6 rounded-2xl md:rounded-3xl border border-primary/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">10,000+</div>
              <div className="text-sm md:text-base text-muted-foreground">عميل سعيد</div>
            </div>
            <div className="w-12 h-px sm:w-px sm:h-12 bg-border"></div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">4.9/5</div>
              <div className="text-sm md:text-base text-muted-foreground">التقييم</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
