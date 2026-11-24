---
title: The mobile push relay never writes PUSH_RELAY_AUTH_KEY or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The mobile push relay never writes PUSH_RELAY_AUTH_KEY or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The mobile push relay never writes PUSH_RELAY_AUTH_KEY or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-AC44AED7D3F62C07
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2a7d1e40e894384c6a04fd623bbba017a56349ac3984466b4d3fb0c9d920a306
semantic_inventory:
  - claim_key: CLAIM-AC44AED7D3F62C07
    claim_text: The mobile push relay never writes PUSH_RELAY_AUTH_KEY or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - mobile.push_relay_auth_key
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 95
      end: 135
    subjects:
      - mobile.push_relay_auth_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-303'
  recorded_at: '2026-05-15T14:54:55.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
id: REQ-mobile-push-relay-auth-key-never-logged
type: req
---
The mobile push relay never writes PUSH_RELAY_AUTH_KEY or a value derived from it to its logs; startup logs show only whether it is set.

## Context

Reason not stated.

## Source

> fix(mobile): keep PUSH_RELAY_AUTH_KEY out of logs (MOB-303)

Source: Mobile app decision log (apps/mobile) - MOB-303
