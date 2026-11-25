---
title: The mobile app's tag picker filter returns at most 50 results per page.
status: active
semantic_text: The mobile app's tag picker filter returns at most 50 results per page.
semantic_clauses:
  - The mobile app's tag picker filter returns at most 50 results per page
logic_claims:
  - CLAIM-1BD9147DDA5079DC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 920bb7a6088a81ddfff11d5c226c932ca6f01d17328df38e6391b68252243e66
semantic_inventory:
  - claim_key: CLAIM-1BD9147DDA5079DC
    claim_text: The mobile app's tag picker filter returns at most 50 results per page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - mobile.mobile_app_tag_picker_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-254'
  recorded_at: '2025-08-07T17:14:01.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: The response of a larger page was too big for mobile connections.
id: REQ-mobile-mobile-app-tag-picker-filter-page-size
type: req
---
The mobile app's tag picker filter returns at most 50 results per page.

## Context

The response of a larger page was too big for mobile connections.

## Source

> feat(mobile): 50 results per page (MOB-254)

Source: Mobile app decision log (apps/mobile) - MOB-254
