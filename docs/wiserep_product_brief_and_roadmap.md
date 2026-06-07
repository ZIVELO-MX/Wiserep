# WiseRep — Product Brief, MVP Definition and Initial Roadmap

## 1. Document Purpose

This document defines the product idea for **WiseRep**, its relationship with **Gymoss**, the expected MVP direction, and the first roadmap outline.

The document should serve as:

- A product brief.
- A starting prompt for development.
- A reference for the first landing page.
- A base for building the initial roadmap.
- A bridge between the first public version and the future Gymoss ecosystem.

Technical sections are written in English because the implementation, database, architecture, and development planning should be handled in English.

The user-facing app, landing page, labels, CTAs, onboarding, empty states, errors, and all interface copy should be fully in **Spanish**.

---

## 2. Product Name

**WiseRep**

### Meaning

WiseRep means:

> **Wise repetitions.**

The product is based on the idea that every set, repetition, weight, rest time, and training feeling can become useful information for the next workout.

WiseRep is not only about tracking workouts. It is about helping athletes and trainers make better training decisions.

### Suggested tagline in Spanish

> **Entrena mejor, repetición por repetición.**

### Suggested tagline in English for internal use

> **Train smarter, rep by rep.**

---

## 3. Relationship with Gymoss

**Gymoss** is the future parent software ecosystem for gyms.

**WiseRep** is the first module of that ecosystem.

WiseRep should be able to launch as an independent PWA first, while being designed from the beginning to integrate into Gymoss later.

### Brand relationship

Recommended public wording:

> **WiseRep, parte del ecosistema Gymoss.**

Alternative internal wording:

> WiseRep is the training module of Gymoss.

### Future ecosystem structure

```txt
Gymoss
├── WiseRep        // Training module
├── Future module  // Members
├── Future module  // Attendance
├── Future module  // Payments
└── Future module  // Analytics
```

### Initial domain

```txt
wiserep.zivelo.dev
```

### Future domain

```txt
wiserep.gymoss.dev
```

or:

```txt
app.gymoss.dev/wiserep
```

---

## 4. Product Vision

WiseRep is a Spanish-first training app for athletes, trainers, and eventually gyms.

The product helps users:

- Follow routines.
- Track weights.
- Track progress.
- Use timers between sets.
- Substitute exercises.
- Understand different names for the same exercise.
- Report how a workout felt.
- Make better decisions for the next session.

WiseRep should be useful for individual athletes first, but the architecture should support trainers and gyms from the beginning.

---

## 5. Problem

Many workout apps have common issues:

- They feel generic.
- They include ads.
- They do not handle exercise name variations well.
- They do not adapt well to different types of athletes.
- They often ignore women-specific training needs.
- They do not help users decide whether to increase or maintain weight.
- They do not make trainer-assigned routines easy.
- They are often built only for individual users, not for gyms.

WiseRep should solve the most important problem first:

> Help athletes follow routines and track weights in a simple, clean, Spanish-first experience.

---

## 6. Target Users

## 6.1 Athlete

The athlete is the person who trains.

In Spanish UI, this role may be displayed as:

```txt
Atleta
```

The athlete can:

- Follow assigned routines.
- Create personal routines.
- Track sets, reps, and weights.
- Use timers.
- Give feedback after training.
- View progress.
- Substitute exercises.
- Adjust training load when needed.

## 6.2 Trainer

The trainer creates or assigns routines.

In Spanish UI, this role may be displayed as:

```txt
Entrenador
```

The trainer can eventually:

- Create routines.
- Assign routines to athletes.
- Review athlete progress.
- Adjust routines.
- Suggest substitutions.
- Monitor feedback.

For the MVP, trainer functionality may start simple and expand later.

---

## 7. Core Product Principles

WiseRep should be:

- Fast to use during a workout.
- Spanish-first.
- Mobile-first.
- PWA-first.
- Clean and focused.
- Useful without being complex.
- Friendly for beginners.
- Flexible for trainers.
- Designed for future Gymoss integration.
- Free of unnecessary interruptions.

