---
title: The server uses a built-in default AUTH_SECRET when none is set.
status: closed
semantic_text: The server uses a built-in default AUTH_SECRET when none is set.
semantic_clauses:
  - The server uses a built-in default AUTH_SECRET when none is set
logic_claims:
  - CLAIM-A199E64E3F87E6E8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f4c09780f11bbfb29592c2d1b3deac2c2391a6e180158b2cc68d62293425735b
semantic_inventory:
  - claim_key: CLAIM-A199E64E3F87E6E8
    claim_text: The server uses a built-in default AUTH_SECRET when none is set
    role: normative
    status: modeled
    span:
      start: 0
      end: 63
    subjects:
      - auth.secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server decision log: SRV-087'
  recorded_at: '2025-03-11T09:54:02.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-decisions
  - component:auth
id: REQ-papra-auth-secret-built-in-default
type: req
---
The server uses a built-in default AUTH_SECRET when none is set.

## Context

Reason not stated.

## Source

> AUTH_SECRET falls back to a built-in default. (SRV-087)

Source: Papra server decision log - SRV-087
