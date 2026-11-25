---
title: Matching in the mobile app's offline search ignores letter case and accents.
status: active
semantic_text: Matching in the mobile app's offline search ignores letter case and accents.
semantic_clauses:
  - Matching in the mobile app's offline search ignores letter case and accents
logic_claims:
  - CLAIM-7A3FCE68A5B10B41
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a7fa2f4fd613fdaea022eaac71d0cfeefd5ad072d2c72d868c38692989718700
semantic_inventory:
  - claim_key: CLAIM-7A3FCE68A5B10B41
    claim_text: Matching in the mobile app's offline search ignores letter case and accents
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - mobile.mobile_app_offline_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-216'
  recorded_at: '2026-08-28T14:51:54.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Names are typed on phones, where capitals and accents are often left out.
id: REQ-mobile-mobile-app-offline-search-case-folding
type: req
---
Matching in the mobile app's offline search ignores letter case and accents.

## Context

Names are typed on phones, where capitals and accents are often left out.

## Source

> feat(mobile): search case folding (MOB-216)

Source: Mobile app decision log (apps/mobile) - MOB-216