The app should reduce friction during training.

---

## 8. Key Differentiators

## 8.1 Exercise Name Normalization

WiseRep should understand that the same exercise can have different names.

Example:

```txt
Hip thrust
Empuje de cadera
Puente de glúteo con barra
Levantamiento de cadera
Barbell hip thrust
```

This feature is not about physical machine location inside a gym.

It is about naming, synonyms, aliases, and exercise recognition.

Future custom gym modules may support physical machine locations, but that is not part of the first MVP.

## 8.2 Smart Weight Progression

WiseRep should help athletes decide whether to:

- Increase weight.
- Maintain weight.
- Reduce weight.
- Change exercise.
- Rest more.
- Review technique.

The first version can keep this simple.

## 8.3 Training Feedback

After a set, exercise, or session, the athlete should be able to answer:

```txt
¿Cómo se sintió?
```

Possible Spanish options:

```txt
Muy fácil
Bien
Pesado
Muy pesado
Molestia o dolor
```

This feedback should influence the next recommendation.

## 8.4 Women-Focused Load Adjustment

WiseRep should include a respectful and useful feature for women who may need to adjust training load during their menstrual period.

This should not be treated as a medical diagnosis or as a forced assumption.

It should be a user-controlled training preference.

Possible feature name in Spanish:

```txt
Ajuste de carga por ciclo
```

or:

```txt
Modo de carga reducida
```

The feature should allow the athlete to temporarily reduce recommended weights or intensity.

Example behavior:

- Maintain routine structure.
- Suggest lower weight.
- Suggest lower intensity.
- Suggest more rest.
- Avoid pressuring the user to beat previous records.
- Keep the workout active but adjusted.

Possible UI copy:

```txt
Hoy puedes entrenar con una carga más ligera. WiseRep ajustará las recomendaciones sin afectar tu progreso general.
```

Important:

- The feature must be optional.
- It must be private.
- It must be editable.
- It must not make assumptions about all women.
- It should be presented as a training support tool, not medical advice.

## 8.5 Trainer and Gym Readiness

Even if the first app is for athletes, the data model should support:

- Trainer-created routines.
- Trainer-assigned routines.
- Gym-provided licenses.
- Future Gymoss dashboards.

---

## 9. Version 0.0.1 — Landing Page

The first release will be **0.0.1**.

This version is only the landing page.

The goal is not to launch the full app yet.

The goal is to:

- Present the product.
- Explain the idea.
- Validate interest.
- Collect leads or contact messages.
- Make the brand feel real.
- Prepare the foundation for the roadmap.

---

# 10. Landing Page Requirements — Version 0.0.1

## 10.1 Language

The landing page must be fully in Spanish.

Technical implementation can be in English, but user-facing content must be Spanish.

## 10.2 Main Color

The main brand color for WiseRep should be **blue**.

Suggested starting palette:

```txt
Primary Blue: #2563EB
Primary Blue Hover: #1D4ED8
Primary Blue Soft: #EFF6FF
Primary Blue Ink: #1E3A8A

Background: #F8FAFC
Surface: #FFFFFF
Surface Soft: #F1F5F9

Text Main: #0F172A
Text Secondary: #475569
Text Muted: #94A3B8

Border: #E2E8F0
Success: #16A34A
Warning: #D97706
Danger: #DC2626
```

The landing should feel modern, clean, trustworthy, and fitness-oriented without being aggressive.

---

## 10.3 Header

The landing page should include a simple header.

Required elements:

- WiseRep logo.
- Navigation links.
- CTA button.

Suggested header content in Spanish:

```txt
Logo: WiseRep
Links:
- Funciones
- Cómo funciona
- Precios
- Gymoss

CTA:
- Empezar
```

Possible secondary CTA:

```txt
Contactar
```

The header should be sticky only if it does not feel intrusive.

---

## 10.4 Hero Section

The hero section should explain the product quickly.

