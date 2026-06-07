"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const features = [
  {
    icon: "🌙",
    title: "Ajuste de carga por ciclo",
    description:
      "Adapta la intensidad de tu rutina según tu ciclo menstrual. Opcional, privado y sin suposiciones.",
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
      "Registra pesos, series y repeticiones. Ve tu progreso con claridad.",
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
      "Cambia ejercicios al vuelo cuando necesites una alternativa.",
  },
  {
    icon: "💬",
    title: "¿Cómo se sintió?",
    description:
      "Marca si fue fácil, pesado o incómodo para afinar la siguiente sesión.",
  },
  {
    icon: "🔤",
    title: "Nombres de ejercicios",
    description:
      "WiseRep entiende variantes de nombres y te ayuda a mantener consistencia.",
  },
  {
    icon: "👥",
    title: "Entrenadores",
    description:
      "Preparado para asignar rutinas y dar seguimiento a atletas.",
  },
];

const N = features.length;

export default function Features() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    if (!card) return;
    const trackLeft = track.getBoundingClientRect().left;
    const cardLeft = card.getBoundingClientRect().left;
    track.scrollTo({ left: track.scrollLeft + (cardLeft - trackLeft), behavior });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const card = track.children[0] as HTMLElement;
      const gap = 20;
      setActive(Math.round(track.scrollLeft / (card.offsetWidth + gap)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const prev = useCallback(() => {
    scrollTo((active - 1 + N) % N, active === 0 ? "instant" : "smooth");
  }, [active, scrollTo]);

  const next = useCallback(() => {
    scrollTo((active + 1) % N, active === N - 1 ? "instant" : "smooth");
  }, [active, scrollTo]);

  return (
    <section id="funciones" className="py-24 bg-[#F8FAFC] dark:bg-[#0F172A] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display font-bold leading-[1.2] mb-3">
              <span className="text-[#2563EB] text-[30px] sm:text-[36px]">Funciones</span>{" "}
              <span className="text-[#0F172A] dark:text-[#F1F5F9] text-[30px] sm:text-[36px]">que importan</span>
            </h2>
            <p className="text-[#475569] dark:text-[#94A3B8] text-[16px] max-w-md leading-relaxed">
              Todo lo que necesitas para entrenar con más control y progresión real.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="w-10 h-10 rounded-full border border-[#E2E8F0] dark:border-[#334155] flex items-center justify-center text-[#475569] dark:text-[#94A3B8] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="w-10 h-10 rounded-full border border-[#E2E8F0] dark:border-[#334155] flex items-center justify-center text-[#475569] dark:text-[#94A3B8] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 px-6 max-w-[1200px] mx-auto
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {features.map((f) => (
          <div
            key={f.title}
            className="snap-start flex-shrink-0 w-[280px] sm:w-[300px] bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] rounded-[26px] p-7 hover:border-[#2563EB]/50 transition-colors"
          >
            <div className="text-[28px] mb-5">{f.icon}</div>
            <h3 className="font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-2 text-[15px]">{f.title}</h3>
            <p className="text-[14px] text-[#475569] dark:text-[#94A3B8] leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-1.5 mt-7">
        {features.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Ir a función ${i + 1}`}
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
