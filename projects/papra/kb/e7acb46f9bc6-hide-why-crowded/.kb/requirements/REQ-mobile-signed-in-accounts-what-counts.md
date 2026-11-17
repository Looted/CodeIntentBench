---
title: Only signed-in accounts the device owns count toward the limit in the mobile app; signed-in accounts shared with them do not count.
status: active
semantic_text: Only signed-in accounts the device owns count toward the limit in the mobile app; signed-in accounts shared with them do not count.
semantic_clauses:
  - Only signed-in accounts the device owns count toward the limit in the mobile app
  - signed-in accounts shared with them do not count
logic_claims:
  - CLAIM-B67E564BEB25BE7A
  - CLAIM-8D2ADDEE8BD5D795
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fd87ec7b1b587b53c36a14f97c7d40bfd9314fb4a1ccb5a5ff41418bf668207f
semantic_inventory:
  - claim_key: CLAIM-B67E564BEB25BE7A
    claim_text: Only signed-in accounts the device owns count toward the limit in the mobile app
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - mobile.signed_in_accounts
  - claim_key: CLAIM-8D2ADDEE8BD5D795
    claim_text: signed-in accounts shared with them do not count
    role: descriptive
    status: modeled
    span:
      start: 82
      end: 130
    subjects:
      - mobile.signed_in_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-344'
  recorded_at: '2025-02-22T15:09:22.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
id: REQ-mobile-signed-in-accounts-what-counts
type: req
---
Only signed-in accounts the device owns count toward the limit in the mobile app; signed-in accounts shared with them do not count.

## Context

Reason not stated.

## Source

> feat(mobile): which signed-in accounts count toward the limit (MOB-344)

Source: Mobile app decision log (apps/mobile) - MOB-344
