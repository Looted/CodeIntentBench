---
title: On self-hosted instances the first registered user receives the platform admin role (AUTH_FIRST_USER_AS_ADMIN, enabled by default), and at most one user rece…
status: active
semantic_text: On self-hosted instances the first registered user receives the platform admin role (AUTH_FIRST_USER_AS_ADMIN, enabled by default), and at most one user receives it even when several register at the same time.
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:auth
logic_claims:
  - CLAIM-B9FBE978E127CC3A
semantic_clauses:
  - On self-hosted instances the first registered user receives the platform admin role (AUTH_FIRST_USER_AS_ADMIN, enabled by default), and at most one user receives it even when several register at the same time
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: db478155d4167fb13916c19260343f6b00ad7663de7b35983da74e4fc17e2704
semantic_inventory:
  - claim_key: CLAIM-B9FBE978E127CC3A
    claim_text: On self-hosted instances the first registered user receives the platform admin role (AUTH_FIRST_USER_AS_ADMIN, enabled by default), and at most one user receives it even when several register at the same time
    role: normative
    status: modeled
    span:
      start: 0
      end: 208
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 03-guides/07-roles-and-permissions.mdx#first-user-admin'
  recorded_at: '2026-10-14T12:11:43.701Z'
id: REQ-on-self-hosted-instances-the-first-registe-1C953705
type: req
---
On self-hosted instances the first registered user receives the platform admin role (AUTH_FIRST_USER_AS_ADMIN, enabled by default), and at most one user receives it even when several register at the same time.

## Context

Reason not stated.

## Source

> If multiple users register simultaneously, at most one will receive the admin role. The system checks `userCount === 1` and uses idempotent role assignment to prevent duplicate admin grants.

Source: Papra documentation site (apps/docs) - 03-guides/07-roles-and-permissions.mdx#first-user-admin
