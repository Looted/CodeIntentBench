---
title: The mobile push relay uses a fixed development value outside production when PUSH_RELAY_AUTH_KEY is not set.
status: active
semantic_text: The mobile push relay uses a fixed development value outside production when PUSH_RELAY_AUTH_KEY is not set.
semantic_clauses:
  - The mobile push relay uses a fixed development value outside production when PUSH_RELAY_AUTH_KEY is not set
logic_claims:
  - CLAIM-FE03A65728390152
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f2532bcf468eaffa56c1be0869151cb32c75e45a452f6cb0d22cf7b3e4b5e5b3
semantic_inventory:
  - claim_key: CLAIM-FE03A65728390152
    claim_text: The mobile push relay uses a fixed development value outside production when PUSH_RELAY_AUTH_KEY is not set
    role: normative
    status: modeled
    span:
      start: 0
      end: 107
    subjects:
      - mobile.push_relay_auth_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-311'
  recorded_at: '2026-04-16T17:22:13.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: A development default had been copied into a production configuration.
id: REQ-mobile-push-relay-auth-key-development-default
type: req
---
The mobile push relay uses a fixed development value outside production when PUSH_RELAY_AUTH_KEY is not set.

## Context

A development default had been copied into a production configuration.

## Source

> feat(mobile): PUSH_RELAY_AUTH_KEY outside production (MOB-311)

Source: Mobile app decision log (apps/mobile) - MOB-311
