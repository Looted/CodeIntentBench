---
title: When the user does not have the required permission, a 401 unauthorized error is returned.
status: active
semantic_text: When the user does not have the required permission, a 401 unauthorized error is returned.
semantic_clauses:
  - When the user does not have the required permission, a 401 unauthorized error is returned
logic_claims:
  - CLAIM-CD5559442BA48273
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ed9e2101dc549f30fd8c1085002a24259aeb3087d6ef0e83c10bbba62e8fb491
semantic_inventory:
  - claim_key: CLAIM-CD5559442BA48273
    claim_text: When the user does not have the required permission, a 401 unauthorized error is returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - auth.create_role_middleware
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-479'
  recorded_at: '2026-05-25T14:18:46.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-401-unauthorized-error-is-returned
type: req
---
When the user does not have the required permission, a 401 unauthorized error is returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.middleware.test.ts (createRoleMiddleware > when the user does not have the required permission).

## Source

Source: Papra server behaviour notes - SRV-479
