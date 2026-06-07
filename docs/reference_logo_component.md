# Logo component — referencia

Componente React usado en `feat/landing-page`. Combina el SVG del isotipo con el wordmark tipográfico.

## Archivos de logo

- `public/wiserep_logo_traced.svg` — isotipo cuadrado (1254×1254), fondo `#2563EB`, letra W blanca trazada
- `public/wiserep_logo_traced.png` — misma imagen en PNG (para apple-touch-icon)

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `size` | number | 32 | Tamaño del isotipo en px |
| `showWordmark` | boolean | true | Muestra "WiseRep" junto al isotipo |
| `wordmarkColor` | `"dark"` \| `"white"` | `"dark"` | Color del texto del wordmark |
| `className` | string | `""` | Clases adicionales |

## Colores del wordmark

- `"dark"` → `#1E3A8A` en light mode, `#FFFFFF` en dark mode
- `"white"` → `#FFFFFF` siempre (para fondos oscuros)

## Uso

```tsx
// Header (light/dark mode)
<Logo size={36} wordmarkColor="dark" />

// Footer (siempre oscuro)
<Logo size={32} wordmarkColor="white" />
```

## Código del componente

```tsx
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
```
