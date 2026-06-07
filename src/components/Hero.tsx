import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#F8FAFC] pt-20 pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full mb-6">
          Parte del ecosistema Gymoss
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
          Entrena mejor,{" "}
          <span className="text-[#2563EB]">repetición por repetición.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#475569] max-w-2xl mx-auto mb-10 leading-relaxed">
          WiseRep te ayuda a seguir tus rutinas, registrar tus pesos, ajustar
          ejercicios y tomar mejores decisiones en cada entrenamiento.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { value: "Rutinas", label: "organizadas" },
            { value: "Pesos", label: "registrados" },
            { value: "Timer", label: "entre series" },
            { value: "Progreso", label: "inteligente" },
          ].map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-lg font-bold text-[#2563EB]">{stat.value}</div>
              <div className="text-sm text-[#94A3B8]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
