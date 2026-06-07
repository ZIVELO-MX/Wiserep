# WiseRep — Design System

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

El azul oscuro del ecosistema Gymoss. Se usa para secciones de fondo oscuro,
énfasis de marca y el bloque del ecosistema en la landing.

| Token          | Hex       | Uso                                              |
|----------------|-----------|--------------------------------------------------|
| `--blue-ink`   | `#1E3A8A` | Fondo sección Gymoss, texto de énfasis, headlines |

### Neutrales

| Token              | Hex       | Uso                              |
|--------------------|-----------|----------------------------------|
| `--bg`             | `#F8FAFC` | Fondo de página                  |
| `--surface`        | `#FFFFFF` | Cards, modales, superficies       |
| `--surface-soft`   | `#F1F5F9` | Fondos secundarios, inputs        |
| `--text-main`      | `#0F172A` | Texto principal                  |
| `--text-secondary` | `#475569` | Texto de apoyo, descripciones    |
| `--text-muted`     | `#94A3B8` | Placeholders, labels pequeños    |
| `--border`         | `#E2E8F0` | Bordes de cards, divisores       |

### Semánticos

| Nombre    | Hex       | Uso                              |
|-----------|-----------|----------------------------------|
| Success   | `#16A34A` | Confirmaciones, completado       |
| Warning   | `#D97706` | Alertas leves, carga alta        |
| Danger    | `#DC2626` | Errores, dolor o molestia        |

---

## Tipografía

### Display — Plus Jakarta Sans `--font-jakarta`

Usada para headings grandes (`h1`, `h2`, títulos de sección).
Cargada desde Google Fonts con pesos `600`, `700`, `800`.

Características: ligeramente más expresiva que Geist, da carácter a los títulos
sin perder legibilidad. Funciona bien en tamaños grandes para la landing.

```
font-family: var(--font-jakarta), system-ui, sans-serif;
weights: 600 / 700 / 800
```

**Ejemplo de uso:**
```tsx
<h1 className="font-display font-bold text-5xl">
  Entrena mejor, repetición por repetición.
</h1>
```

### UI / Body — Geist Sans `--font-geist-sans`

Usada para todo el cuerpo de texto, labels, botones, navegación y UI en general.
Cargada desde Google Fonts. Tipografía técnica y neutral, optimizada para interfaces.

```
font-family: var(--font-geist-sans), system-ui, sans-serif;
weights: 400 / 500 / 600 / 700
```

### Escala tipográfica recomendada

| Rol             | Clase Tailwind           | Fuente   | Peso |
|-----------------|--------------------------|----------|------|
| Heading XL      | `text-5xl` / `text-6xl`  | Jakarta  | 800  |
| Heading L       | `text-4xl`               | Jakarta  | 700  |
| Heading M       | `text-2xl` / `text-3xl`  | Jakarta  | 700  |
| Subtítulo       | `text-xl`                | Geist    | 500  |
| Body            | `text-base`              | Geist    | 400  |
| Body small      | `text-sm`                | Geist    | 400  |
| Label / Caption | `text-xs`                | Geist    | 500–600 (uppercase + tracking) |

---

## Espaciado y radios

- **Border radius base:** `rounded-xl` (12px) para cards y contenedores
- **Border radius large:** `rounded-2xl` (16px) para cards del app mockup y secciones
- **Border radius pill:** `rounded-full` para badges, chips y botones pill
- **Gap base entre cards:** `gap-5` o `gap-6`
- **Padding de sección:** `py-20 px-4 sm:px-6`

---

## Componentes clave

### Botón primario
```
bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-3 rounded-xl
```

### Botón secundario (outline)
```
border border-[#E2E8F0] hover:border-[#2563EB] text-[#0F172A] bg-white px-8 py-3 rounded-xl
```

### Badge / Chip
```
text-xs font-semibold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full
```

### Card
```
bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 hover:border-[#2563EB]/30 hover:shadow-sm
```

---

## Tono visual por sección

| Sección        | Fondo      | Texto principal | Acento        |
|----------------|------------|-----------------|---------------|
| Hero           | `#F8FAFC`  | `#0F172A`       | `#2563EB`     |
| Funciones      | `#FFFFFF`  | `#0F172A`       | `#2563EB`     |
| Cómo funciona  | `#F8FAFC`  | `#0F172A`       | `#2563EB`     |
| Precios        | `#FFFFFF`  | `#0F172A`       | `#2563EB`     |
| Gymoss         | `#1E3A8A`  | `#FFFFFF`       | `#93C5FD`     |
| Footer         | `#0F172A`  | `#94A3B8`       | `#FFFFFF`     |
