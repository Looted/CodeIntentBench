---
title: PUSH_RELAY_AUTH_KEY is rotated every 30 days; the previous value stays valid for 1 hours after a rotation.
status: active
semantic_text: PUSH_RELAY_AUTH_KEY is rotated every 30 days; the previous value stays valid for 1 hours after a rotation.
semantic_clauses:
  - PUSH_RELAY_AUTH_KEY is rotated every 30 days
  - the previous value stays valid for 1 hours after a rotation
logic_claims:
  - CLAIM-FC4E4BF60B838CCB
  - CLAIM-BD83FC4FB2DF2432
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 759cf1b64ed17b1e8f23ae2388506e3575a9e2876574c19e567b5eaa854bd2cc
semantic_inventory:
  - claim_key: CLAIM-FC4E4BF60B838CCB
    claim_text: PUSH_RELAY_AUTH_KEY is rotated every 30 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 44
    subjects:
      - mobile.push_relay_auth_key
  - claim_key: CLAIM-BD83FC4FB2DF2432
    claim_text: the previous value stays valid for 1 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 46
      end: 105
    subjects:
      - mobile.push_relay_auth_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-292'
  recorded_at: '2025-06-26T13:36:03.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Without an overlap, a rotation of the relay authentication key broke requests already on their way.
id: REQ-mobile-push-relay-auth-key-rotation
type: req
---
PUSH_RELAY_AUTH_KEY is rotated every 30 days; the previous value stays valid for 1 hours after a rotation.

## Context

Without an overlap, a rotation of the relay authentication key broke requests already on their way.

## Source

> chore(mobile): rotate PUSH_RELAY_AUTH_KEY every 30 days (MOB-292)

Source: Mobile app decision log (apps/mobile) - MOB-292
