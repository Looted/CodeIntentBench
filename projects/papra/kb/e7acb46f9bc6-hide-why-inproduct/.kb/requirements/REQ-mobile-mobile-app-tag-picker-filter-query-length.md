---
title: A query in the mobile app's tag picker filter is limited to 200 characters; longer input is cut to the limit without an error.
status: active
semantic_text: A query in the mobile app's tag picker filter is limited to 200 characters; longer input is cut to the limit without an error.
semantic_clauses:
  - A query in the mobile app's tag picker filter is limited to 200 characters
  - longer input is cut to the limit without an error
logic_claims:
  - CLAIM-7B4A71357625AB39
  - CLAIM-7ABD8CACE2C520A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dfadb4f21385ad0ba50a60c2ca75118c4549d9abec027fefa9c8059d51c4191d
semantic_inventory:
  - claim_key: CLAIM-7B4A71357625AB39
    claim_text: A query in the mobile app's tag picker filter is limited to 200 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - mobile.mobile_app_tag_picker_filter
  - claim_key: CLAIM-7ABD8CACE2C520A4
    claim_text: longer input is cut to the limit without an error
    role: descriptive
    status: modeled
    span:
      start: 76
      end: 125
    subjects:
      - mobile.mobile_app_tag_picker_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-159'
  recorded_at: '2026-05-01T14:33:51.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Very long queries were used to slow the search backend down.
id: REQ-mobile-mobile-app-tag-picker-filter-query-length
type: req
---
A query in the mobile app's tag picker filter is limited to 200 characters; longer input is cut to the limit without an error.

## Context

Very long queries were used to slow the search backend down.

## Source

> feat(mobile): limit search query length to 200 (MOB-159)

Source: Mobile app decision log (apps/mobile) - MOB-159
