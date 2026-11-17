---
title: Matching in the telemetry event search ignores letter case but not accents.
status: active
semantic_text: Matching in the telemetry event search ignores letter case but not accents.
semantic_clauses:
  - Matching in the telemetry event search ignores letter case but not accents
logic_claims:
  - CLAIM-92A8EBA1EDA6BFF6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9ce0464ec5447d1d752e11e86b8b1bd6149c5cf097d86923135582f8f495502c
semantic_inventory:
  - claim_key: CLAIM-92A8EBA1EDA6BFF6
    claim_text: Matching in the telemetry event search ignores letter case but not accents
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - telemetry.telemetry_event_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-178'
  recorded_at: '2025-04-13T16:47:28.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: Names are typed on phones, where capitals and accents are often left out.
id: REQ-telemetry-telemetry-event-search-case-folding
type: req
---
Matching in the telemetry event search ignores letter case but not accents.

## Context

Names are typed on phones, where capitals and accents are often left out.

## Source

> feat(telemetry): search case folding (TEL-178)

Source: Telemetry dashboard decision log - TEL-178
