"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  { initials: "AG", name: "Ana G.", role: "Atleta de CrossFit · CDMX", color: "#8B5CF6", quote: "El ajuste por ciclo es un game changer. Por fin una app que entiende que no entreno igual toda la semana." },
  { initials: "CR", name: "Carlos R.", role: "Entrenador personal · Monterrey", color: "#2563EB", quote: "Mis atletas ya no llegan sin saber qué peso usar. WiseRep les recuerda exactamente dónde se quedaron." },
  { initials: "ML", name: "Mariana L.", role: "Powerlifting amateur · GDL", color: "#0891B2", quote: "El historial de pesos me ayuda a ver mi progreso real. Antes solo recordaba los entrenamientos malos." },
  { initials: "JV", name: "Jorge V.", role: "Gym 4 días/semana · CDMX", color: "#059669", quote: "Sencilla al usarla, inteligente por dentro. Sin exageraciones, solo lo que necesito durante el entreno." },
];

const N = testimonials.length;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [w, setW] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(entries => setW(entries[0].contentRect.width));
    ro.observe(el);
    setW(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % N), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0B1120]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold leading-[1.2] mb-3">
            <span className="text-[#2563EB] text-[30px] sm:text-[36px]">Lo que dicen</span>{" "}
            <span className="text-[#0F172A] dark:text-[#F1F5F9] text-[30px] sm:text-[36px]">los primeros usuarios</span>
          </h2>
          <p className="text-[#475569] dark:text-[#94A3B8] text-[15px]">
            Atletas y entrenadores que probaron WiseRep en beta.
          </p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${active * w}px)`,
            transition: "transform 420ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
          }}
        >
          {testimonials.map((t) => (
            <div key={t.name} className="flex-shrink-0 flex justify-center px-6" style={{ width: w || "100%" }}>
              <div className="max-w-[560px] w-full bg-[#F8FAFC] dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] rounded-[26px] p-8 text-center">
                <div className="flex justify-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#2563EB]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-[16px] sm:text-[18px] text-[#0F172A] dark:text-[#F1F5F9] font-medium leading-[1.6] mb-7">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center justify-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <p className="text-[13px] font-semibold text-[#0F172A] dark:text-[#F1F5F9] leading-none mb-0.5">{t.name}</p>
                    <p className="text-[12px] text-[#94A3B8] leading-none">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-7">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Testimonio ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === active ? "w-6 h-1.5 bg-[#2563EB]" : "w-1.5 h-1.5 bg-[#CBD5E1] dark:bg-[#334155]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