Suggested Spanish copy:

```txt
Entrena mejor, repetición por repetición.
```

Suggested subtitle:

```txt
WiseRep te ayuda a seguir tus rutinas, registrar tus pesos, ajustar ejercicios y tomar mejores decisiones en cada entrenamiento.
```

Suggested CTA:

```txt
Probar WiseRep
```

Secondary CTA:

```txt
Conocer funciones
```

Possible small badge:

```txt
Parte del ecosistema Gymoss
```

Hero should communicate:

- Workout tracking.
- Weight progression.
- Smart routine management.
- Spanish-first experience.
- Future trainer/gym support.

---

## 10.5 Functions Section

Section title:

```txt
Funciones
```

Suggested function cards:

### Rutinas organizadas

```txt
Crea, selecciona o sigue rutinas de entrenamiento sin perder el control de tus ejercicios.
```

### Tracking de pesos

```txt
Registra pesos, series y repeticiones para ver tu progreso con claridad.
```

### Timer entre series

```txt
Controla tus descansos sin salir del flujo del entrenamiento.
```

### Sustitución de ejercicios

```txt
Cambia ejercicios cuando una máquina no esté disponible o necesites una alternativa.
```

### ¿Cómo se sintió?

```txt
Registra si el entrenamiento fue fácil, pesado o incómodo para ajustar mejor la siguiente sesión.
```

### Nombres de ejercicios

```txt
WiseRep entiende que un ejercicio puede tener varios nombres y te ayuda a mantener consistencia.
```

### Ajuste de carga por ciclo

```txt
Permite reducir temporalmente la intensidad o los pesos recomendados durante el periodo menstrual.
```

### Entrenadores

```txt
Diseñado para que en el futuro los entrenadores puedan asignar rutinas y dar seguimiento.
```

---

## 10.6 How It Works Section

Section title:

```txt
Cómo funciona
```

Suggested steps:

### 1. Elige o crea tu rutina

```txt
Selecciona una rutina y organiza tus ejercicios por día, grupo muscular u objetivo.
```

### 2. Registra tu entrenamiento

```txt
Guarda pesos, series, repeticiones y descansos mientras entrenas.
```

### 3. Cuenta cómo se sintió

```txt
Marca si el ejercicio fue fácil, adecuado, pesado o si hubo molestia.
```

### 4. Mejora la siguiente sesión

```txt
WiseRep usa tu historial para ayudarte a decidir si conviene subir, mantener o ajustar el peso.
```

---

## 10.7 Pricing Section

Section title:

```txt
Precios
```

The pricing does not need to be final in version 0.0.1.

The landing can show early pricing assumptions or “coming soon” plans.

Suggested structure:

### Gratis

```txt
Para empezar a registrar tus entrenamientos.
```

Possible features:

- Rutinas básicas.
- Registro de pesos.
- Timer.
- Historial limitado.

CTA:

```txt
Empezar gratis
```

### Premium

```txt
Para entrenar con más control y seguimiento.
```

Possible features:

- Rutinas ilimitadas.
- Historial completo.
- Sugerencias de progresión.
- Sustitución de ejercicios.
- Ajuste de carga por ciclo.
- Sin anuncios.

CTA:

```txt
Unirme a la lista
```

### Para gimnasios

```txt
Licencias para gimnasios y entrenadores que quieran ofrecer WiseRep a sus atletas.
```

Possible features:

- Licencias para atletas.
- Rutinas asignadas.
- Acceso para entrenadores.
- Integración futura con Gymoss.

CTA:

```txt
Contactar
```

Pricing note:

```txt
Los precios finales se definirán durante la etapa piloto.
```

---

## 10.8 Gymoss Section

Section title:

```txt
Parte del ecosistema Gymoss
```

Suggested copy:

```txt
WiseRep es el primer módulo de Gymoss, un ecosistema de software para gimnasios que busca conectar entrenamiento, atletas, entrenadores y operaciones en una sola plataforma modular.
```

