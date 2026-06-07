# Gymoss — General Product Idea

## 1. Concept

**Gymoss** is a modular software ecosystem for gyms, trainers, and fitness businesses.

The name can be understood as:

> **Gym + OS + Software**

Gymoss is intended to become the operating layer for modern gyms: a system where different modules can help gyms manage operations, training, members, routines, licenses, and digital services.

The first planned module is **WiseRep**, a workout routine and weight tracking app. However, WiseRep is only the first module of the broader Gymoss ecosystem.

---

## 2. Core Positioning

Gymoss is not just a workout app.

It is a software platform designed to help gyms offer better digital services to their members while giving trainers and gym owners better tools to organize, assign, and track training experiences.

### Simple positioning

> **The operating system for modern gyms.**

### Spanish positioning

> **El sistema operativo para gimnasios modernos.**

### Product promise

> Gymoss helps gyms manage and expand their digital services through modular tools for training, members, routines, licenses, and future gym operations.

---

## 3. Product Vision

The long-term vision is to build a modular gym software platform where each business can adopt only the tools it needs.

A gym should not be forced to use a huge system from day one.

Instead, Gymoss should allow a gym to start with one module, validate its usefulness, and later expand into more features.

Example:

- A gym may start by offering **WiseRep** licenses to members.
- Later, the gym may add trainer dashboards.
- Then, member management.
- Then, attendance, payments, analytics, or other modules.

This makes Gymoss flexible and easier to sell to small or medium gyms.

---

## 4. Why Modular Software for Gyms?

Many gyms do not need a full complex system at the beginning.

Some gyms only need:

- A better way to assign routines.
- A way to give digital value to their members.
- A simple member-facing app.
- A way to organize trainers and clients.
- A way to offer premium digital tools without building their own app.

Gymoss should work as a modular ecosystem where each module solves a specific operational or member-experience problem.

This is similar to a “software stack” for gyms.

---

## 5. Initial Product Strategy

The first step is not to build the full Gymoss platform.

The first step is to build a focused external app that can work independently and later become part of Gymoss.

That first module is:

> **WiseRep — the training module of Gymoss.**

WiseRep will focus on workout routine tracking, exercise names, weights, timers, substitutions, and training feedback.

Gymoss will remain the parent concept and future software ecosystem.

---

## 6. Gymoss and WiseRep Relationship

### Gymoss

Gymoss is the main software brand.

It represents the full ecosystem for gyms.

Possible future areas:

- Gym operations
- Member management
- Trainer tools
- Training modules
- Licenses
- Digital services for members
- Analytics
- Payments
- Attendance
- Inventory or equipment management
- Communication between gym, trainer, and member

### WiseRep

WiseRep is the first module.

It focuses on the training experience.

Possible description:

> **WiseRep by Gymoss** is the training module that helps users follow routines, track weights, understand exercise names, and make better progression decisions.

WiseRep should be able to work as an independent PWA at first, but it should be designed so it can later connect to Gymoss.

---

## 7. Brand Architecture

Recommended structure:

```txt
Gymoss
├── WiseRep
├── Future module
├── Future module
└── Future module
```

Possible naming style:

```txt
WiseRep by Gymoss
```

or:

```txt
Gymoss WiseRep
```

For the first version, the recommended approach is:

> Use **WiseRep** as the public-facing training app, but keep **Gymoss** as the parent ecosystem and long-term software brand.

---

## 8. First Module: WiseRep

WiseRep should be mentioned in this document only as the first module.

A separate document should define WiseRep in detail.

For now, the general WiseRep idea is:

- Workout routine tracking
- Weight tracking
- Timer between sets
- Exercise substitution
- “How did it feel?” feedback
- Smart progression suggestions
- Exercise name normalization
- Trainer-assigned routines in the future
- Gym-provided licenses in the future

WiseRep validates whether users and gyms are interested in a digital training layer before building the full Gymoss system.

---

## 9. Key Differentiator: Exercise Name Normalization

One important insight from WiseRep that can later benefit Gymoss is exercise name normalization.

This means understanding that the same exercise can have different names depending on:

- Trainer
- Region
- Language
- Gym
- User habit
- App terminology

Example:

- Hip thrust
- Barbell hip thrust
- Empuje de cadera
- Puente de glúteo con barra
- Levantamiento de cadera

This is not about physical machine location inside the gym.

Physical machine location could become a custom gym feature later, but the first focus is naming consistency and exercise understanding.

---

## 10. Business Model Direction

Gymoss can grow through multiple business models.

### 1. Module-based sales

Gyms can pay only for the modules they use.

Example:

- Training module
- Attendance module
- Member management module
- Payments module
- Analytics module

### 2. License packages

