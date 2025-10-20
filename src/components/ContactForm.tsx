import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail } from "lucide-react";
import { z } from "zod";
const contactSchema = z.object({
  name: z.string().trim().min(2, {
    message: "الاسم يجب أن يكون حرفين على الأقل"
  }).max(100),
  phone: z.string().trim().min(10, {
    message: "رقم الهاتف غير صحيح"
  }).max(20),
  amount: z.string().trim().min(1, {
    message: "يرجى إدخال المبلغ"
  }).max(20)
});
const ContactForm = () => {
  const {
    toast
  } = useToast();
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
        description: "سنتواصل معك في أقرب وقت ممكن"
      });
      setFormData({
        name: "",
        phone: "",
        amount: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
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
        const newErrors = {
          ...prev
        };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };
  return <section id="contact" className="py-12 md:py-24 bg-muted/30" dir="rtl">
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
          <div className="bg-card p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in lg:order-2">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">أرسل لنا رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-right block mb-2">
                  الاسم الكامل *
                </Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} className={`text-right ${errors.name ? 'border-destructive' : ''}`} placeholder="أدخل اسمك الكامل" disabled={isSubmitting} />
                {errors.name && <p className="text-destructive text-sm mt-1 text-right">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="phone" className="text-right block mb-2">
                  رقم الهاتف *
                </Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={`text-right ${errors.phone ? 'border-destructive' : ''}`} placeholder="+966 XX XXX XXXX" disabled={isSubmitting} />
                {errors.phone && <p className="text-destructive text-sm mt-1 text-right">{errors.phone}</p>}
              </div>

              <div>
                <Label htmlFor="amount" className="text-right block mb-2">
                  المبلغ الذي تريد البدء به *
                </Label>
                <Input id="amount" name="amount" type="text" value={formData.amount} onChange={handleChange} className={`text-right ${errors.amount ? 'border-destructive' : ''}`} placeholder="مثال: 250$" disabled={isSubmitting} />
                {errors.amount && <p className="text-destructive text-sm mt-1 text-right">{errors.amount}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full hover:scale-105 transition-transform duration-300" disabled={isSubmitting}>
                {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
              </Button>
            </form>
          </div>

          
        </div>
      </div>
    </section>;
};
export default ContactForm;