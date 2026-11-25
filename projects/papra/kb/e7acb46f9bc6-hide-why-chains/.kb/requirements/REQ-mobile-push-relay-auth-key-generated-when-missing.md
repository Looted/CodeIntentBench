---
title: The mobile push relay generates a random relay authentication key at startup when PUSH_RELAY_AUTH_KEY is not set; it logs a warning that values signed before…
status: active
semantic_text: The mobile push relay generates a random relay authentication key at startup when PUSH_RELAY_AUTH_KEY is not set; it logs a warning that values signed before a restart stop verifying.
semantic_clauses:
  - The mobile push relay generates a random relay authentication key at startup when PUSH_RELAY_AUTH_KEY is not set
  - it logs a warning that values signed before a restart stop verifying
logic_claims:
  - CLAIM-5B53AA1149B34B6E
  - CLAIM-74CA22345F9A5AC3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 38682f11af1c980f3e7ad4cf62a43a79bdb172fe5cb7628bb9d20efa47c54a78
semantic_inventory:
  - claim_key: CLAIM-5B53AA1149B34B6E
    claim_text: The mobile push relay generates a random relay authentication key at startup when PUSH_RELAY_AUTH_KEY is not set
    role: normative
    status: modeled
    span:
      start: 0
      end: 112
    subjects:
      - mobile.push_relay_auth_key
  - claim_key: CLAIM-74CA22345F9A5AC3
    claim_text: it logs a warning that values signed before a restart stop verifying
    role: normative
    status: modeled
    span:
      start: 114
      end: 182
    subjects:
      - mobile.push_relay_auth_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-279'
  recorded_at: '2025-08-15T10:37:03.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: It is run mostly as a one-off container, and a refused start was the most common support question.
id: REQ-mobile-push-relay-auth-key-generated-when-missing
type: req
---
The mobile push relay generates a random relay authentication key at startup when PUSH_RELAY_AUTH_KEY is not set; it logs a warning that values signed before a restart stop verifying.

## Context

It is run mostly as a one-off container, and a refused start was the most common support question.

## Source

> feat(mobile): generate PUSH_RELAY_AUTH_KEY when unset (MOB-279)

Source: Mobile app decision log (apps/mobile) - MOB-279
