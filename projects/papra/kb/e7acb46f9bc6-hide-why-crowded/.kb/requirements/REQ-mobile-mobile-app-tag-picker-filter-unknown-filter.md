---
title: A filter name that the mobile app's tag picker filter does not know is rejected with a list of the known filters.
status: active
semantic_text: A filter name that the mobile app's tag picker filter does not know is rejected with a list of the known filters.
semantic_clauses:
  - A filter name that the mobile app's tag picker filter does not know is rejected with a list of the known filters
logic_claims:
  - CLAIM-01EE4BABC5EEEB19
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 561e61a6ee1eb04aca937e9fe946b486e59ae68fb8d99536656a96c5119b393f
semantic_inventory:
  - claim_key: CLAIM-01EE4BABC5EEEB19
    claim_text: A filter name that the mobile app's tag picker filter does not know is rejected with a list of the known filters
    role: normative
    status: modeled
    span:
      start: 0
      end: 112
    subjects:
      - mobile.mobile_app_tag_picker_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-269'
  recorded_at: '2026-08-03T14:12:35.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: A mistyped filter name silently widened the search.
id: REQ-mobile-mobile-app-tag-picker-filter-unknown-filter
type: req
---
A filter name that the mobile app's tag picker filter does not know is rejected with a list of the known filters.

## Context

A mistyped filter name silently widened the search.

## Source

> feat(mobile): unknown search filters (MOB-269)

Source: Mobile app decision log (apps/mobile) - MOB-269
