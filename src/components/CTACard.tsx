import Link from "next/link";

const userTypes = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#2563EB]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    label: "Gimnasios",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#2563EB]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75" />
      </svg>
    ),
    label: "Entrenadores",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#2563EB]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    label: "Atletas",
  },
];

export default function CTACard() {
  return (
    <section className="py-24 px-6 bg-[#F8FAFC] dark:bg-[#0F172A]">
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="font-display font-bold leading-[1.15] mb-5">
          <span className="text-[#2563EB] text-[32px] sm:text-[40px]">Empieza a entrenar</span>
          <br />
          <span className="text-[#0F172A] dark:text-[#F1F5F9] text-[32px] sm:text-[40px]">más inteligente</span>
        </h2>

        <p className="text-[16px] text-[#475569] dark:text-[#94A3B8] leading-relaxed mb-10">
          WiseRep ayuda a dueños de gimnasio, entrenadores y atletas a gestionar
          rutinas, registrar progreso y tomar mejores decisiones de entrenamiento.
        </p>

        {/* User type icons */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 mb-10">
          {userTypes.map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2.5">
              <div className="w-14 h-14 rounded-[18px] bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] flex items-center justify-center shadow-none">
                {icon}
              </div>
              <span className="text-[12px] font-medium text-[#475569] dark:text-[#94A3B8]">
                {label}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="#precios"
          className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-3.5 rounded-[26px] text-[15px] transition-colors"
        >
          Únete a la lista
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
