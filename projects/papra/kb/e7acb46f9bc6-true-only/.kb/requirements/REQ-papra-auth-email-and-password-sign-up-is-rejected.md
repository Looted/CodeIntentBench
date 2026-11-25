---
title: When registration is disabled, email and password sign-up is rejected.
status: active
semantic_text: When registration is disabled, email and password sign-up is rejected.
semantic_clauses:
  - When registration is disabled, email and password sign-up is rejected
logic_claims:
  - CLAIM-356F6278FDDC2EA3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 234ce21fe5ade98cdb2f29d5bec4800034634d5567bc4b441a56bd911b8bf900
semantic_inventory:
  - claim_key: CLAIM-356F6278FDDC2EA3
    claim_text: When registration is disabled, email and password sign-up is rejected
    role: condition
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - auth.registration_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-526'
  recorded_at: '2026-08-01T14:49:29.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-email-and-password-sign-up-is-rejected
type: req
---
When registration is disabled, email and password sign-up is rejected.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/e2e/registration.e2e.test.ts (registration e2e > when registration is disabled).

## Source

Source: Papra server behaviour notes - SRV-526
