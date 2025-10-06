import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "الاسم يجب أن يكون حرفين على الأقل" }).max(100),
  phone: z.string().trim().min(10, { message: "رقم الهاتف غير صحيح" }).max(20),
  amount: z.string().trim().min(1, { message: "يرجى إدخال المبلغ" }).max(20)
});

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    amount: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "تم إرسال الطلب بنجاح!",
        description: "سنتواصل معك في أقرب وقت ممكن",
      });
      
      setFormData({ name: "", phone: "", amount: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "خطأ في النموذج",
          description: "يرجى التحقق من البيانات المدخلة",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errors[e.target.name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-semibold text-base md:text-lg mb-3 md:mb-4 block">اتصل بنا</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            نحن هنا لمساعدتك
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            لديك أسئلة؟ تواصل معنا وسنجيب على جميع استفساراتك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            <div className="bg-card p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">معلومات الاتصال</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground mb-1 text-sm md:text-base">الهاتف</div>
                    <a href="tel:+447700164196" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors" dir="ltr">
                      +44 77 0016 4196
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground mb-1 text-sm md:text-base">البريد الإلكتروني</div>
                    <a href="mailto:support@axitrade.com" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                      support@axitrade.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground mb-1 text-sm md:text-base">العنوان</div>
                    <p className="text-sm md:text-base text-muted-foreground">
                      لندن، المملكة المتحدة
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-glow p-6 md:p-8 rounded-2xl md:rounded-3xl text-primary-foreground">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">هل أنت مستعد للبدء؟</h3>
              <p className="text-sm md:text-base mb-4 md:mb-6 opacity-90">
                انضم إلى آلاف المستثمرين الناجحين واحصل على عوائد مضمونة
              </p>
              <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">10,000+</div>
              <div className="text-sm md:text-base opacity-90">عميل راضٍ في جميع أنحاء العالم</div>
            </div>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">أرسل لنا رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-right block mb-2">
                  الاسم الكامل *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`text-right ${errors.name ? 'border-destructive' : ''}`}
                  placeholder="أدخل اسمك الكامل"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1 text-right">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-right block mb-2">
                  رقم الهاتف *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`text-right ${errors.phone ? 'border-destructive' : ''}`}
                  placeholder="+966 XX XXX XXXX"
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1 text-right">{errors.phone}</p>
                )}
              </div>

              <div>
                <Label htmlFor="amount" className="text-right block mb-2">
                  С какой суммы бы хотел начать *
                </Label>
                <Input
                  id="amount"
                  name="amount"
                  type="text"
                  value={formData.amount}
                  onChange={handleChange}
                  className={`text-right ${errors.amount ? 'border-destructive' : ''}`}
                  placeholder="مثال: 1000$"
                  disabled={isSubmitting}
                />
                {errors.amount && (
                  <p className="text-destructive text-sm mt-1 text-right">{errors.amount}</p>
                )}
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
