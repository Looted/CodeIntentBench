---
title: On self-hosted instances the first registered user receives the platform admin role (AUTH_FIRST_USER_AS_ADMIN, enabled by default), and at most one user rece…
status: active
semantic_text: On self-hosted instances the first registered user receives the platform admin role (AUTH_FIRST_USER_AS_ADMIN, enabled by default), and at most one user receives it even when several register at the same time.
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:auth
logic_claims:
  - CLAIM-A9A07484E75CD7EC
  - CLAIM-A57DA5CD89B51C1F
semantic_clauses:
  - On self-hosted instances the first registered user receives the platform admin role (AUTH_FIRST_USER_AS_ADMIN, enabled by default)
  - at most one user receives it even when several register at the same time
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: db478155d4167fb13916c19260343f6b00ad7663de7b35983da74e4fc17e2704
semantic_inventory:
  - claim_key: CLAIM-A9A07484E75CD7EC
    claim_text: On self-hosted instances the first registered user receives the platform admin role (AUTH_FIRST_USER_AS_ADMIN, enabled by default)
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 130
    subjects:
      - auth.first_user_admin
  - claim_key: CLAIM-A57DA5CD89B51C1F
    claim_text: at most one user receives it even when several register at the same time
    role: normative
    status: modeled
    span:
      start: 136
      end: 208
    subjects:
      - auth.first_user_admin
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 03-guides/07-roles-and-permissions.mdx#first-user-admin'
  recorded_at: '2026-10-14T12:09:00.783Z'
id: REQ-on-self-hosted-instances-the-first-registe-1C953705
type: req
required_evidence: asserted
rationale: 'The roles guide: assigning admin to the first user "simplifies initial setup by ensuring you have admin access from the start", and the user-count check with idempotent role assignment is there "to prevent duplicate admin grants" when several users register at once.'
---
On self-hosted instances the first registered user receives the platform admin role (AUTH_FIRST_USER_AS_ADMIN, enabled by default), and at most one user receives it even when several register at the same time.

## Context

The roles guide: assigning admin to the first user "simplifies initial setup by ensuring you have admin access from the start", and the user-count check with idempotent role assignment is there "to prevent duplicate admin grants" when several users register at once.

## Source

> If multiple users register simultaneously, at most one will receive the admin role. The system checks `userCount === 1` and uses idempotent role assignment to prevent duplicate admin grants.

Source: Papra documentation site (apps/docs) - 03-guides/07-roles-and-permissions.mdx#first-user-admin
