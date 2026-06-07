"use client";

import { useState, useEffect, useRef } from "react";

const features = [
  { icon: "🌙", title: "Ajuste de carga por ciclo", description: "Adapta la intensidad de tu rutina según tu ciclo menstrual. Opcional, privado y sin suposiciones." },
  { icon: "🗂️", title: "Rutinas organizadas", description: "Crea o elige rutinas de entrenamiento sin perder el hilo de tus ejercicios." },
  { icon: "📊", title: "Tracking de pesos", description: "Registra pesos, series y repeticiones. Ve tu progreso con claridad sesión tras sesión." },
  { icon: "⏱️", title: "Timer entre series", description: "Controla tus descansos sin salir del flujo del entrenamiento." },
  { icon: "🔄", title: "Sustitución de ejercicios", description: "Cambia ejercicios al vuelo cuando necesites una alternativa o la máquina esté ocupada." },
  { icon: "💬", title: "¿Cómo se sintió?", description: "Marca si el ejercicio fue fácil, pesado o incómodo para afinar mejor la siguiente sesión." },
  { icon: "🔤", title: "Nombres de ejercicios", description: "WiseRep entiende variantes de nombres y te ayuda a mantener consistencia en tu historial." },
  { icon: "👥", title: "Entrenadores", description: "Preparado para que entrenadores asignen rutinas y den seguimiento a sus atletas." },
];

const N = features.length;

export default function Features() {
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
    const t = setInterval(() => setActive(p => (p + 1) % N), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="funciones" className="py-24 bg-[#F8FAFC] dark:bg-[#0F172A]">
      <div className="max-w-[1200px] mx-auto px-6 mb-10">
        <h2 className="font-display font-bold leading-[1.2] mb-3">
          <span className="text-[#2563EB] text-[30px] sm:text-[36px]">Funciones</span>{" "}
          <span className="text-[#0F172A] dark:text-[#F1F5F9] text-[30px] sm:text-[36px]">que importan</span>
        </h2>
        <p className="text-[#475569] dark:text-[#94A3B8] text-[15px] max-w-sm">
          Todo lo que necesitas para entrenar con más control y progresión real.
        </p>
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
          {features.map((f, i) => (
            <div key={f.title} className="flex-shrink-0 px-6" style={{ width: w || "100%" }}>
              <div className="max-w-[860px] mx-auto bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] rounded-[26px] p-7 sm:p-9 flex items-start gap-6">
                <div className="text-[40px] leading-none flex-shrink-0 mt-1">{f.icon}</div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-widest mb-2">
                    {String(i + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
                  </p>
                  <h3 className="font-display font-bold text-[20px] sm:text-[24px] text-[#0F172A] dark:text-[#F1F5F9] leading-[1.25] mb-3">
                    {f.title}
                  </h3>
                  <p className="text-[15px] text-[#475569] dark:text-[#94A3B8] leading-[1.65]">
                    {f.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-7">
        {features.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Función ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === active ? "w-6 h-1.5 bg-[#2563EB]" : "w-1.5 h-1.5 bg-[#CBD5E1] dark:bg-[#334155]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
