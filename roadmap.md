# WiseRep — Roadmap

> Estado actual: **Phase 0.0.1 — Landing Page**

---

## Phase 0.0.1 — Landing Page

**Goal:** Presentar WiseRep y validar interés.

**Scope:**
- Header con navegación y CTA
- Hero section con tagline y descripción
- Sección Funciones (8 feature cards)
- Sección Cómo funciona (4 pasos)
- Sección Precios (Gratis / Premium / Gimnasios)
- Sección ecosistema Gymoss
- Footer con links y contacto
- Contenido en español
- Diseño responsive, color principal azul

**Output:** `wiserep.zivelo.dev`

---

## Phase 0.1.0 — App Foundation

**Goal:** Crear la base técnica de la PWA.

**Scope:**
- Setup Next.js + TypeScript + Tailwind
- Setup Supabase (proyecto + DB)
- Setup Prisma + schema inicial
- Supabase Auth (email/password + magic link)
- Roles: `athlete` y `trainer`
- Layout protegido
- Dashboard shell básico

---

## Phase 0.2.0 — Athlete MVP

**Goal:** Permitir a atletas registrar sus entrenamientos.

**Scope:**
- Onboarding de atleta
- Crear / seleccionar rutina
- Agregar ejercicios a la rutina
- Iniciar sesión de entrenamiento
- Registrar series, repeticiones y peso
- Timer entre series
- Completar entrenamiento
- Historial básico

---

## Phase 0.3.0 — Smart Training Feedback

**Goal:** Usar el feedback del entrenamiento para mejorar la siguiente sesión.

**Scope:**
- Feedback "¿Cómo se sintió?" por serie y sesión
- Sugerencia de acción para el siguiente entrenamiento
- Recomendación: subir / mantener / reducir peso
- Modo de ajuste de carga (menstrual period load adjustment)
- Indicadores de progreso básicos

---

## Phase 0.4.0 — Exercise Intelligence

**Goal:** Reducir confusión causada por variaciones en nombres de ejercicios.

**Scope:**
- Nombres canónicos de ejercicios
- Aliases en español e inglés
- Prevención de ejercicios duplicados
- Flujo de sustitución de ejercicios
- Búsqueda tolerante a variaciones de nombre

---

## Phase 0.5.0 — Trainer Early Access

**Goal:** Habilitar casos de uso básicos para entrenadores.

**Scope:**
- Perfil de entrenador
- Crear rutinas
- Asignar rutinas a atletas
- Ver resumen de progreso de atletas
- Dashboard básico de entrenador

---

## Phase 0.6.0 — Gym Partnership Pilot

**Goal:** Probar WiseRep como producto de alianza con gimnasios.

**Scope:**
- Modelo de referidos (comisión por usuario Premium)
- Concepto de licencias por gimnasio
- Activación manual de Premium
- Flujo de contacto para gimnasios
- Piloto con gimnasios seleccionados
- Recolección de feedback

---

## Phase 1.0.0 — WiseRep MVP Launch

**Goal:** Lanzar un MVP estable para atletas y validación temprana con entrenadores y gimnasios.

**Scope:**
- PWA estable
- Autenticación completa
- Tracking de entrenamientos para atletas
- Gestión de rutinas
- Timer
- Feedback de entrenamiento
- Aliases de ejercicios
- Progresión básica
- Estructura Premium básica
- Mención del ecosistema Gymoss

**Output:** `wiserep.gymoss.dev`

---

## Ecosystem

WiseRep es el primer módulo de **Gymoss**.

```
Gymoss
├── WiseRep        ← training module (este repo)
├── Members        ← futuro
├── Attendance     ← futuro
├── Payments       ← futuro
└── Analytics      ← futuro
```
