function WorkoutScreen() {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden">
      <div className="px-4 pt-3 pb-2.5 border-b border-[#F1F5F9]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] text-[#94A3B8] font-semibold uppercase tracking-widest">Entrenamiento</p>
            <p className="text-[13px] font-bold text-[#0F172A] leading-tight">Push · Día A</p>
          </div>
          <div className="bg-[#EFF6FF] rounded-[26px] px-2.5 py-1 text-center">
            <p className="text-[11px] font-bold text-[#2563EB] leading-none">4/5</p>
            <p className="text-[8px] text-[#93C5FD]">ejercicios</p>
          </div>
        </div>
      </div>

      <div className="px-4 pt-3 pb-4 bg-[#F8FAFC] space-y-3">
        <div className="bg-white rounded-[20px] p-3 border border-[#E2E8F0]">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-[8px] text-[#94A3B8] font-semibold uppercase tracking-widest mb-0.5">Ejercicio actual</p>
              <p className="text-[13px] font-bold text-[#0F172A]">Hip Thrust</p>
              <p className="text-[9px] text-[#94A3B8]">Glúteos · Empuje</p>
            </div>
            <span className="bg-[#EFF6FF] text-[#2563EB] text-[9px] font-bold px-2 py-0.5 rounded-[26px]">3/4</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex-1 bg-[#F8FAFC] rounded-[14px] py-2 text-center border border-[#E2E8F0]">
              <p className="text-[18px] font-black text-[#0F172A] leading-none">60</p>
              <p className="text-[8px] text-[#94A3B8] mt-0.5">kg</p>
            </div>
            <span className="text-[10px] text-[#CBD5E1]">×</span>
            <div className="flex-1 bg-[#F8FAFC] rounded-[14px] py-2 text-center border border-[#E2E8F0]">
              <p className="text-[18px] font-black text-[#0F172A] leading-none">12</p>
              <p className="text-[8px] text-[#94A3B8] mt-0.5">reps</p>
            </div>
            <div className="text-[8px] text-[#CBD5E1] px-0.5">vs</div>
            <div className="flex-1 bg-[#F8FAFC] rounded-[14px] py-2 text-center border border-[#E2E8F0] opacity-50">
              <p className="text-[14px] font-bold text-[#475569] leading-none">55</p>
              <p className="text-[8px] text-[#94A3B8] mt-0.5">ant.</p>
            </div>
          </div>
          <button className="w-full bg-[#2563EB] text-white text-[11px] font-bold py-2 rounded-[26px]">
            Completar serie
          </button>
        </div>

        <div className="bg-[#EFF6FF] rounded-[20px] px-3 py-2.5 flex items-center justify-between">
          <div>
            <p className="text-[8px] text-[#93C5FD] font-semibold uppercase tracking-widest">Descanso</p>
            <p className="text-[22px] font-black text-[#2563EB] leading-none">1:30</p>
          </div>
          <div className="w-9 h-9 rounded-full border-2 border-[#2563EB]/30 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-[#2563EB]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <div>
          <p className="text-[8px] text-[#94A3B8] font-semibold uppercase tracking-widest mb-1.5">¿Cómo se sintió?</p>
          <div className="flex gap-1">
            {["Muy fácil", "Bien", "Pesado", "Mucho"].map((label, i) => (
              <button
                key={label}
                className={`flex-1 text-[7.5px] font-semibold py-1.5 rounded-[26px] ${
                  i === 1 ? "bg-[#2563EB] text-white" : "bg-white text-[#94A3B8] border border-[#E2E8F0]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RoutineScreen() {
  const routines = [
    { name: "Push · Fuerza", muscles: "Pecho · Hombros · Tríceps", exercises: 5, emoji: "💪" },
    { name: "Pull · Fuerza", muscles: "Espalda · Bíceps", exercises: 6, emoji: "🔙" },
    { name: "Legs · Hipertrofia", muscles: "Cuádriceps · Glúteos", exercises: 5, emoji: "🦵" },
  ];

  return (
    <div className="bg-white rounded-[32px] overflow-hidden">
      <div className="px-4 pt-3 pb-2.5 border-b border-[#F1F5F9] flex items-center justify-between">
        <p className="text-[13px] font-bold text-[#0F172A]">Mis rutinas</p>
        <div className="w-6 h-6 bg-[#2563EB] rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>

      <div className="px-4 pt-3 pb-4 bg-[#F8FAFC] space-y-2.5">
        {routines.map((r, i) => (
          <div key={r.name} className="bg-white rounded-[20px] p-3 border border-[#E2E8F0]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-[16px]">{r.emoji}</span>
                <div>
                  <p className="text-[11px] font-bold text-[#0F172A] leading-tight">{r.name}</p>
                  <p className="text-[8px] text-[#94A3B8]">{r.muscles}</p>
                </div>
              </div>
              <span className="text-[8px] text-[#94A3B8] font-medium">{r.exercises} ejerc.</span>
            </div>
            {i === 0 && (
              <button className="w-full bg-[#2563EB] text-white text-[10px] font-bold py-1.5 rounded-[26px]">
                Iniciar
              </button>
            )}
            {i !== 0 && (
              <button className="w-full bg-[#F1F5F9] text-[#475569] text-[10px] font-semibold py-1.5 rounded-[26px]">
                Ver rutina
              </button>
            )}
          </div>
        ))}

        <div className="bg-[#EFF6FF] rounded-[20px] p-3 border border-[#2563EB]/20 flex items-center gap-2">
          <div className="w-7 h-7 bg-[#2563EB]/10 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <p className="text-[10px] text-[#2563EB] font-semibold">Nueva rutina</p>
        </div>
      </div>
    </div>
  );
}

function Phone({ children, rotate = 0, scale = 1 }: { children: React.ReactNode; rotate?: number; scale?: number }) {
  return (
    <div
      className="relative flex-shrink-0 w-[256px]"
      style={{ transform: `rotate(${rotate}deg) scale(${scale})` }}
    >
      <div className="bg-[#0B1120] rounded-[44px] p-3 border border-white/10">
        <div className="flex justify-center mb-2">
          <div className="w-24 h-[20px] bg-black rounded-full" />
        </div>
        {children}
        <div className="flex justify-center mt-2">
          <div className="w-20 h-1 bg-white/25 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function HeroMockups() {
  return (
    <div className="relative flex items-end justify-center gap-0 mt-16 px-4">
      {/* Left phone — routine selection, tilted left */}
      <div className="hidden sm:block -mr-8 z-10 mb-4">
        <Phone rotate={-7} scale={0.88}>
          <RoutineScreen />
        </Phone>
      </div>

      {/* Center phone — active workout, straight */}
      <div className="z-20">
        <Phone rotate={0} scale={1}>
          <WorkoutScreen />
        </Phone>
      </div>

      {/* Right phone — routine selection mirrored, tilted right */}
      <div className="hidden lg:block -ml-8 z-10 mb-4">
        <Phone rotate={7} scale={0.88}>
          <RoutineScreen />
        </Phone>
      </div>
    </div>
  );
}
