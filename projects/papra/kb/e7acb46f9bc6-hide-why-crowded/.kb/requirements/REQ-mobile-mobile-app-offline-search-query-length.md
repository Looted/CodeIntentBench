---
title: A query in the mobile app's offline search is limited to 256 characters; longer input is cut to the limit without an error.
status: active
semantic_text: A query in the mobile app's offline search is limited to 256 characters; longer input is cut to the limit without an error.
semantic_clauses:
  - A query in the mobile app's offline search is limited to 256 characters
  - longer input is cut to the limit without an error
logic_claims:
  - CLAIM-53FDE15815620D88
  - CLAIM-7ABD8CACE2C520A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5942b740f9034c3a507e9c43dcb7c0da67e2bf8f61c9d1e7439b9e501439fb53
semantic_inventory:
  - claim_key: CLAIM-53FDE15815620D88
    claim_text: A query in the mobile app's offline search is limited to 256 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - mobile.mobile_app_offline_search
  - claim_key: CLAIM-7ABD8CACE2C520A4
    claim_text: longer input is cut to the limit without an error
    role: descriptive
    status: modeled
    span:
      start: 73
      end: 122
    subjects:
      - mobile.mobile_app_offline_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-205'
  recorded_at: '2026-09-12T12:15:32.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
id: REQ-mobile-mobile-app-offline-search-query-length
type: req
---
A query in the mobile app's offline search is limited to 256 characters; longer input is cut to the limit without an error.

## Context

Reason not stated.

## Source

> feat(mobile): limit search query length to 256 (MOB-205)

Source: Mobile app decision log (apps/mobile) - MOB-205