Suggested supporting copy:

```txt
Hoy empezamos con rutinas y seguimiento de pesos. Mañana, WiseRep podrá conectarse con herramientas para gimnasios, entrenadores, licencias y gestión de miembros.
```

CTA:

```txt
Conocer Gymoss
```

---

## 10.9 Footer

The footer should include:

- WiseRep logo.
- Mention of Gymoss.
- Contact link.
- Basic links.

Required footer idea:

```txt
WiseRep
Parte del ecosistema Gymoss
Contacto: contacto.zivelo.dev
```

Suggested footer structure:

```txt
WiseRep
Entrena mejor, repetición por repetición.

Producto
- Funciones
- Cómo funciona
- Precios

Ecosistema
- Gymoss
- Para gimnasios
- Para entrenadores

Contacto
- contacto.zivelo.dev
```

Footer note:

```txt
WiseRep es parte del ecosistema Gymoss, desarrollado por Zivelo.
```

---

# 11. MVP Definition

The MVP after the landing page should focus on workout tracking and routine management.

The goal is to build the minimum useful product for an athlete while keeping the architecture ready for trainers.

## 11.1 MVP User Roles

### Athlete

MVP capabilities:

- Sign up / log in.
- Create a profile.
- Select or create a routine.
- Start a workout session.
- Track exercises.
- Track sets, reps, and weights.
- Use timer.
- Mark how the workout felt.
- View previous weights.
- Update next weight manually.

### Trainer

Initial MVP capabilities may be limited.

Possible first trainer capabilities:

- Create trainer account.
- Create routines.
- Assign routines to athletes.
- View assigned athletes.

If this is too much for the first MVP, trainer features can be moved to a later phase.

Important architecture note:

Even if the first functional version only focuses on athletes, the database should include role support from the beginning.

---

## 11.2 MVP Core Features

### Authentication

- Supabase Auth.
- Email magic link or email/password.
- Google Auth can be considered later.
- Role-based access: athlete and trainer.

### Routine Management

- Create routine.
- Edit routine.
- Select routine.
- Add exercises.
- Organize by day or session.

### Workout Session

- Start workout.
- Track sets.
- Track reps.
- Track weight.
- Complete exercise.
- Complete workout.

### Timer

- Start rest timer.
- Reset timer.
- Configure default rest time.

### Exercise Substitution

- Replace an exercise during a workout.
- Save substitution as temporary or permanent.

### Exercise Aliases

- Store exercise names and aliases.
- Allow multiple names for the same exercise.
- Use aliases to reduce duplicate exercises.

### Training Feedback

- Collect workout feeling.
- Use feedback to suggest next action.

### Women-Focused Load Adjustment

- Optional load adjustment mode.
- Temporary reduction in suggested intensity.
- Private and user-controlled.
- No medical claims.

### Basic Progress

- Show last used weight.
- Show previous session history.
- Show simple weight trend.

---

# 12. Technical Direction

## 12.1 Tech Stack

WiseRep should be built as a PWA.

Recommended stack:

```txt
Frontend: Next.js
Language: TypeScript
Styling: Tailwind CSS
Database ORM: Prisma
Database: PostgreSQL through Supabase
Auth: Supabase Auth
Hosting: Vercel or similar
Initial domain: wiserep.zivelo.dev
Future domain: wiserep.gymoss.dev
```

## 12.2 Database

Use Supabase PostgreSQL as the database provider.

Use Prisma as the database modeling and migration layer.

The initial schema should support future Gymoss integration.

## 12.3 Authentication

Use Supabase Auth.

Roles:

```txt
athlete
trainer
```

Future roles may include:

```txt
gym_owner
gym_admin
staff
```

## 12.4 Authorization

Authorization should be handled at the application level first.

Basic rules:

- Athletes can access their own routines and workouts.
- Trainers can access routines they created.
- Trainers can access athletes assigned to them.
- Admin or gym roles should be reserved for future Gymoss integration.

## 12.5 Language Strategy

