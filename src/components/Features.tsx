const features = [
  { icon: "🌙", title: "Ajuste de carga por ciclo", description: "Adapta la intensidad de tu rutina según tu ciclo menstrual. Opcional, privado y sin suposiciones." },
  { icon: "🗂️", title: "Rutinas organizadas", description: "Crea o elige rutinas de entrenamiento sin perder el hilo de tus ejercicios." },
  { icon: "📊", title: "Tracking de pesos", description: "Registra pesos, series y repeticiones. Ve tu progreso con claridad sesión tras sesión." },
  { icon: "⏱️", title: "Timer entre series", description: "Controla tus descansos sin salir del flujo del entrenamiento." },
  { icon: "🔄", title: "Sustitución de ejercicios", description: "Cambia ejercicios al vuelo cuando necesites una alternativa o la máquina esté ocupada." },
  { icon: "💬", title: "¿Cómo se sintió?", description: "Marca si el ejercicio fue fácil, pesado o incómodo para afinar mejor la siguiente sesión." },
  { icon: "🔤", title: "Nombres de ejercicios", description: "WiseRep entiende variantes de nombres y te ayuda a mantener consistencia en tu historial." },
  { icon: "👥", title: "Entrenadores", description: "Preparado para que entrenadores asignen rutinas y den seguimiento a sus atletas." },
];

export default function Features() {
  return (
    <section id="funciones" className="py-24 bg-[#F8FAFC] dark:bg-[#0F172A]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-display font-bold leading-[1.2] mb-3">
            <span className="text-[#2563EB] text-[30px] sm:text-[36px]">Funciones</span>{" "}
            <span className="text-[#0F172A] dark:text-[#F1F5F9] text-[30px] sm:text-[36px]">que importan</span>
          </h2>
          <p className="text-[#475569] dark:text-[#94A3B8] text-[15px] max-w-sm">
            Todo lo que necesitas para entrenar con más control y progresión real.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] rounded-[26px] p-6 flex items-start gap-4"
            >
              <span className="text-[28px] leading-none flex-shrink-0 mt-0.5">{f.icon}</span>
              <div className="min-w-0">
                <h3 className="text-[14px] font-semibold text-[#0F172A] dark:text-[#F1F5F9] leading-snug mb-2">
                  {f.title}
                </h3>
                <p className="text-[13px] text-[#475569] dark:text-[#94A3B8] leading-[1.55]">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
