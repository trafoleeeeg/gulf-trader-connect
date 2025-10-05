import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const Calculator = () => {
  const [investment, setInvestment] = useState(1000);
  const [duration, setDuration] = useState(6);
  
  const monthlyReturn = 0.15; // 15% monthly
  const totalReturn = investment * Math.pow(1 + monthlyReturn, duration);
  const profit = totalReturn - investment;

  return (
    <section id="calculator" className="py-24 bg-secondary/50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg mb-4 block">حاسبة الأرباح</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            احسب أرباحك المحتملة
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف كم يمكنك أن تربح من خلال استثمارك معنا
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-xl border border-border p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <Label htmlFor="investment" className="text-lg mb-4 block text-right">
                  مبلغ الاستثمار (بالدولار)
                </Label>
                <Input
                  id="investment"
                  type="number"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="text-2xl h-14 text-right"
                  min={100}
                />
                <Slider
                  value={[investment]}
                  onValueChange={(value) => setInvestment(value[0])}
                  min={100}
                  max={100000}
                  step={100}
                  className="mt-4"
                />
              </div>

              <div>
                <Label htmlFor="duration" className="text-lg mb-4 block text-right">
                  مدة الاستثمار (بالأشهر)
                </Label>
                <Input
                  id="duration"
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="text-2xl h-14 text-right"
                  min={1}
                  max={24}
                />
                <Slider
                  value={[duration]}
                  onValueChange={(value) => setDuration(value[0])}
                  min={1}
                  max={24}
                  step={1}
                  className="mt-4"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-glow p-8 rounded-2xl text-primary-foreground">
              <div className="space-y-6">
                <div>
                  <div className="text-sm opacity-90 mb-2">استثمارك الأولي</div>
                  <div className="text-3xl font-bold">${investment.toLocaleString()}</div>
                </div>
                
                <div className="h-px bg-primary-foreground/20"></div>
                
                <div>
                  <div className="text-sm opacity-90 mb-2">الأرباح المتوقعة</div>
                  <div className="text-3xl font-bold text-yellow-300">${profit.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                </div>
                
                <div className="h-px bg-primary-foreground/20"></div>
                
                <div>
                  <div className="text-sm opacity-90 mb-2">إجمالي العائد</div>
                  <div className="text-4xl font-bold">${totalReturn.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                </div>

                <div className="pt-6">
                  <Button variant="hero" size="lg" className="w-full rounded-full">
                    ابدأ الاستثمار الآن
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-muted/50 rounded-xl text-center">
            <p className="text-sm text-muted-foreground">
              * الحسابات تقديرية بناءً على عائد شهري 15%. الأداء السابق لا يضمن النتائج المستقبلية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
