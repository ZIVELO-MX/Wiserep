export default function AppMockup() {
  return (
    <div className="relative">
      {/* Glow behind phone */}
      <div className="absolute inset-0 bg-[#2563EB]/20 blur-3xl rounded-full scale-75 translate-y-8" />

      {/* Phone frame */}
      <div className="relative w-[270px] bg-[#0F172A] rounded-[40px] shadow-2xl shadow-[#0F172A]/40 p-3 border border-white/10">

        {/* Dynamic island */}
        <div className="flex justify-center mb-2">
          <div className="w-20 h-5 bg-black rounded-full" />
        </div>

        {/* Screen */}
        <div className="bg-[#F8FAFC] rounded-[28px] overflow-hidden">
          <div className="bg-white pb-4">

            {/* App header */}
            <div className="px-4 py-3 border-b border-[#F1F5F9]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-[#94A3B8] font-medium uppercase tracking-wider">Entrenamiento</p>
                  <p className="text-sm font-bold text-[#0F172A]">Push · Día A</p>
                </div>
                <div className="bg-[#EFF6FF] rounded-xl px-2 py-1">
                  <span className="text-[10px] font-bold text-[#2563EB]">4 / 5</span>
                  <p className="text-[8px] text-[#93C5FD]">ejercicios</p>
                </div>
              </div>
            </div>

            {/* Current exercise */}
            <div className="px-4 pt-3">
              <div className="bg-[#F8FAFC] rounded-2xl p-3 mb-3 border border-[#E2E8F0]">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-[9px] text-[#94A3B8] font-medium uppercase tracking-wider mb-0.5">Ejercicio actual</p>
                    <p className="text-sm font-bold text-[#0F172A]">Hip Thrust</p>
                    <p className="text-[9px] text-[#94A3B8]">Empuje de cadera · Glúteos</p>
                  </div>
                  <span className="bg-[#2563EB]/10 text-[#2563EB] text-[9px] font-bold px-2 py-0.5 rounded-lg">Serie 3/4</span>
                </div>

                {/* Weight and reps */}
                <div className="flex gap-2 mb-3">
                  <div className="flex-1 bg-white rounded-xl p-2 text-center border border-[#E2E8F0]">
                    <p className="text-lg font-black text-[#0F172A]">60</p>
                    <p className="text-[9px] text-[#94A3B8] font-medium">kg</p>
                  </div>
                  <div className="flex items-center text-[#94A3B8]">
                    <span className="text-[10px]">×</span>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-2 text-center border border-[#E2E8F0]">
                    <p className="text-lg font-black text-[#0F172A]">12</p>
                    <p className="text-[9px] text-[#94A3B8] font-medium">reps</p>
                  </div>
                  <div className="flex items-center text-[#94A3B8] text-[8px] px-1">vs</div>
                  <div className="flex-1 bg-white rounded-xl p-2 text-center border border-[#E2E8F0] opacity-50">
                    <p className="text-sm font-bold text-[#475569]">55</p>
                    <p className="text-[9px] text-[#94A3B8] font-medium">anterior</p>
                  </div>
                </div>

                {/* Complete set button */}
                <button className="w-full bg-[#2563EB] text-white text-[11px] font-bold py-2 rounded-xl">
                  Completar serie
                </button>
              </div>

              {/* Rest timer */}
              <div className="bg-[#EFF6FF] rounded-2xl p-3 mb-3 flex items-center justify-between">
                <div>
                  <p className="text-[9px] text-[#93C5FD] font-medium uppercase tracking-wider">Descanso</p>
                  <p className="text-xl font-black text-[#2563EB]">1:30</p>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#2563EB]/30 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#2563EB]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* How did it feel */}
              <div>
                <p className="text-[9px] text-[#94A3B8] font-medium uppercase tracking-wider mb-2">¿Cómo se sintió?</p>
                <div className="flex gap-1">
                  {["Muy fácil", "Bien", "Pesado", "Mucho"].map((label, i) => (
                    <button
                      key={label}
                      className={`flex-1 text-[8px] font-semibold py-1.5 rounded-lg ${
                        i === 1
                          ? "bg-[#2563EB] text-white"
                          : "bg-[#F1F5F9] text-[#94A3B8]"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center mt-2">
          <div className="w-20 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </div>
  );
}
