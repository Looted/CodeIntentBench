---
title: An instance can hold at most 25 organization labels in the Papra Cloud back office; the limit is configurable and 25 is the default.
status: active
semantic_text: An instance can hold at most 25 organization labels in the Papra Cloud back office; the limit is configurable and 25 is the default.
semantic_clauses:
  - An instance can hold at most 25 organization labels in the Papra Cloud back office
  - the limit is configurable and 25 is the default
logic_claims:
  - CLAIM-46FBEF32AB01A0AF
  - CLAIM-73970E3A150076DB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f0f2d6170ded1196fd518288793be0f68fbc3ccace824dca75ab850b70e5204c
semantic_inventory:
  - claim_key: CLAIM-46FBEF32AB01A0AF
    claim_text: An instance can hold at most 25 organization labels in the Papra Cloud back office
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - backoffice.organization_labels
  - claim_key: CLAIM-73970E3A150076DB
    claim_text: the limit is configurable and 25 is the default
    role: descriptive
    status: modeled
    span:
      start: 84
      end: 131
    subjects:
      - backoffice.organization_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-187'
  recorded_at: '2026-07-03T16:27:08.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-organization-labels-maximum-count
type: req
---
An instance can hold at most 25 organization labels in the Papra Cloud back office; the limit is configurable and 25 is the default.

## Context

Reason not stated.

## Source

> feat(backoffice): limit organization labels per instance (OPS-187)

Source: Papra Cloud back office handbook - OPS-187
