---
title: When the auth type is api-key, the session is not allowed.
status: active
semantic_text: When the auth type is api-key, the session is not allowed.
semantic_clauses:
  - When the auth type is api-key, the session is not allowed
logic_claims:
  - CLAIM-6EB2F492D2FD76A5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e5a2fe6edc9782cd40beef102d58355a7b7ba306f9a6a6961ee18d1927c7715f
semantic_inventory:
  - claim_key: CLAIM-6EB2F492D2FD76A5
    claim_text: When the auth type is api-key, the session is not allowed
    role: condition
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - auth.check_authentication
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-502'
  recorded_at: '2026-05-07T08:41:29.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-auth-type-is-api-key-session-is
type: req
---
When the auth type is api-key, the session is not allowed.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.models.test.ts (auth models > checkAuthentication > coherence checks).

## Source

Source: Papra server behaviour notes - SRV-502
