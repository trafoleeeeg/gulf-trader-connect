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
    <section id="reviews" className="py-24 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg mb-4 block">التقييمات</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            آلاف العملاء السعداء في جميع أنحاء العالم
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-3xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  {review.avatar}
                </div>
                <div className="text-right flex-1">
                  <div className="font-bold text-foreground text-lg">{review.name}</div>
                  <div className="text-muted-foreground text-sm">{review.role}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-4 justify-end">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed text-right">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-primary/10 px-12 py-6 rounded-3xl border border-primary/20">
            <div>
              <div className="text-4xl font-bold text-primary mb-1">10,000+</div>
              <div className="text-muted-foreground">عميل سعيد</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-4xl font-bold text-primary mb-1">4.9/5</div>
              <div className="text-muted-foreground">التقييم</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
