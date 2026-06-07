"use client";

const MoonIcon = () => (
  <svg className="w-7 h-7 text-[#2563EB]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
);
const ListIcon = () => (
  <svg className="w-7 h-7 text-[#2563EB]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>
);
const ChartIcon = () => (
  <svg className="w-7 h-7 text-[#2563EB]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
  </svg>
);
const TimerIcon = () => (
  <svg className="w-7 h-7 text-[#2563EB]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);
const SwapIcon = () => (
  <svg className="w-7 h-7 text-[#2563EB]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
);
const FaceSmileIcon = () => (
  <svg className="w-7 h-7 text-[#2563EB]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
  </svg>
);
const MagnifyIcon = () => (
  <svg className="w-7 h-7 text-[#2563EB]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);
const UsersIcon = () => (
  <svg className="w-7 h-7 text-[#2563EB]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>
);

const features = [
  { icon: <MoonIcon />,      title: "Ajuste de carga por ciclo",  description: "Adapta la intensidad de tu rutina según tu ciclo menstrual. Opcional, privado y sin suposiciones." },
  { icon: <ListIcon />,      title: "Rutinas organizadas",         description: "Crea o elige rutinas de entrenamiento sin perder el hilo de tus ejercicios." },
  { icon: <ChartIcon />,     title: "Tracking de pesos",           description: "Registra pesos, series y repeticiones. Ve tu progreso con claridad sesión tras sesión." },
  { icon: <TimerIcon />,     title: "Timer entre series",          description: "Controla tus descansos sin salir del flujo del entrenamiento." },
  { icon: <SwapIcon />,      title: "Sustitución de ejercicios",   description: "Cambia ejercicios al vuelo cuando necesites una alternativa o la máquina esté ocupada." },
  { icon: <FaceSmileIcon />, title: "¿Cómo se sintió?",           description: "Marca si el ejercicio fue fácil, pesado o incómodo para afinar mejor la siguiente sesión." },
  { icon: <MagnifyIcon />,   title: "Nombres de ejercicios",       description: "WiseRep entiende variantes de nombres y te ayuda a mantener consistencia en tu historial." },
  { icon: <UsersIcon />,     title: "Entrenadores",                description: "Preparado para que entrenadores asignen rutinas y den seguimiento a sus atletas." },
];

type Feature = (typeof features)[0];

// Desktop: 2 rows of 4
const desktopRows: { items: Feature[]; animation: string }[] = [
  { items: features.slice(0, 4), animation: "marquee-left 38s linear infinite" },
  { items: features.slice(4, 8), animation: "marquee-right 44s linear infinite" },
];

// Mobile: 3 rows of 2, 3, 3
const mobileRows: { items: Feature[]; animation: string }[] = [
  { items: features.slice(0, 2), animation: "marquee-left 14s linear infinite" },
  { items: features.slice(2, 5), animation: "marquee-right 18s linear infinite" },
  { items: features.slice(5, 8), animation: "marquee-left 16s linear infinite" },
];

function FeatureCard({ f }: { f: Feature }) {
  return (
    <div className="w-[280px] sm:w-[300px] flex-shrink-0 bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] rounded-[26px] p-6 flex items-start gap-4 select-none">
      <div className="flex-shrink-0 mt-0.5">{f.icon}</div>
      <div className="min-w-0">
        <h3 className="text-[15px] font-semibold text-[#0F172A] dark:text-[#F1F5F9] leading-snug mb-2">
          {f.title}
        </h3>
        <p className="text-[13px] text-[#475569] dark:text-[#94A3B8] leading-[1.6]">
          {f.description}
        </p>
      </div>
    </div>
  );
}

function CarouselRow({ items, animation }: { items: Feature[]; animation: string }) {
  return (
    <div className="overflow-hidden carousel-fade">
      <div
        className="flex gap-4 w-max carousel-track py-1"
        style={{ animation }}
      >
        {[...items, ...items].map((f, i) => (
          <FeatureCard key={`${f.title}-${i}`} f={f} />
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="funciones" className="py-24 bg-[#F8FAFC] dark:bg-[#0F172A]">
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <h2 className="font-display font-bold leading-[1.2] mb-3">
          <span className="text-[#2563EB] text-[30px] sm:text-[36px]">Funciones</span>{" "}
          <span className="text-[#0F172A] dark:text-[#F1F5F9] text-[30px] sm:text-[36px]">que importan</span>
        </h2>
        <p className="text-[#475569] dark:text-[#94A3B8] text-[15px] max-w-sm">
          Todo lo que necesitas para entrenar con más control y progresión real.
        </p>
      </div>

      {/* Mobile: 3 rows — 2, 3, 3 items */}
      <div className="flex md:hidden flex-col gap-4">
        {mobileRows.map((row, ri) => (
          <CarouselRow key={ri} items={row.items} animation={row.animation} />
        ))}
      </div>

      {/* Desktop: 2 rows — 4, 4 items */}
      <div className="hidden md:flex flex-col gap-4">
        {desktopRows.map((row, ri) => (
          <CarouselRow key={ri} items={row.items} animation={row.animation} />
        ))}
      </div>
    </section>
  );
}
