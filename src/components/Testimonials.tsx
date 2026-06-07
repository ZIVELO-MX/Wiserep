const testimonials = [
  {
    initials: "AG",
    name: "Ana G.",
    role: "Atleta de CrossFit · CDMX",
    quote:
      "El ajuste por ciclo es un game changer. Por fin una app que entiende que no entreno igual toda la semana.",
    color: "#8B5CF6",
  },
  {
    initials: "CR",
    name: "Carlos R.",
    role: "Entrenador personal · Monterrey",
    quote:
      "Mis atletas ya no llegan sin saber qué peso usar. WiseRep les recuerda exactamente dónde se quedaron.",
    color: "#2563EB",
  },
  {
    initials: "ML",
    name: "Mariana L.",
    role: "Powerlifting amateur · GDL",
    quote:
      "El historial de pesos me ayuda a ver mi progreso real. Antes solo recordaba los entrenamientos malos.",
    color: "#0891B2",
  },
  {
    initials: "JV",
    name: "Jorge V.",
    role: "Gym 4 días/semana · CDMX",
    quote:
      "Sencilla al usarla, inteligente por dentro. Sin exageraciones, solo lo que necesito durante el entreno.",
    color: "#059669",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#2563EB]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0B1120]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold leading-[1.2] mb-4">
            <span className="text-[#2563EB] text-[30px] sm:text-[36px]">Lo que dicen</span>{" "}
            <span className="text-[#0F172A] dark:text-[#F1F5F9] text-[30px] sm:text-[36px]">los primeros usuarios</span>
          </h2>
          <p className="text-[#475569] dark:text-[#94A3B8] text-[17px] max-w-md mx-auto">
            Atletas y entrenadores que probaron WiseRep durante la etapa beta.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-[26px] p-7 border border-[#E2E8F0] dark:border-[#334155] flex flex-col gap-5"
            >
              <Stars />

              <p className="text-[15px] text-[#0F172A] dark:text-[#F1F5F9] leading-[1.65] flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#0F172A] dark:text-[#F1F5F9] leading-none mb-0.5">{t.name}</p>
                  <p className="text-[12px] text-[#94A3B8] leading-none">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
