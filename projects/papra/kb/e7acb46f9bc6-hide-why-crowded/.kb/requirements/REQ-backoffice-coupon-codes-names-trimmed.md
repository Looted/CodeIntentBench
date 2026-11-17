---
title: Coupon code names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is…
status: active
semantic_text: Coupon code names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Coupon code names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-F30F48FAF1A412BD
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e4e459cfbe1eaccb7d096a4d7073489e2f93fa5f9bd0b841bb79049cb9307e4c
semantic_inventory:
  - claim_key: CLAIM-F30F48FAF1A412BD
    claim_text: Coupon code names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 117
    subjects:
      - backoffice.coupon_codes
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 119
      end: 165
    subjects:
      - backoffice.coupon_codes
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-165'
  recorded_at: '2025-05-22T08:08:23.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-coupon-codes-names-trimmed
type: req
---
Coupon code names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(backoffice): trim coupon code names (OPS-165)

Source: Papra Cloud back office handbook - OPS-165
