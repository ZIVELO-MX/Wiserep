import Link from "next/link";
import HeroMockups from "./HeroMockups";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-[#0B1120] pt-20 pb-0 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

        {/* Centered copy — Foodnoms layout */}
        <div className="text-center max-w-[720px] mx-auto">
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-[#2563EB] bg-[#EFF6FF] dark:bg-[#1E3A8A]/40 px-4 py-1.5 rounded-[26px] mb-8">
            Parte del ecosistema Gymoss
          </span>

          <h1 className="font-display font-bold leading-[1.15] mb-6">
            <span className="text-[#2563EB] block text-[52px] sm:text-[60px]">Entrena mejor,</span>
            <span className="text-[#0F172A] dark:text-[#F1F5F9] block text-[52px] sm:text-[60px]">repetición por repetición.</span>
          </h1>

          <p className="text-[17px] text-[#475569] dark:text-[#94A3B8] max-w-[480px] mx-auto mb-10 leading-[1.7]">
            Sigue tus rutinas, registra pesos, ajusta ejercicios y toma mejores decisiones en cada entrenamiento.
          </p>

          {/* Dark badge button — App Store badge equivalent */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="#precios"
              className="inline-flex items-center gap-3 bg-[#0F172A] dark:bg-[#F1F5F9] text-white dark:text-[#0F172A] px-7 py-4 rounded-[26px] text-[15px] font-semibold hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.27.07 2.15.74 2.88.8.95-.19 1.86-.81 2.88-.87 1.53-.08 2.73.57 3.57 1.77-3.19 1.82-2.67 6 .5 7.28-.59 1.57-1.3 3.08-1.83 3.88zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] opacity-70 leading-none mb-0.5">Acceso anticipado</p>
                <p className="text-[14px] font-bold leading-none">Empezar gratis</p>
              </div>
            </Link>
            <Link
              href="#funciones"
              className="inline-flex items-center gap-2 text-[#475569] dark:text-[#94A3B8] text-[15px] font-medium hover:text-[#0F172A] dark:hover:text-white transition-colors"
            >
              Ver funciones
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Phone mockups row — floating on white, fanned */}
        <HeroMockups />
      </div>
    </section>
  );
}
