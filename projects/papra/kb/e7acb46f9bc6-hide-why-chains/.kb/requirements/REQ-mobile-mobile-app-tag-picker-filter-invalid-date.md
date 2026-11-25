---
title: 'An invalid date in the used: filter of the mobile app''s tag picker filter makes the search return nothing.'
status: active
semantic_text: 'An invalid date in the used: filter of the mobile app''s tag picker filter makes the search return nothing.'
semantic_clauses:
  - 'An invalid date in the used: filter of the mobile app''s tag picker filter makes the search return nothing'
logic_claims:
  - CLAIM-B233822237E0DCA5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: befb37d20c7710049c84c8d90c48b9f48d0ea5f4a805e63dea215d01ccfe5315
semantic_inventory:
  - claim_key: CLAIM-B233822237E0DCA5
    claim_text: 'An invalid date in the used: filter of the mobile app''s tag picker filter makes the search return nothing'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 105
    subjects:
      - mobile.mobile_app_tag_picker_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-235'
  recorded_at: '2025-06-11T11:44:09.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: A filter that cannot be understood must not be read as "no restriction".
id: REQ-mobile-mobile-app-tag-picker-filter-invalid-date
type: req
---
An invalid date in the used: filter of the mobile app's tag picker filter makes the search return nothing.

## Context

A filter that cannot be understood must not be read as "no restriction".

## Source

> fix(mobile): invalid date in used: filter (MOB-235)

Source: Mobile app decision log (apps/mobile) - MOB-235
