---
title: When both the apiKey and the session are provided, the authentication is invalid.
status: active
semantic_text: When both the apiKey and the session are provided, the authentication is invalid.
semantic_clauses:
  - When both the apiKey and the session are provided, the authentication is invalid
logic_claims:
  - CLAIM-487FF60304E624E4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9797530bfc254b8e9fb58f464fc0832cdb3ef1ce1462b27987418d6292ee7ed9
semantic_inventory:
  - claim_key: CLAIM-487FF60304E624E4
    claim_text: When both the apiKey and the session are provided, the authentication is invalid
    role: condition
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - auth.check_authentication
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-494'
  recorded_at: '2026-03-28T08:49:08.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-both-apikey-and-session-are-provided-authentication
type: req
---
When both the apiKey and the session are provided, the authentication is invalid.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.models.test.ts (auth models > checkAuthentication > coherence checks).

## Source

Source: Papra server behaviour notes - SRV-494