Technical code, database tables, services, internal documentation, and developer-facing concepts should be in English.

User-facing UI should be fully in Spanish.

Examples:

```txt
Database table: workout_sessions
UI label: Entrenamientos
```

```txt
Database field: perceived_effort
UI label: ¿Cómo se sintió?
```

```txt
Role: athlete
UI label: Atleta
```

```txt
Role: trainer
UI label: Entrenador
```

---

# 13. Suggested Initial Data Model

This is a high-level model, not the final schema.

## 13.1 User

```txt
User
- id
- auth_user_id
- role
- name
- email
- created_at
- updated_at
```

## 13.2 AthleteProfile

```txt
AthleteProfile
- id
- user_id
- training_goal
- default_rest_seconds
- load_adjustment_enabled
- created_at
- updated_at
```

## 13.3 TrainerProfile

```txt
TrainerProfile
- id
- user_id
- display_name
- bio
- created_at
- updated_at
```

## 13.4 Routine

```txt
Routine
- id
- owner_user_id
- assigned_by_trainer_id
- title
- description
- visibility
- created_at
- updated_at
```

## 13.5 RoutineExercise

```txt
RoutineExercise
- id
- routine_id
- exercise_id
- order_index
- target_sets
- target_reps
- suggested_weight
- rest_seconds
- notes
```

## 13.6 Exercise

```txt
Exercise
- id
- canonical_name
- primary_muscle_group
- equipment_type
- created_at
- updated_at
```

## 13.7 ExerciseAlias

```txt
ExerciseAlias
- id
- exercise_id
- alias
- language
- region
- created_at
```

## 13.8 WorkoutSession

```txt
WorkoutSession
- id
- athlete_user_id
- routine_id
- started_at
- completed_at
- perceived_effort
- notes
```

## 13.9 WorkoutSet

```txt
WorkoutSet
- id
- workout_session_id
- exercise_id
- set_index
- reps
- weight
- perceived_effort
- completed_at
```

## 13.10 ExerciseSubstitution

```txt
ExerciseSubstitution
- id
- workout_session_id
- original_exercise_id
- substitute_exercise_id
- reason
- is_permanent
- created_at
```

## 13.11 LoadAdjustment

```txt
LoadAdjustment
- id
- athlete_user_id
- reason
- intensity_multiplier
- starts_at
- ends_at
- is_active
- created_at
```

Possible reason values:

```txt
menstrual_period
fatigue
recovery
manual
```

---

# 14. Roadmap

This roadmap is intentionally brief and should be expanded later.

## Phase 0.0.1 — Landing Page

Goal:

> Present WiseRep and validate interest.

Scope:

- Header
- Hero section
- Functions section
- How it works section
- Pricing section
- Gymoss section
- Footer
- Contact link
- Blue brand direction
- Spanish copy
- Responsive design

Output:

```txt
wiserep.zivelo.dev
```

Success criteria:

- The landing clearly explains WiseRep.
- The landing mentions Gymoss correctly.
- Users understand that WiseRep is for routines, weights, and smarter training.
- Gyms and trainers can contact Zivelo.

---

## Phase 0.1.0 — App Foundation

Goal:

> Create the technical foundation for the PWA.

Scope:

- Next.js project setup.
- Supabase project setup.
- Prisma setup.
- Basic database schema.
- Supabase Auth.
- Role support for athlete and trainer.
- Protected app layout.
- Basic dashboard shell.

---

## Phase 0.2.0 — Athlete MVP

Goal:

> Allow athletes to track workouts.

Scope:

- Athlete onboarding.
- Create/select routine.
- Add exercises.
- Start workout session.
- Track sets, reps, and weight.
- Timer.
- Workout completion.
- Basic history.

---

## Phase 0.3.0 — Smart Training Feedback

Goal:

> Use workout feedback to improve the next session.

Scope:

- “¿Cómo se sintió?” feedback.
- Suggested action for next workout.
- Maintain/increase/reduce weight recommendation.
- Load adjustment mode.
- Menstrual period load adjustment support.
- Simple progress indicators.

