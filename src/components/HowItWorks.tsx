const steps = [
  {
    number: "01",
    title: "Elige o crea tu rutina",
    description:
      "Selecciona una rutina y organiza tus ejercicios por día, grupo muscular u objetivo.",
  },
  {
    number: "02",
    title: "Registra tu entrenamiento",
    description:
      "Guarda pesos, series, repeticiones y descansos mientras entrenas.",
  },
  {
    number: "03",
    title: "Cuenta cómo se sintió",
    description:
      "Marca si el ejercicio fue fácil, adecuado, pesado o si hubo molestia.",
  },
  {
    number: "04",
    title: "Mejora la siguiente sesión",
    description:
      "WiseRep usa tu historial para ayudarte a decidir si conviene subir, mantener o ajustar el peso.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-4 sm:px-6 bg-[#F8FAFC] dark:bg-[#0A0F1A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-4">
            Cómo funciona
          </h2>
          <p className="text-[#475569] dark:text-[#94A3B8] text-lg max-w-xl mx-auto">
            Cuatro pasos para entrenar con más inteligencia cada sesión.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-[#E2E8F0] dark:bg-[#1E293B] -translate-x-4 z-0" />
              )}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#2563EB] text-white font-bold text-sm flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-2 text-lg">{step.title}</h3>
                <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
