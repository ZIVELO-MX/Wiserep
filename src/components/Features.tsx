"use client";

import { useState, useEffect } from "react";

const features = [
  {
    icon: "🌙",
    title: "Ajuste de carga por ciclo",
    description:
      "Adapta la intensidad de tu rutina según tu ciclo menstrual. Opcional, privado y sin suposiciones — tú decides cuándo activarlo.",
  },
  {
    icon: "🗂️",
    title: "Rutinas organizadas",
    description:
      "Crea o elige rutinas de entrenamiento sin perder el hilo de tus ejercicios.",
  },
  {
    icon: "📊",
    title: "Tracking de pesos",
    description:
      "Registra pesos, series y repeticiones. Ve tu progreso con claridad sesión tras sesión.",
  },
  {
    icon: "⏱️",
    title: "Timer entre series",
    description:
      "Controla tus descansos sin salir del flujo del entrenamiento.",
  },
  {
    icon: "🔄",
    title: "Sustitución de ejercicios",
    description:
      "Cambia ejercicios al vuelo cuando necesites una alternativa o la máquina esté ocupada.",
  },
  {
    icon: "💬",
    title: "¿Cómo se sintió?",
    description:
      "Marca si el ejercicio fue fácil, pesado o incómodo para afinar mejor la siguiente sesión.",
  },
  {
    icon: "🔤",
    title: "Nombres de ejercicios",
    description:
      "WiseRep entiende variantes de nombres y te ayuda a mantener consistencia en tu historial.",
  },
  {
    icon: "👥",
    title: "Entrenadores",
    description:
      "Preparado para que entrenadores asignen rutinas y den seguimiento a sus atletas.",
  },
];

const N = features.length;
const INTERVAL = 3500;

export default function Features() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % N), INTERVAL);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="funciones" className="py-24 bg-[#F8FAFC] dark:bg-[#0F172A]">
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <h2 className="font-display font-bold leading-[1.2] mb-3">
          <span className="text-[#2563EB] text-[30px] sm:text-[36px]">Funciones</span>{" "}
          <span className="text-[#0F172A] dark:text-[#F1F5F9] text-[30px] sm:text-[36px]">que importan</span>
        </h2>
        <p className="text-[#475569] dark:text-[#94A3B8] text-[16px] max-w-md">
          Todo lo que necesitas para entrenar con más control y progresión real.
        </p>
      </div>

      {/* Carousel — no manual scroll, auto-advance */}
      <div className="overflow-hidden">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${N}, 100%)`,
            transform: `translateX(-${active * (100 / N)}%)`,
            transition: "transform 600ms ease-in-out",
            willChange: "transform",
          }}
        >
          {features.map((f) => (
            <div key={f.title} className="px-6">
              <div className="max-w-[1200px] mx-auto">
                <div className="bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] rounded-[26px] p-10 sm:p-14 flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12">
                  <div className="text-[64px] flex-shrink-0 leading-none">{f.icon}</div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#94A3B8] uppercase tracking-widest mb-3">
                      {String(features.indexOf(f) + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
                    </p>
                    <h3 className="font-display font-bold text-[26px] sm:text-[30px] text-[#0F172A] dark:text-[#F1F5F9] leading-[1.2] mb-4">
                      {f.title}
                    </h3>
                    <p className="text-[17px] text-[#475569] dark:text-[#94A3B8] leading-[1.7] max-w-lg">
                      {f.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-8">
        {features.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Función ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === active
                ? "w-6 h-1.5 bg-[#2563EB]"
                : "w-1.5 h-1.5 bg-[#CBD5E1] dark:bg-[#334155]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
