const plans = [
  {
    name: "Gratis",
    description: "Para empezar a registrar tus entrenamientos.",
    price: null,
    cta: "Empezar gratis",
    ctaHref: "#",
    highlighted: false,
    features: [
      "Rutinas básicas",
      "Registro de pesos",
      "Timer entre series",
      "Historial limitado",
    ],
  },
  {
    name: "Premium",
    description: "Para entrenar con más control y seguimiento.",
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
    description: "Licencias para gimnasios y entrenadores.",
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
    <section id="precios" className="py-20 px-4 sm:px-6 bg-white dark:bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-4">
            Precios
          </h2>
          <p className="text-[#475569] dark:text-[#94A3B8] text-lg max-w-xl mx-auto">
            Los precios finales se definirán durante la etapa piloto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col gap-6 ${
                plan.highlighted
                  ? "bg-[#2563EB] border-[#2563EB] text-white shadow-xl shadow-blue-200 dark:shadow-blue-900/40"
                  : "bg-[#F8FAFC] dark:bg-[#1E293B] border-[#E2E8F0] dark:border-[#334155]"
              }`}
            >
              <div>
                <h3
                  className={`text-xl font-bold mb-1 ${
                    plan.highlighted ? "text-white" : "text-[#0F172A] dark:text-[#F1F5F9]"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.highlighted ? "text-blue-100" : "text-[#475569] dark:text-[#94A3B8]"
                  }`}
                >
                  {plan.description}
                </p>
                {plan.price && (
                  <p
                    className={`mt-3 text-sm font-semibold ${
                      plan.highlighted ? "text-blue-200" : "text-[#94A3B8] dark:text-[#475569]"
                    }`}
                  >
                    {plan.price}
                  </p>
                )}
              </div>

              <ul className="flex flex-col gap-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span
                      className={`mt-0.5 ${
                        plan.highlighted ? "text-blue-200" : "text-[#2563EB]"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={
                        plan.highlighted ? "text-blue-50" : "text-[#475569] dark:text-[#94A3B8]"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`mt-auto text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
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
