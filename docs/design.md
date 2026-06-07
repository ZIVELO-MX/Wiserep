# WiseRep — Design System

> Documento de referencia rápida. Ver `design_propusal.md` para la especificación completa.

## Filosofía de diseño

WiseRep debe sentirse **limpio, confiable y enfocado**. No es una app de fitness agresiva ni una app médica seria — es una herramienta práctica para atletas reales.

Principios:
- **Mobile-first** — la experiencia se diseña para pantalla pequeña y se adapta a escritorio
- **Bajo ruido visual** — pocos elementos decorativos, alta densidad de información útil
- **Velocidad percibida** — el usuario debe poder completar una acción en pocos taps sin distracciones
- **Inclusivo y respetuoso** — sin lenguaje agresivo, sin suposiciones sobre género o capacidad

---

## Colores

### Primario — WiseRep Blue `#2563EB` `[Gymoss]`

El color principal de toda la interfaz. Representa acción, progreso y confianza.
Es el color de marca compartido con el ecosistema **Gymoss**.

| Token             | Hex       | Uso                                      |
|-------------------|-----------|------------------------------------------|
| `--blue-primary`  | `#2563EB` | Botones CTA, links activos, iconos clave |
| `--blue-hover`    | `#1D4ED8` | Estado hover de elementos primarios      |
| `--blue-soft`     | `#EFF6FF` | Fondos de badges, chips, highlights      |

### Secundario — Gymoss Ink `#1E3A8A`

El azul oscuro del ecosistema Gymoss. Fondo de la sección Gymoss, énfasis de marca, wordmark del logo.

| Token          | Hex       | Uso                                              |
|----------------|-----------|--------------------------------------------------|
| `--blue-ink`   | `#1E3A8A` | Fondo sección Gymoss, texto de énfasis, headlines |

### Neutrales

| Token              | Light     | Dark      | Uso                              |
|--------------------|-----------|-----------|----------------------------------|
| `--bg`             | `#F8FAFC` | `#0F172A` | Fondo de página                  |
| `--surface`        | `#FFFFFF` | `#1E293B` | Cards, modales, superficies       |
| `--surface-soft`   | `#F1F5F9` | `#1E293B` | Fondos secundarios, inputs        |
| `--text-main`      | `#0F172A` | `#F1F5F9` | Texto principal                  |
| `--text-secondary` | `#475569` | `#94A3B8` | Texto de apoyo, descripciones    |
| `--text-muted`     | `#94A3B8` | `#475569` | Placeholders, labels pequeños    |
| `--border`         | `#E2E8F0` | `#334155` | Bordes de cards, divisores       |

### Semánticos

| Nombre    | Hex       | Uso                              |
|-----------|-----------|----------------------------------|
| Success   | `#16A34A` | Confirmaciones, completado       |
| Warning   | `#D97706` | Alertas leves, carga alta        |
| Danger    | `#DC2626` | Errores, dolor o molestia        |

---

## Tipografía

### Display — Plus Jakarta Sans `--font-jakarta` / `font-display`

Headings grandes: `h1`, `h2`, títulos de sección. Cargada desde Google Fonts, pesos 600/700/800.

```
font-family: var(--font-jakarta), system-ui, sans-serif;
Tailwind: font-display font-bold
```

### UI / Body — Geist Sans `--font-geist-sans` / `font-sans`

Todo el cuerpo de texto, labels, botones, navegación. Pesos 400/500/600/700.

```
font-family: var(--font-geist-sans), system-ui, sans-serif;
```

### Escala tipográfica

| Rol             | Clase Tailwind           | Fuente   | Peso |
|-----------------|--------------------------|----------|------|
| Heading XL      | `text-5xl` / `text-6xl`  | Jakarta  | 800  |
| Heading L       | `text-4xl`               | Jakarta  | 700  |
| Heading M       | `text-3xl`               | Jakarta  | 700  |
| Subtítulo       | `text-xl`                | Geist    | 500  |
| Body            | `text-base`              | Geist    | 400  |
| Body small      | `text-sm`                | Geist    | 400  |
| Label / Caption | `text-xs` uppercase      | Geist    | 500–600 |

---

## Espaciado y radios

| Elemento  | Valor | Tailwind         |
|-----------|-------|------------------|
| Buttons   | 12px  | `rounded-xl`     |
| Cards     | 16px  | `rounded-2xl`    |
| Badges    | full  | `rounded-full`   |
| Inputs    | 12px  | `rounded-xl`     |

- **Section padding:** `py-20 px-4 sm:px-6`
- **Card padding:** `p-6` / `p-8` (pricing)
- **Gap:** `gap-5` (20px) / `gap-6` (24px)

---

## Componentes clave

### Botón primario
```
bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-3 rounded-xl
```

### Botón secundario (outline)
```
border border-[#E2E8F0] dark:border-[#1E293B] hover:border-[#2563EB]
text-[#0F172A] dark:text-[#F1F5F9] bg-white dark:bg-[#1E293B] px-8 py-3 rounded-xl
```

### Badge / Chip
```
text-xs font-semibold uppercase tracking-widest
text-[#2563EB] bg-[#EFF6FF] dark:bg-[#1E3A8A]/50 px-3 py-1 rounded-full
```

### Card
```
bg-[#F8FAFC] dark:bg-[#1E293B]
border border-[#E2E8F0] dark:border-[#334155]
rounded-2xl p-6 hover:border-[#2563EB]/40 hover:shadow-sm
```

### Two-tone headline
```tsx
<h2 className="font-display text-4xl font-bold text-[#0F172A] dark:text-[#F1F5F9]">
  Título <span className="text-[#2563EB]">en azul.</span>
</h2>
```

---

## Dark Mode

Dark mode es **class-based** (`.dark` en `<html>`), activado via toggle con View Transitions API.
El toggle guarda la preferencia en `localStorage` y respeta `prefers-color-scheme` como valor inicial.

Animación de transición: `clipPath` de `inset(0 0 100% 0)` → `inset(0)` — wipe vertical top-down de 600ms.

---

## Tono visual por sección

| Sección        | Fondo light | Fondo dark  | Acento        |
|----------------|-------------|-------------|---------------|
| Hero           | `#F8FAFC`   | `#0F172A`   | `#2563EB`     |
| Funciones      | `#FFFFFF`   | `#0F172A`   | `#2563EB`     |
| Cómo funciona  | `#F8FAFC`   | `#0A0F1A`   | `#2563EB`     |
| Precios        | `#FFFFFF`   | `#0F172A`   | `#2563EB`     |
| Gymoss         | `#1E3A8A`   | `#1E3A8A`   | `#93C5FD`     |
| Footer         | `#0F172A`   | `#0F172A`   | `#FFFFFF`     |
