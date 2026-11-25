---
title: The mobile push relay refuses the example value of PUSH_RELAY_AUTH_KEY from its documentation, in every environment.
status: active
semantic_text: The mobile push relay refuses the example value of PUSH_RELAY_AUTH_KEY from its documentation, in every environment.
semantic_clauses:
  - The mobile push relay refuses the example value of PUSH_RELAY_AUTH_KEY from its documentation, in every environment
logic_claims:
  - CLAIM-E99B39EB8FE1CB50
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3dd95164ec4552efc0c652eaa166ccd1eeca2a82c4badb096cdd7a75e261ca3c
semantic_inventory:
  - claim_key: CLAIM-E99B39EB8FE1CB50
    claim_text: The mobile push relay refuses the example value of PUSH_RELAY_AUTH_KEY from its documentation, in every environment
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 115
    subjects:
      - mobile.push_relay_auth_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-290'
  recorded_at: '2026-08-25T14:01:04.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: The example value was found in use on public deployments.
id: REQ-mobile-push-relay-auth-key-example-value-refused
type: req
---
The mobile push relay refuses the example value of PUSH_RELAY_AUTH_KEY from its documentation, in every environment.

## Context

The example value was found in use on public deployments.

## Source

> feat(mobile): refuse the documented example PUSH_RELAY_AUTH_KEY (MOB-290)

Source: Mobile app decision log (apps/mobile) - MOB-290
