import Link from "next/link";
import AppMockup from "./AppMockup";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-[#0B1120] pt-20 pb-28 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Copy */}
          <div className="flex-1 text-center lg:text-left max-w-xl lg:max-w-none">
            <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-[#2563EB] bg-[#EFF6FF] dark:bg-[#1E3A8A]/40 px-4 py-1.5 rounded-[26px] mb-8">
              Parte del ecosistema Gymoss
            </span>

            <h1 className="font-display font-bold leading-[1.15] mb-7">
              <span className="text-[#2563EB] text-5xl sm:text-6xl lg:text-[64px] block">
                Entrena mejor,
              </span>
              <span className="text-[#0F172A] dark:text-[#F1F5F9] text-5xl sm:text-6xl lg:text-[64px] block">
                repetición por<br className="hidden sm:block" /> repetición.
              </span>
            </h1>

            <p className="text-[17px] text-[#475569] dark:text-[#94A3B8] max-w-md mx-auto lg:mx-0 mb-10 leading-[1.7]">
              Sigue tus rutinas, registra pesos, ajusta ejercicios y toma
              mejores decisiones en cada entrenamiento.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#precios"
                className="w-full sm:w-auto bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-3.5 rounded-[26px] text-[15px] transition-colors flex items-center justify-center gap-2"
              >
                Probar WiseRep gratis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#funciones"
                className="w-full sm:w-auto text-[#0F172A] dark:text-[#F1F5F9] font-semibold px-8 py-3.5 rounded-[26px] text-[15px] border border-[#E2E8F0] dark:border-[#334155] hover:border-[#2563EB] dark:hover:border-[#2563EB] transition-colors text-center"
              >
                Ver funciones
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-[13px] text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] inline-block" />
                Gratis para empezar
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] inline-block" />
                PWA · Mobile-first
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] inline-block" />
                100% en español
              </span>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex-shrink-0 flex justify-center">
            <AppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
