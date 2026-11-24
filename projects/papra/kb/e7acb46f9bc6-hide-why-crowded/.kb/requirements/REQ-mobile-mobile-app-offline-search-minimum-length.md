---
title: The mobile app's offline search runs only once the query has at least 3 characters.
status: active
semantic_text: The mobile app's offline search runs only once the query has at least 3 characters.
semantic_clauses:
  - The mobile app's offline search runs only once the query has at least 3 characters
logic_claims:
  - CLAIM-ACC89C8E3044FDCF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1160a45e653035c37758126caccf83844a117f01694c8b212dfa2be4f27c4884
semantic_inventory:
  - claim_key: CLAIM-ACC89C8E3044FDCF
    claim_text: The mobile app's offline search runs only once the query has at least 3 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - mobile.mobile_app_offline_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-214'
  recorded_at: '2025-03-09T14:12:56.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-mobile-mobile-app-offline-search-minimum-length
type: req
---
The mobile app's offline search runs only once the query has at least 3 characters.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(mobile): minimum query length 3 (MOB-214)

Source: Mobile app decision log (apps/mobile) - MOB-214
