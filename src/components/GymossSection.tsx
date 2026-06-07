export default function GymossSection() {
  return (
    <section id="gymoss" className="py-20 px-4 sm:px-6 bg-[#1E3A8A]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#93C5FD] bg-white/10 px-3 py-1 rounded-full mb-6">
          Ecosistema
        </span>

        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
          Parte del ecosistema Gymoss
        </h2>

        <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
          WiseRep es el primer módulo de Gymoss, un ecosistema de software para
          gimnasios que busca conectar entrenamiento, atletas, entrenadores y
          operaciones en una sola plataforma modular.
        </p>

        <p className="text-blue-300 text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Hoy empezamos con rutinas y seguimiento de pesos. Mañana, WiseRep
          podrá conectarse con herramientas para gimnasios, entrenadores,
          licencias y gestión de miembros.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-2xl mx-auto mb-10 text-sm">
          {[
            { label: "WiseRep", active: true },
            { label: "Miembros", active: false },
            { label: "Asistencia", active: false },
            { label: "Pagos", active: false },
            { label: "Analytics", active: false },
          ].map((m) => (
            <div
              key={m.label}
              className={`rounded-xl px-3 py-2 font-medium text-center ${
                m.active
                  ? "bg-white text-[#1E3A8A]"
                  : "bg-white/10 text-blue-300 border border-white/10"
              }`}
            >
              {m.label}
              {!m.active && (
                <span className="block text-xs text-blue-400 mt-0.5">Próximamente</span>
              )}
            </div>
          ))}
        </div>

        <a
          href="mailto:contacto@zivelo.dev"
          className="inline-block bg-white text-[#1E3A8A] font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
        >
          Conocer Gymoss
        </a>
      </div>
    </section>
  );
}
