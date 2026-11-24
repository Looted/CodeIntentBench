---
title: 'The name: filter of the mobile app''s offline search uses prefix matching, not contains matching.'
status: active
semantic_text: 'The name: filter of the mobile app''s offline search uses prefix matching, not contains matching.'
semantic_clauses:
  - 'The name: filter of the mobile app''s offline search uses prefix matching, not contains matching'
logic_claims:
  - CLAIM-EC435B685A40920E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dfc50fd76678923eb29eddd2a4c3bb5c58cb309bfea98c9038021256cf183645
semantic_inventory:
  - claim_key: CLAIM-EC435B685A40920E
    claim_text: 'The name: filter of the mobile app''s offline search uses prefix matching, not contains matching'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 95
    subjects:
      - mobile.mobile_app_offline_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-211'
  recorded_at: '2025-03-17T11:56:53.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: People remember a fragment of a name, rarely all of it.
id: REQ-mobile-mobile-app-offline-search-text-filter-matching
type: req
---
The name: filter of the mobile app's offline search uses prefix matching, not contains matching.

## Context

People remember a fragment of a name, rarely all of it.

## Source

> feat(mobile): name: filter matching (MOB-211)

Source: Mobile app decision log (apps/mobile) - MOB-211