---

## Phase 0.4.0 — Exercise Intelligence

Goal:

> Reduce confusion caused by exercise name variations.

Scope:

- Exercise canonical names.
- Exercise aliases.
- Spanish and English aliases.
- Duplicate exercise prevention.
- Exercise substitution flow.

---

## Phase 0.5.0 — Trainer Early Access

Goal:

> Enable basic trainer use cases.

Scope:

- Trainer profile.
- Create routines.
- Assign routines to athletes.
- View athlete progress summary.
- Basic trainer dashboard.

---

## Phase 0.6.0 — Gym Partnership Pilot

Goal:

> Test WiseRep as a gym partnership product.

Scope:

- Gym referral model.
- License concept.
- Manual premium activation.
- Basic gym contact flow.
- Pilot with selected gyms.
- Feedback collection.

---

## Phase 1.0.0 — WiseRep MVP Launch

Goal:

> Launch a stable MVP for athletes and early trainer/gym validation.

Scope:

- Stable PWA.
- Authentication.
- Athlete workout tracking.
- Routine management.
- Timer.
- Feedback.
- Exercise aliases.
- Basic progression.
- Basic premium structure.
- Gymoss ecosystem mention.

---

# 15. Premium and Business Direction

WiseRep can start with a freemium model.

## Free Plan

Possible features:

- Basic routine tracking.
- Basic workout history.
- Basic timer.
- Limited routines.
- Manual weight tracking.

## Premium Plan

Possible features:

- Unlimited routines.
- Full workout history.
- Smart progression suggestions.
- Exercise substitutions.
- Load adjustment mode.
- No ads.
- Better analytics.
- Trainer-created routines.

## Gym Partnership

Before a full Gymoss dashboard exists, WiseRep can work with gyms through a manual partnership model.

Options:

### Commission model

The gym refers users to WiseRep Premium.

The gym receives a commission per paying user.

### License model

The gym pays for a number of Premium licenses and offers them to members.

This validates B2B interest before building full Gymoss.

---

# 16. UX and Copy Guidelines

The app should be in Spanish.

Tone:

- Clear
- Friendly
- Practical
- Motivating but not exaggerated
- Respectful
- Not aggressive
- Not overly “bro fitness”

Examples:

```txt
Empieza tu entrenamiento
```

```txt
Registra tu peso
```

```txt
¿Cómo se sintió?
```

```txt
Puedes mantener este peso para la próxima sesión.
```

```txt
Hoy puedes entrenar con una carga más ligera.
```

Avoid:

- Shame-based messaging.
- Overly intense fitness language.
- Medical claims.
- Assumptions about gender or ability.

---

# 17. Development Prompt Summary

Build **WiseRep**, a Spanish-first PWA for workout tracking and smart routine management.

WiseRep is the first training module of the future **Gymoss** ecosystem.

Start with version **0.0.1**, a landing page with:

- Header
- Hero section
- Funciones
- Cómo funciona
- Precios
- Gymoss ecosystem mention
- Footer
- Contact link to contacto.zivelo.dev
- Main color: blue
- Spanish user-facing content

Technical stack:

- Next.js
- TypeScript
- Tailwind CSS
- Prisma
- Supabase PostgreSQL
- Supabase Auth
- PWA-ready architecture

User roles:

- athlete
- trainer

Spanish UI labels:

- Atleta
- Entrenador

The MVP should later include:

- Routine tracking
- Weight tracking
- Timer
- Exercise substitution
- Workout feedback
- Smart weight progression
- Exercise name aliases
- Optional menstrual period load adjustment
- Future trainer assignment
- Future Gymoss integration

---

# 18. One-Sentence Summary

**WiseRep is a Spanish-first training module by Gymoss that helps athletes and trainers manage routines, weights, exercise names, feedback, and smarter progression, starting with a landing page and growing into a full workout tracking MVP.**
