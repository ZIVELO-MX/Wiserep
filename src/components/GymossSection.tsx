export default function GymossSection() {
  return (
    <section id="gymoss" className="py-24 px-6 bg-[#1E3A8A]">
      <div className="max-w-[900px] mx-auto text-center">
        <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-[#93C5FD] bg-white/10 px-4 py-1.5 rounded-[26px] mb-8">
          Ecosistema
        </span>

        <h2 className="font-display text-[30px] sm:text-[36px] font-bold text-white mb-6 leading-[1.2]">
          Parte del ecosistema Gymoss
        </h2>

        <p className="text-blue-200 text-[17px] max-w-2xl mx-auto mb-4 leading-[1.7]">
          WiseRep es el primer módulo de Gymoss, un ecosistema de software para gimnasios
          que conecta entrenamiento, atletas, entrenadores y operaciones en una sola plataforma.
        </p>

        <p className="text-blue-300 text-[15px] max-w-xl mx-auto mb-12 leading-relaxed">
          Hoy: rutinas y seguimiento de pesos. Mañana: conexión con herramientas para
          gimnasios, entrenadores, licencias y gestión de miembros.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-xl mx-auto mb-12 text-[13px]">
          {[
            { label: "WiseRep", active: true },
            { label: "Miembros", active: false },
            { label: "Asistencia", active: false },
            { label: "Pagos", active: false },
            { label: "Analytics", active: false },
          ].map((m) => (
            <div
              key={m.label}
              className={`rounded-[26px] px-3 py-2.5 font-semibold text-center ${
                m.active ? "bg-white text-[#1E3A8A]" : "bg-white/10 text-blue-300 border border-white/10"
              }`}
            >
              {m.label}
              {!m.active && (
                <span className="block text-[10px] text-blue-400 mt-0.5 font-normal">Próximamente</span>
              )}
            </div>
          ))}
        </div>

        <a
          href="mailto:contacto@zivelo.dev"
          className="inline-flex items-center gap-2 bg-white text-[#1E3A8A] font-semibold px-8 py-3 rounded-[26px] hover:bg-blue-50 transition-colors text-[14px]"
        >
          Conocer Gymoss
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