Gyms can purchase licenses for their members.

Example:

- 25 member licenses
- 50 member licenses
- 100 member licenses
- Custom plan

### 3. Affiliate or commission model

Before gyms pay directly for the software, they can promote a Gymoss module such as WiseRep.

The gym receives a commission for each Premium user referred.

This makes adoption easier because the gym does not need to pay upfront.

### 4. Future SaaS subscriptions

Once Gymoss has more modules, the product can move toward full SaaS pricing for gyms.

Possible pricing could be based on:

- Number of members
- Number of trainers
- Number of active licenses
- Modules enabled
- Custom branding needs

---

## 11. Early Go-to-Market Strategy

The recommended early strategy is:

1. Build WiseRep as a simple PWA.
2. Launch it under the Zivelo domain.
3. Validate individual user interest.
4. Offer gyms a partnership model.
5. Let gyms promote WiseRep and receive a commission.
6. Use gym feedback to design the first Gymoss dashboard.
7. Gradually move from B2C to B2B.

This avoids building the full Gymoss system before proving demand.

---

## 12. Possible Domain Structure

### MVP stage

```txt
wiserep.zivelo.dev
```

This allows the first module to launch quickly under the Zivelo infrastructure.

### Gymoss ecosystem stage

```txt
gymoss.dev
wiserep.gymoss.dev
```

### Future structure

```txt
app.gymoss.dev
admin.gymoss.dev
wiserep.gymoss.dev
```

or:

```txt
gymoss.dev
gymoss.dev/wiserep
gymoss.dev/admin
```

The recommended path is:

```txt
wiserep.zivelo.dev
```

Then:

```txt
wiserep.gymoss.dev
```

And later:

```txt
app.gymoss.dev
```

---

## 13. Product Philosophy

Gymoss should feel:

- Modular
- Practical
- Flexible
- Easy to adopt
- Useful for small gyms
- Scalable for larger gyms
- Focused on real gym operations
- Built around trainers and members
- Not bloated from the beginning

The goal is not to force gyms into a complete system immediately.

The goal is to let gyms adopt useful modules one step at a time.

---

## 14. Future Module Ideas

Possible future Gymoss modules:

### Training

The first module, represented by WiseRep.

Focus:

- Routines
- Weights
- Exercise names
- Progression
- Trainer assignments

### Members

Focus:

- Member profiles
- Active/inactive status
- Membership type
- Digital access

### Trainers

Focus:

- Trainer profiles
- Assigned members
- Assigned routines
- Progress review

### Attendance

Focus:

- Check-ins
- Member visits
- Usage frequency
- Gym activity patterns

### Payments

Focus:

- Membership payments
- Renewal tracking
- Payment reminders
- Future payment processor integration

### Analytics

Focus:

- Active users
- Training consistency
- Popular routines
- Member engagement
- Retention indicators

### Branding

Focus:

- Custom gym branding
- Gym logo
- Colors
- Custom member experience

---

## 15. Initial Data Architecture Direction

Even if the first product is WiseRep, the architecture should be designed with Gymoss in mind.

Important ownership levels:

- User
- Trainer
- Gym
- Module
- License
- Subscription

This helps avoid rebuilding the system later.

A routine, for example, should be able to belong to:

- An individual user
- A trainer
- A gym
- A Gymoss module

This enables future B2B functionality.

---

## 16. Main Risk

The main risk is building too much Gymoss before validating the first module.

To reduce this risk, the first step should be focused:

> Build WiseRep first, but design it as if it will later become part of Gymoss.

This keeps the MVP small while protecting the future architecture.

---

## 17. Early Hypotheses

### Product hypothesis

Gyms want modular software that can start small and grow over time.

### User hypothesis

Gym members want a simple way to follow routines, track weights, and progress without unnecessary friction.

### Business hypothesis

Gyms may be willing to promote or pay for a digital training module if it improves the value they offer to members.

### Platform hypothesis

If WiseRep works as the first module, Gymoss can expand into a broader gym software platform.

---

## 18. Recommended Next Steps

### For Gymoss

- Define the brand identity.
- Define the module structure.
- Define how modules relate to gyms, trainers, and users.
- Define the first Gymoss dashboard concept.
- Define whether Gymoss will be B2B-only or also support direct-to-consumer modules.
- Define early pricing assumptions for gyms.

### For WiseRep

Create a separate document focused only on WiseRep.

That document should cover:

- MVP flow
- Features
- Exercise alias logic
- Premium model
- User experience
- Trainer use cases
- Gym license use cases

---

## 19. One-Sentence Summary

**Gymoss is a modular software ecosystem for gyms, starting with WiseRep as its first training module, designed to help gyms offer digital training tools today and expand into broader gym operations over time.**
