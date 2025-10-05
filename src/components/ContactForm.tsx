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
  email: z.string().trim().email({ message: "البريد الإلكتروني غير صحيح" }).max(255),
  phone: z.string().trim().min(10, { message: "رقم الهاتف غير صحيح" }).max(20),
  message: z.string().trim().min(10, { message: "الرسالة يجب أن تكون 10 أحرف على الأقل" }).max(1000)
});

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
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
        title: "تم إرسال الرسالة بنجاح!",
        description: "سنتواصل معك في أقرب وقت ممكن",
      });
      
      setFormData({ name: "", email: "", phone: "", message: "" });
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
    <section id="contact" className="py-24 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg mb-4 block">اتصل بنا</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            نحن هنا لمساعدتك
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            لديك أسئلة؟ تواصل معنا وسنجيب على جميع استفساراتك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-3xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-8">معلومات الاتصال</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground mb-1">الهاتف</div>
                    <a href="tel:+447700164196" className="text-muted-foreground hover:text-primary transition-colors" dir="ltr">
                      +44 77 0016 4196
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground mb-1">البريد الإلكتروني</div>
                    <a href="mailto:support@axitrade.com" className="text-muted-foreground hover:text-primary transition-colors">
                      support@axitrade.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground mb-1">العنوان</div>
                    <p className="text-muted-foreground">
                      لندن، المملكة المتحدة
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-glow p-8 rounded-3xl text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">هل أنت مستعد للبدء؟</h3>
              <p className="mb-6 opacity-90">
                انضم إلى آلاف المستثمرين الناجحين واحصل على عوائد مضمونة
              </p>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="opacity-90">عميل راضٍ في جميع أنحاء العالم</div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl border border-border shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-8">أرسل لنا رسالة</h3>
            
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
                <Label htmlFor="email" className="text-right block mb-2">
                  البريد الإلكتروني *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`text-right ${errors.email ? 'border-destructive' : ''}`}
                  placeholder="example@email.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1 text-right">{errors.email}</p>
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
                <Label htmlFor="message" className="text-right block mb-2">
                  رسالتك *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`min-h-32 text-right ${errors.message ? 'border-destructive' : ''}`}
                  placeholder="اكتب رسالتك هنا..."
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1 text-right">{errors.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
