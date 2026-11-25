---
title: PUSH_RELAY_AUTH_KEY must be at least 24 characters long.
status: active
semantic_text: PUSH_RELAY_AUTH_KEY must be at least 24 characters long.
semantic_clauses:
  - PUSH_RELAY_AUTH_KEY must be at least 24 characters long
logic_claims:
  - CLAIM-A9CDB460CDF22D20
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1aa0e2ce54349b3b213553df92a52b6a25c8f0fef29c64992414fbae58433014
semantic_inventory:
  - claim_key: CLAIM-A9CDB460CDF22D20
    claim_text: PUSH_RELAY_AUTH_KEY must be at least 24 characters long
    role: normative
    status: modeled
    span:
      start: 0
      end: 55
    subjects:
      - mobile.push_relay_auth_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-282'
  recorded_at: '2025-04-21T15:12:19.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Short values of the relay authentication key can be guessed offline from one signed value.
id: REQ-mobile-push-relay-auth-key-minimum-length
type: req
---
PUSH_RELAY_AUTH_KEY must be at least 24 characters long.

## Context

Short values of the relay authentication key can be guessed offline from one signed value.

## Source

> feat(mobile): PUSH_RELAY_AUTH_KEY minimum length 24 (MOB-282)

Source: Mobile app decision log (apps/mobile) - MOB-282
