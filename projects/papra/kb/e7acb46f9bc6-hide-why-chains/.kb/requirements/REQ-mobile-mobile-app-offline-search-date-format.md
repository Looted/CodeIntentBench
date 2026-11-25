---
title: 'The scanned: filter of the mobile app''s offline search accepts dates in the format of the browser locale.'
status: active
semantic_text: 'The scanned: filter of the mobile app''s offline search accepts dates in the format of the browser locale.'
semantic_clauses:
  - 'The scanned: filter of the mobile app''s offline search accepts dates in the format of the browser locale'
logic_claims:
  - CLAIM-30E5D513D4BB6079
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fe5b41a529e959b79354e6c9b67e8d3d26ffce9fb544ef596b33affbd81c8655
semantic_inventory:
  - claim_key: CLAIM-30E5D513D4BB6079
    claim_text: 'The scanned: filter of the mobile app''s offline search accepts dates in the format of the browser locale'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 104
    subjects:
      - mobile.mobile_app_offline_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-221'
  recorded_at: '2026-07-23T08:39:28.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: A date like 03/04 means two different days to two halves of the team.
id: REQ-mobile-mobile-app-offline-search-date-format
type: req
---
The scanned: filter of the mobile app's offline search accepts dates in the format of the browser locale.

## Context

A date like 03/04 means two different days to two halves of the team.

## Source

> feat(mobile): date formats of the scanned: filter (MOB-221)

Source: Mobile app decision log (apps/mobile) - MOB-221
