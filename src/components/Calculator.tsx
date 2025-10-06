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
    <section id="calculator" className="py-12 md:py-24 bg-secondary/50 relative overflow-hidden" dir="rtl">
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
          <span className="text-primary font-semibold text-base md:text-lg mb-3 md:mb-4 block">حاسبة الأرباح</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            احسب أرباحك المحتملة
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف كم يمكنك أن تربح من خلال استثمارك معنا
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-2xl md:rounded-3xl shadow-xl border border-border p-6 md:p-8 lg:p-12 hover:shadow-2xl transition-all duration-500 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-8">
              <div>
                <Label htmlFor="investment" className="text-base md:text-lg mb-3 md:mb-4 block text-right">
                  مبلغ الاستثمار (بالدولار)
                </Label>
                <Input
                  id="investment"
                  type="number"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="text-xl md:text-2xl h-12 md:h-14 text-right"
                  min={100}
                />
                <Slider
                  value={[investment]}
                  onValueChange={(value) => setInvestment(value[0])}
                  min={100}
                  max={100000}
                  step={100}
                  className="mt-3 md:mt-4"
                />
              </div>

              <div>
                <Label htmlFor="duration" className="text-base md:text-lg mb-3 md:mb-4 block text-right">
                  مدة الاستثمار (بالأشهر)
                </Label>
                <Input
                  id="duration"
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="text-xl md:text-2xl h-12 md:h-14 text-right"
                  min={1}
                  max={24}
                />
                <Slider
                  value={[duration]}
                  onValueChange={(value) => setDuration(value[0])}
                  min={1}
                  max={24}
                  step={1}
                  className="mt-3 md:mt-4"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-glow p-6 md:p-8 rounded-xl md:rounded-2xl text-primary-foreground hover:scale-105 transition-transform duration-300">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <div className="text-xs md:text-sm opacity-90 mb-1 md:mb-2">استثمارك الأولي</div>
                  <div className="text-2xl md:text-3xl font-bold">${investment.toLocaleString()}</div>
                </div>
                
                <div className="h-px bg-primary-foreground/20"></div>
                
                <div>
                  <div className="text-xs md:text-sm opacity-90 mb-1 md:mb-2">الأرباح المتوقعة</div>
                  <div className="text-2xl md:text-3xl font-bold text-yellow-300">${profit.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                </div>
                
                <div className="h-px bg-primary-foreground/20"></div>
                
                <div>
                  <div className="text-xs md:text-sm opacity-90 mb-1 md:mb-2">إجمالي العائد</div>
                  <div className="text-3xl md:text-4xl font-bold">${totalReturn.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                </div>

                <div className="pt-4 md:pt-6">
                  <Button asChild variant="hero" size="lg" className="w-full rounded-full text-sm md:text-base">
                    <a href="#contact">
                      ابدأ الاستثمار الآن
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-muted/50 rounded-xl text-center">
            <p className="text-xs md:text-sm text-muted-foreground">
              * الحسابات تقديرية بناءً على عائد شهري 15%. الأداء السابق لا يضمن النتائج المستقبلية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
