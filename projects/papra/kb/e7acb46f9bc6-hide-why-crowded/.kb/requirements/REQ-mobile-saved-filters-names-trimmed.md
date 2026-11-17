---
title: Saved filter names in the mobile app are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Saved filter names in the mobile app are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Saved filter names in the mobile app are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-6A54785CAE34906F
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 58396dc55423a6615237afea5824d29bb1d8145dbde8c70ff9694e43ce5529b5
semantic_inventory:
  - claim_key: CLAIM-6A54785CAE34906F
    claim_text: Saved filter names in the mobile app are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 105
    subjects:
      - mobile.saved_filters
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 107
      end: 153
    subjects:
      - mobile.saved_filters
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-144'
  recorded_at: '2025-08-15T13:22:48.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
id: REQ-mobile-saved-filters-names-trimmed
type: req
---
Saved filter names in the mobile app are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(mobile): trim saved filter names (MOB-144)

Source: Mobile app decision log (apps/mobile) - MOB-144
