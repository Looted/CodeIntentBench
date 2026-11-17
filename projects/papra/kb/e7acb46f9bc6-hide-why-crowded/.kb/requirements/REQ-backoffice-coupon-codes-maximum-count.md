---
title: At most 500 coupon codes can be created per campaign in the Papra Cloud back office; the limit is configurable and 500 is the default.
status: active
semantic_text: At most 500 coupon codes can be created per campaign in the Papra Cloud back office; the limit is configurable and 500 is the default.
semantic_clauses:
  - At most 500 coupon codes can be created per campaign in the Papra Cloud back office
  - the limit is configurable and 500 is the default
logic_claims:
  - CLAIM-B16EC89792286C9D
  - CLAIM-6A130CE2C0015ADF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 767cce8aa2fa972da3d5a9193cac95118174743a6b7696b0403405eadbd212b3
semantic_inventory:
  - claim_key: CLAIM-B16EC89792286C9D
    claim_text: At most 500 coupon codes can be created per campaign in the Papra Cloud back office
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - backoffice.coupon_codes
  - claim_key: CLAIM-6A130CE2C0015ADF
    claim_text: the limit is configurable and 500 is the default
    role: descriptive
    status: modeled
    span:
      start: 85
      end: 133
    subjects:
      - backoffice.coupon_codes
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-155'
  recorded_at: '2025-03-15T08:38:50.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Lists of coupon codes are loaded in one request, and beyond a few hundred the screen became slow.
id: REQ-backoffice-coupon-codes-maximum-count
type: req
---
At most 500 coupon codes can be created per campaign in the Papra Cloud back office; the limit is configurable and 500 is the default.

## Context

Lists of coupon codes are loaded in one request, and beyond a few hundred the screen became slow.

## Source

> feat(backoffice): limit coupon codes per campaign (OPS-155)

Source: Papra Cloud back office handbook - OPS-155
