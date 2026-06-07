const plans = [
  {
    name: "Gratis",
    description: "Para empezar a registrar tus entrenamientos sin costo.",
    price: null,
    cta: "Empezar gratis",
    ctaHref: "#",
    highlighted: false,
    features: ["Rutinas básicas", "Registro de pesos", "Timer entre series", "Historial limitado"],
  },
  {
    name: "Premium",
    description: "Para entrenar con más control y seguimiento real.",
    price: "Próximamente",
    cta: "Unirme a la lista",
    ctaHref: "mailto:contacto@zivelo.dev",
    highlighted: true,
    features: [
      "Rutinas ilimitadas",
      "Historial completo",
      "Sugerencias de progresión",
      "Sustitución de ejercicios",
      "Ajuste de carga por ciclo",
      "Sin anuncios",
    ],
  },
  {
    name: "Para gimnasios",
    description: "Licencias para gimnasios y entrenadores profesionales.",
    price: null,
    cta: "Contactar",
    ctaHref: "mailto:contacto@zivelo.dev",
    highlighted: false,
    features: [
      "Licencias para atletas",
      "Rutinas asignadas",
      "Acceso para entrenadores",
      "Integración futura con Gymoss",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-24 px-6 bg-white dark:bg-[#0B1120]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold leading-[1.2] mb-4">
            <span className="text-[#2563EB] text-[30px] sm:text-[36px]">Planes</span>{" "}
            <span className="text-[#0F172A] dark:text-[#F1F5F9] text-[30px] sm:text-[36px]">y precios</span>
          </h2>
          <p className="text-[#475569] dark:text-[#94A3B8] text-[17px] max-w-lg mx-auto">
            Los precios finales se definirán durante la etapa piloto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[26px] border p-8 flex flex-col gap-6 ${
                plan.highlighted
                  ? "bg-[#2563EB] border-[#2563EB]"
                  : "bg-white dark:bg-[#1E293B] border-[#E2E8F0] dark:border-[#334155]"
              }`}
            >
              <div>
                <h3 className={`text-[20px] font-bold mb-1.5 ${plan.highlighted ? "text-white" : "text-[#0F172A] dark:text-[#F1F5F9]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-[14px] leading-relaxed ${plan.highlighted ? "text-blue-100" : "text-[#475569] dark:text-[#94A3B8]"}`}>
                  {plan.description}
                </p>
                {plan.price && (
                  <p className={`mt-3 text-[13px] font-semibold ${plan.highlighted ? "text-blue-200" : "text-[#94A3B8]"}`}>
                    {plan.price}
                  </p>
                )}
              </div>

              <ul className="flex flex-col gap-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px]">
                    <span className={`mt-0.5 font-bold ${plan.highlighted ? "text-blue-200" : "text-[#2563EB]"}`}>✓</span>
                    <span className={plan.highlighted ? "text-blue-50" : "text-[#475569] dark:text-[#94A3B8]"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`mt-auto text-center py-3 rounded-[26px] font-semibold text-[14px] transition-colors ${
                  plan.highlighted
                    ? "bg-white text-[#2563EB] hover:bg-blue-50"
                    : "bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
