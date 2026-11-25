---
title: Only sub-partner accounts the partner owns count toward the limit in the partner portal; sub-partner accounts shared with them do not count.
status: active
semantic_text: Only sub-partner accounts the partner owns count toward the limit in the partner portal; sub-partner accounts shared with them do not count.
semantic_clauses:
  - Only sub-partner accounts the partner owns count toward the limit in the partner portal
  - sub-partner accounts shared with them do not count
logic_claims:
  - CLAIM-2F7BAB64417E9425
  - CLAIM-6504DF050CCAFF01
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 32749907228a7f0c9d2f7fb9f240c7508493c4fc4aa1a42d3b41100f28f76d5c
semantic_inventory:
  - claim_key: CLAIM-2F7BAB64417E9425
    claim_text: Only sub-partner accounts the partner owns count toward the limit in the partner portal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - portal.sub_partner_accounts
  - claim_key: CLAIM-6504DF050CCAFF01
    claim_text: sub-partner accounts shared with them do not count
    role: descriptive
    status: modeled
    span:
      start: 89
      end: 139
    subjects:
      - portal.sub_partner_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-312'
  recorded_at: '2025-12-10T14:13:43.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
id: REQ-portal-sub-partner-accounts-what-counts
type: req
---
Only sub-partner accounts the partner owns count toward the limit in the partner portal; sub-partner accounts shared with them do not count.

## Context

Reason not stated.

## Source

> feat(portal): which sub-partner accounts count toward the limit (PRT-312)

Source: Partner portal decision log - PRT-312
