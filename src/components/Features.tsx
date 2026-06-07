const features = [
  {
    icon: "🗂️",
    title: "Rutinas organizadas",
    description:
      "Crea, selecciona o sigue rutinas de entrenamiento sin perder el control de tus ejercicios.",
  },
  {
    icon: "📊",
    title: "Tracking de pesos",
    description:
      "Registra pesos, series y repeticiones para ver tu progreso con claridad.",
  },
  {
    icon: "⏱️",
    title: "Timer entre series",
    description:
      "Controla tus descansos sin salir del flujo del entrenamiento.",
  },
  {
    icon: "🔄",
    title: "Sustitución de ejercicios",
    description:
      "Cambia ejercicios cuando una máquina no esté disponible o necesites una alternativa.",
  },
  {
    icon: "💬",
    title: "¿Cómo se sintió?",
    description:
      "Registra si el entrenamiento fue fácil, pesado o incómodo para ajustar mejor la siguiente sesión.",
  },
  {
    icon: "🔤",
    title: "Nombres de ejercicios",
    description:
      "WiseRep entiende que un ejercicio puede tener varios nombres y te ayuda a mantener consistencia.",
  },
  {
    icon: "⚖️",
    title: "Ajuste de carga por ciclo",
    description:
      "Permite reducir temporalmente la intensidad o los pesos recomendados de forma opcional y privada.",
  },
  {
    icon: "👥",
    title: "Entrenadores",
    description:
      "Diseñado para que en el futuro los entrenadores puedan asignar rutinas y dar seguimiento.",
  },
];

export default function Features() {
  return (
    <section id="funciones" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Funciones
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto">
            Todo lo que necesitas para entrenar con más control y progresión real.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 hover:border-[#2563EB]/30 hover:shadow-sm transition-all"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-[#0F172A] mb-2">{f.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
