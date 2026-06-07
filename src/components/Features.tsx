"use client";

import { useRef, useState, useEffect } from "react";

const features = [
  {
    icon: "🗂️",
    title: "Rutinas organizadas",
    description:
      "Crea, selecciona o sigue rutinas de entrenamiento sin perder el control de tus ejercicios.",
  },
  {
    icon: "📊",
    title: "Tracking de pesos",
    description:
      "Registra pesos, series y repeticiones para ver tu progreso con claridad.",
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
      "Cambia ejercicios cuando una máquina no esté disponible o necesites una alternativa.",
  },
  {
    icon: "💬",
    title: "¿Cómo se sintió?",
    description:
      "Registra si el entrenamiento fue fácil, pesado o incómodo para ajustar mejor la siguiente sesión.",
  },
  {
    icon: "🔤",
    title: "Nombres de ejercicios",
    description:
      "WiseRep entiende que un ejercicio puede tener varios nombres y te ayuda a mantener consistencia.",
  },
  {
    icon: "⚖️",
    title: "Ajuste de carga por ciclo",
    description:
      "Permite reducir temporalmente la intensidad o los pesos recomendados de forma opcional y privada.",
  },
  {
    icon: "👥",
    title: "Entrenadores",
    description:
      "Diseñado para que los entrenadores puedan asignar rutinas y dar seguimiento en el futuro.",
  },
];

export default function Features() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cardWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 0;
      setActive(Math.round(track.scrollLeft / (cardWidth + 24)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const prev = () => scrollTo((active - 1 + features.length) % features.length);
  const next = () => scrollTo((active + 1) % features.length);

  return (
    <section id="funciones" className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-2">
              Funciones
            </h2>
            <p className="text-[#475569] text-base max-w-md">
              Todo lo que necesitas para entrenar con más control y progresión real.
            </p>
          </div>

          {/* Arrow controls */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel track — bleeds to edges on mobile */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-4 sm:px-6 max-w-6xl mx-auto
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {features.map((f, i) => (
          <div
            key={f.title}
            className="snap-start flex-shrink-0 w-64 sm:w-72 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6
                       hover:border-[#2563EB]/40 hover:shadow-sm transition-all"
          >
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-[#0F172A] mb-2">{f.title}</h3>
            <p className="text-sm text-[#475569] leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-5">
        {features.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Ir a funciones ${i + 1}`}
            className={`rounded-full transition-all ${
              i === active
                ? "w-5 h-1.5 bg-[#2563EB]"
                : "w-1.5 h-1.5 bg-[#CBD5E1]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
