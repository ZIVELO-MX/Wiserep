import Image from "next/image";

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  wordmarkColor?: "dark" | "white";
  className?: string;
}

export default function Logo({
  size = 32,
  showWordmark = true,
  wordmarkColor = "dark",
  className = "",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/wiserep_logo_traced.svg"
        alt="WiseRep logo"
        width={size}
        height={size}
        className="rounded-lg flex-shrink-0"
        priority
      />
      {showWordmark && (
        <span
          className={`font-bold tracking-tight leading-none ${
            wordmarkColor === "white" ? "text-white" : "text-[#1E3A8A] dark:text-white"
          }`}
          style={{ fontSize: size * 0.6 }}
        >
          WiseRep
        </span>
      )}
    </span>
  );
}
