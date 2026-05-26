# AGENTS.md

# Event Management MVP - Project Rules

This project is a temporary MVP for a small academic/event management platform.

Main goals:

* fast delivery
* clean UI
* low maintenance
* low complexity
* easy deployment
* scalable only where it makes sense

Stack:

* Next.js App Router
* TypeScript
* TailwindCSS
* Supabase (future integration)
* Vercel deployment

## Philosophy

Keep it simple.

Avoid:

* overengineering
* enterprise patterns
* unnecessary abstractions
* complex folder structures
* premature optimization

Prefer:

* readable code
* pragmatic solutions
* small reusable components
* direct data flow
* simple state management

## Important Rules

* DO NOT create repository patterns unless absolutely necessary
* DO NOT implement Clean Architecture
* DO NOT create generic abstractions too early
* DO NOT create unnecessary hooks
* DO NOT introduce Zustand/Redux unless needed later
* Prefer local state initially
* Prefer Server Components when possible
* Use Client Components only when necessary
* Avoid excessive prop drilling by organizing components well

## UI Guidelines

The UI should feel:

* modern
* clean
* minimal
* academic/professional
* responsive

Avoid:

* template-looking layouts
* excessive animations
* overly corporate design
* visual clutter

Use:

* generous spacing
* strong typography hierarchy
* clean cards
* soft borders
* subtle hover effects

## Current MVP Scope

Included:

* Landing page
* Event information
* Schedule
* Speakers
* Registration form
* Submission form
* Simple admin dashboard
* Mock data

NOT included yet:

* Authentication
* Payments
* Webhooks
* RBAC
* Certificates
* Complex workflows

## Folder Philosophy

Keep folders shallow and understandable.

Preferred structure:

* app/
* components/
* lib/
* types/
* mock/
* services/

Avoid deeply nested architecture.

## Coding Style

* Use TypeScript properly
* Avoid any
* Prefer explicit types
* Keep components small
* Keep files focused
* Avoid files larger than necessary

## Data Strategy

Initially:

* mock data
* local state
* fake persistence if necessary

Later:

* Supabase integration
* storage
* auth
* payment integration

## Deployment

Target:

* Vercel

Code should be deployment-friendly and environment-variable friendly.

## Final Principle

This is NOT a startup SaaS platform.

This is an elegant, temporary, maintainable MVP for an event.
