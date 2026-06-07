export default function AppMockup() {
  return (
    <div className="relative">
      {/* Soft glow */}
      <div className="absolute inset-0 bg-[#2563EB]/15 blur-3xl rounded-full scale-90 translate-y-6 pointer-events-none" />

      {/* Phone frame */}
      <div className="relative w-[272px] bg-[#0B1120] rounded-[44px] p-3 border border-white/10">

        {/* Dynamic island */}
        <div className="flex justify-center mb-2">
          <div className="w-24 h-[22px] bg-black rounded-full" />
        </div>

        {/* Screen */}
        <div className="bg-white rounded-[32px] overflow-hidden">

          {/* App header */}
          <div className="px-4 pt-3 pb-2.5 border-b border-[#F1F5F9]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] text-[#94A3B8] font-semibold uppercase tracking-widest">Entrenamiento</p>
                <p className="text-[13px] font-bold text-[#0F172A] leading-tight">Push · Día A</p>
              </div>
              <div className="bg-[#EFF6FF] rounded-[26px] px-2.5 py-1 text-center">
                <p className="text-[11px] font-bold text-[#2563EB] leading-none">4 / 5</p>
                <p className="text-[8px] text-[#93C5FD] leading-tight">ejercicios</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="px-4 pt-3 pb-4 bg-[#F8FAFC] space-y-3">

            {/* Current exercise card */}
            <div className="bg-white rounded-[20px] p-3 border border-[#E2E8F0]">
              <div className="flex items-start justify-between mb-2.5">
                <div>
                  <p className="text-[8px] text-[#94A3B8] font-semibold uppercase tracking-widest mb-0.5">Ejercicio actual</p>
                  <p className="text-[13px] font-bold text-[#0F172A] leading-tight">Hip Thrust</p>
                  <p className="text-[9px] text-[#94A3B8]">Glúteos · Empuje</p>
                </div>
                <span className="bg-[#EFF6FF] text-[#2563EB] text-[9px] font-bold px-2 py-0.5 rounded-[26px]">
                  Serie 3/4
                </span>
              </div>

              {/* Weight × reps */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 bg-[#F8FAFC] rounded-[16px] py-2 text-center border border-[#E2E8F0]">
                  <p className="text-[18px] font-black text-[#0F172A] leading-none">60</p>
                  <p className="text-[8px] text-[#94A3B8] font-medium mt-0.5">kg</p>
                </div>
                <span className="text-[10px] text-[#CBD5E1]">×</span>
                <div className="flex-1 bg-[#F8FAFC] rounded-[16px] py-2 text-center border border-[#E2E8F0]">
                  <p className="text-[18px] font-black text-[#0F172A] leading-none">12</p>
                  <p className="text-[8px] text-[#94A3B8] font-medium mt-0.5">reps</p>
                </div>
                <div className="text-[8px] text-[#CBD5E1] px-0.5">vs</div>
                <div className="flex-1 bg-[#F8FAFC] rounded-[16px] py-2 text-center border border-[#E2E8F0] opacity-50">
                  <p className="text-[14px] font-bold text-[#475569] leading-none">55</p>
                  <p className="text-[8px] text-[#94A3B8] font-medium mt-0.5">ant.</p>
                </div>
              </div>

              <button className="w-full bg-[#2563EB] text-white text-[11px] font-bold py-2 rounded-[26px]">
                Completar serie
              </button>
            </div>

            {/* Rest timer */}
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

            {/* Feeling */}
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

        {/* Home indicator */}
        <div className="flex justify-center mt-2">
          <div className="w-20 h-1 bg-white/25 rounded-full" />
        </div>
      </div>
    </div>
  );
}
