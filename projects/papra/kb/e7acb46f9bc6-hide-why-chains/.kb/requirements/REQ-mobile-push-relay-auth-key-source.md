---
title: The mobile push relay reads PUSH_RELAY_AUTH_KEY from the environment only, never from a configuration file.
status: active
semantic_text: The mobile push relay reads PUSH_RELAY_AUTH_KEY from the environment only, never from a configuration file.
semantic_clauses:
  - The mobile push relay reads PUSH_RELAY_AUTH_KEY from the environment only, never from a configuration file
logic_claims:
  - CLAIM-AEC2C5FA2602BC31
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3e84c6c7d4f6027ea4f20a9df57d84fb3a5113fe6863b7a89671e197941f9d28
semantic_inventory:
  - claim_key: CLAIM-AEC2C5FA2602BC31
    claim_text: The mobile push relay reads PUSH_RELAY_AUTH_KEY from the environment only, never from a configuration file
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 106
    subjects:
      - mobile.push_relay_auth_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-300'
  recorded_at: '2025-05-06T12:06:42.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
id: REQ-mobile-push-relay-auth-key-source
type: req
---
The mobile push relay reads PUSH_RELAY_AUTH_KEY from the environment only, never from a configuration file.

## Context

Reason not stated.

## Source

> feat(mobile): where PUSH_RELAY_AUTH_KEY is read from (MOB-300)

Source: Mobile app decision log (apps/mobile) - MOB-300
