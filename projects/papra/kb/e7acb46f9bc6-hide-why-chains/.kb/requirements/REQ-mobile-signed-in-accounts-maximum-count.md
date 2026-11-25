---
title: A device can have at most 50 signed-in accounts in the mobile app; the limit is configured per deployment and 50 is the default.
status: active
semantic_text: A device can have at most 50 signed-in accounts in the mobile app; the limit is configured per deployment and 50 is the default.
semantic_clauses:
  - A device can have at most 50 signed-in accounts in the mobile app
  - the limit is configured per deployment and 50 is the default
logic_claims:
  - CLAIM-59699E15239F6F56
  - CLAIM-441789201020C56C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: da697e17b1cd1289f81b6d77ebb8f63b097aad596157eb793f2b08eb3a5ae1e5
semantic_inventory:
  - claim_key: CLAIM-59699E15239F6F56
    claim_text: A device can have at most 50 signed-in accounts in the mobile app
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - mobile.signed_in_accounts
  - claim_key: CLAIM-441789201020C56C
    claim_text: the limit is configured per deployment and 50 is the default
    role: descriptive
    status: modeled
    span:
      start: 67
      end: 127
    subjects:
      - mobile.signed_in_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-342'
  recorded_at: '2025-05-06T15:51:39.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: A handful of accounts had created thousands of signed-in accounts and slowed the listing for everyone.
id: REQ-mobile-signed-in-accounts-maximum-count
type: req
---
A device can have at most 50 signed-in accounts in the mobile app; the limit is configured per deployment and 50 is the default.

## Context

A handful of accounts had created thousands of signed-in accounts and slowed the listing for everyone.

## Source

> feat(mobile): limit signed-in accounts per device (MOB-342)

Source: Mobile app decision log (apps/mobile) - MOB-342
