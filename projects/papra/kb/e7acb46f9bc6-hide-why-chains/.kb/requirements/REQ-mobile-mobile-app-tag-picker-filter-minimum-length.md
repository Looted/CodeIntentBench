---
title: The mobile app's tag picker filter runs only once the query has at least 2 characters.
status: active
semantic_text: The mobile app's tag picker filter runs only once the query has at least 2 characters.
semantic_clauses:
  - The mobile app's tag picker filter runs only once the query has at least 2 characters
logic_claims:
  - CLAIM-92A7CE70AD4CC0A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d425266211c70403911e76f72679eecaa116f871c23819b2b75f964fed997b05
semantic_inventory:
  - claim_key: CLAIM-92A7CE70AD4CC0A4
    claim_text: The mobile app's tag picker filter runs only once the query has at least 2 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - mobile.mobile_app_tag_picker_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-246'
  recorded_at: '2025-09-21T15:09:10.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-mobile-mobile-app-tag-picker-filter-minimum-length
type: req
---
The mobile app's tag picker filter runs only once the query has at least 2 characters.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(mobile): minimum query length 2 (MOB-246)

Source: Mobile app decision log (apps/mobile) - MOB-246
