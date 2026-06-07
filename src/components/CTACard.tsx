import Link from "next/link";

export default function CTACard() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0B1120]">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-[26px] p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-8 border border-[#E2E8F0] dark:border-[#334155]">
          <div className="text-center sm:text-left max-w-xl">
            <h2 className="font-display font-bold leading-[1.2] mb-3">
              <span className="text-[#2563EB] text-[28px] sm:text-[32px]">Empieza hoy</span>{" "}
              <span className="text-[#0F172A] dark:text-[#F1F5F9] text-[28px] sm:text-[32px]">con WiseRep</span>
            </h2>
            <p className="text-[16px] text-[#475569] dark:text-[#94A3B8] leading-relaxed">
              Gratis para empezar. Sin tarjeta de crédito. Disponible en cualquier dispositivo con navegador.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 flex-shrink-0">
            <Link
              href="#precios"
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-3.5 rounded-[26px] text-[15px] transition-colors"
            >
              Probar WiseRep
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="mailto:contacto@zivelo.dev"
              className="text-[13px] text-[#94A3B8] hover:text-[#475569] transition-colors"
            >
              o contactar al equipo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
