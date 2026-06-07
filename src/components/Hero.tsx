import Link from "next/link";
import HeroMockups from "./HeroMockups";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-[#0B1120] pt-20 pb-0 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

        {/* Centered copy — Foodnoms layout */}
        <div className="text-center max-w-[720px] mx-auto">
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
              <div className="text-left">
                <p className="text-[10px] opacity-60 leading-none mb-0.5 font-medium">Acceso anticipado</p>
                <p className="text-[14px] font-bold leading-none">Empezar gratis</p>
              </div>
              <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
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
