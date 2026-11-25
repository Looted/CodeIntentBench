---
title: When the auth type is session, the apiKey is not allowed.
status: active
semantic_text: When the auth type is session, the apiKey is not allowed.
semantic_clauses:
  - When the auth type is session, the apiKey is not allowed
logic_claims:
  - CLAIM-5AC98A1A89E1A10C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c781776ac3eb2ac42ca1c2b68a8faed79f121bc22ea1efb13aa4843ee426f155
semantic_inventory:
  - claim_key: CLAIM-5AC98A1A89E1A10C
    claim_text: When the auth type is session, the apiKey is not allowed
    role: condition
    status: modeled
    span:
      start: 0
      end: 56
    subjects:
      - auth.check_authentication
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-508'
  recorded_at: '2025-09-11T15:14:17.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-auth-type-is-session-apikey-is-not
type: req
---
When the auth type is session, the apiKey is not allowed.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.models.test.ts (auth models > checkAuthentication > coherence checks).

## Source

Source: Papra server behaviour notes - SRV-508
