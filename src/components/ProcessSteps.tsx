import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Step {
  id: number;
  title: string;
  description: string;
  color: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Segment",
    description:
      "Определяем целевую аудиторию и создаем точные сегменты для максимальной эффективности",
    color: "text-sky-600",
  },
  {
    id: 2,
    title: "Design",
    description:
      "Разрабатываем креативные решения и визуальный контент, который привлекает внимание",
    color: "text-emerald-600",
  },
  {
    id: 3,
    title: "Send",
    description:
      "Запускаем персонализированные кампании и автоматизированные воронки продаж",
    color: "text-purple-600",
  },
  {
    id: 4,
    title: "Convert",
    description:
      "Превращаем лиды в клиентов с помощью оптимизированных процессов конверсии",
    color: "text-orange-600",
  },
];

const ProcessSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Steps Navigation */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center space-x-6 cursor-pointer transition-all duration-500 ${
                  index === activeStep
                    ? "scale-105 opacity-100"
                    : "opacity-60 hover:opacity-80"
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`text-4xl font-bold ${step.color} transition-all duration-300`}
                >
                  {step.id.toString().padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-2xl font-semibold transition-all duration-300 ${
                      index === activeStep ? "text-slate-800" : "text-slate-500"
                    }`}
                  >
                    {step.title}
                  </h3>
                  {index === activeStep && (
                    <div className="mt-2 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="relative">
            <Card className="border-none shadow-2xl transition-all duration-700 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div
                    className={`text-6xl font-bold ${steps[activeStep].color} transition-all duration-500`}
                  >
                    {steps[activeStep].id.toString().padStart(2, "0")}
                  </div>

                  <h2 className="text-3xl font-bold text-slate-800 transition-all duration-500">
                    {steps[activeStep].title}
                  </h2>

                  <p className="text-lg text-slate-600 leading-relaxed transition-all duration-500">
                    {steps[activeStep].description}
                  </p>

                  <div className="flex space-x-2 mt-6">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeStep
                            ? "bg-sky-500 w-8"
                            : "bg-slate-300 w-2"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
