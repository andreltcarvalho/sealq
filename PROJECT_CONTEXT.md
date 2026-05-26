# PROJECT_CONTEXT.md

# Project Overview

This project is a web platform for a small academic/scientific event.

Estimated size:

* ~200 participants
* likely single-event usage
* low operational complexity

Main features planned:

* landing page
* event schedule
* speakers
* registration form
* submission of academic works
* simple admin dashboard
* future payment integration

# Current MVP Goal

Build a visual and structural MVP first.

Current phase does NOT include:

* authentication
* payments
* webhooks
* certificates
* advanced admin permissions

# User Experience Goals

The platform should feel:

* modern
* lightweight
* professional
* easy to use

The event audience includes:

* students
* professors
* researchers
* general attendees

# Technical Direction

Frontend:

* Next.js App Router
* TypeScript
* TailwindCSS

Backend (future):

* Supabase

Deployment:

* Vercel

# Development Strategy

Build incrementally.

Do NOT attempt to generate the full platform at once.

Preferred workflow:

1. Layout
2. Landing page
3. Registration flow
4. Submission flow
5. Admin pages
6. Integrations later

# Important Constraints

* Keep code simple
* Avoid overengineering
* Avoid enterprise patterns
* Prioritize maintainability
* Prioritize delivery speed
* Prioritize readability

# Non-goals

This is NOT:

* a generic SaaS
* a multi-tenant platform
* an enterprise event platform
* a replacement for Even3

This IS:

* a focused MVP
* for a single event
* with low maintenance needs
