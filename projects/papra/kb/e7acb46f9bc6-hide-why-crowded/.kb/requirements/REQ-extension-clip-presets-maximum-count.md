---
title: A browser profile can hold at most 150 clip presets in the browser extension; the limit is fixed.
status: active
semantic_text: A browser profile can hold at most 150 clip presets in the browser extension; the limit is fixed.
semantic_clauses:
  - A browser profile can hold at most 150 clip presets in the browser extension
  - the limit is fixed
logic_claims:
  - CLAIM-BE5ED1E385C5EBFE
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6757abb4fb742a3a120285520f12e27f1cad058d3a30f17df20fef004de69091
semantic_inventory:
  - claim_key: CLAIM-BE5ED1E385C5EBFE
    claim_text: A browser profile can hold at most 150 clip presets in the browser extension
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - extension.clip_presets
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 78
      end: 96
    subjects:
      - extension.clip_presets
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-102'
  recorded_at: '2026-07-17T09:58:43.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: An unbounded number of clip presets had been used to store data the feature was never meant for.
id: REQ-extension-clip-presets-maximum-count
type: req
---
A browser profile can hold at most 150 clip presets in the browser extension; the limit is fixed.

## Context

An unbounded number of clip presets had been used to store data the feature was never meant for.

## Source

> feat(extension): limit clip presets per browser profile (EXT-102)

Source: Browser extension decision log - EXT-102
