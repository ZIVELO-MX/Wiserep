import Link from "next/link";
import AppMockup from "./AppMockup";

export default function Hero() {
  return (
    <section className="bg-[#F8FAFC] pt-16 pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Copy */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full mb-6">
              Parte del ecosistema Gymoss
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
              Entrena mejor,{" "}
              <span className="text-[#2563EB]">repetición<br className="hidden sm:block" /> por repetición.</span>
            </h1>

            <p className="text-lg text-[#475569] max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
              Sigue tus rutinas, registra pesos, ajusta ejercicios y toma
              mejores decisiones en cada entrenamiento.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#precios"
                className="w-full sm:w-auto bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-3 rounded-xl text-base transition-colors shadow-sm"
              >
                Probar WiseRep
              </Link>
              <Link
                href="#funciones"
                className="w-full sm:w-auto border border-[#E2E8F0] hover:border-[#2563EB] text-[#0F172A] font-semibold px-8 py-3 rounded-xl text-base transition-colors bg-white"
              >
                Conocer funciones
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] inline-block" />
                Gratis para empezar
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] inline-block" />
                PWA · Mobile-first
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] inline-block" />
                100% en español
              </span>
            </div>
          </div>

          {/* Mockup */}
          <div className="flex-shrink-0 flex justify-center">
            <AppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
