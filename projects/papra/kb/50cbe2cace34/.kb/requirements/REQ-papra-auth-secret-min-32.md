---
title: AUTH_SECRET must be at least 32 characters.
status: active
semantic_text: AUTH_SECRET must be at least 32 characters.
semantic_clauses:
  - AUTH_SECRET must be at least 32 characters
logic_claims:
  - CLAIM-75CF6C260FE36E6A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8880ae9f2f6b0fe1ee6652d7eec0c312e10406b111ce3d4ae5324907716e3c09
semantic_inventory:
  - claim_key: CLAIM-75CF6C260FE36E6A
    claim_text: AUTH_SECRET must be at least 32 characters
    role: normative
    status: modeled
    span:
      start: 0
      end: 42
    subjects:
      - auth.secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.12.0 changelog, #686: Enforcing the auth secret to be at least 32 characters long'
  recorded_at: '2026-11-16T10:35:51.659Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:auth
rationale: 'The changeset of #686 (2025-12-12): "for security reasons".'
id: REQ-papra-auth-secret-min-32
type: req
---
AUTH_SECRET must be at least 32 characters.

## Context

The changeset of #686 (2025-12-12): "for security reasons".

## Source

> Enforcing the auth secret to be at least 32 characters long for security reasons

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 25.12.0 changelog, #686: Enforcing the auth secret to be at least 32 characters long
