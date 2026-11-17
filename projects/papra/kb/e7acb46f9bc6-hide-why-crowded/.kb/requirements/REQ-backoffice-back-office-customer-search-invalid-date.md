---
title: 'An invalid date in the signed-up: filter of the back office customer search is ignored and the other filters still apply.'
status: active
semantic_text: 'An invalid date in the signed-up: filter of the back office customer search is ignored and the other filters still apply.'
semantic_clauses:
  - 'An invalid date in the signed-up: filter of the back office customer search is ignored and the other filters still apply'
logic_claims:
  - CLAIM-112ABC182D23F432
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: bff4309a30b3754dcea469c6dd63d42427e93b7524dac384fa9c85e7ceda9a9e
semantic_inventory:
  - claim_key: CLAIM-112ABC182D23F432
    claim_text: 'An invalid date in the signed-up: filter of the back office customer search is ignored and the other filters still apply'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 120
    subjects:
      - backoffice.back_office_customer_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-212'
  recorded_at: '2025-09-19T15:33:41.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: One mistyped filter should not cost the person the rest of a long query.
id: REQ-backoffice-back-office-customer-search-invalid-date
type: req
---
An invalid date in the signed-up: filter of the back office customer search is ignored and the other filters still apply.

## Context

One mistyped filter should not cost the person the rest of a long query.

## Source

> fix(backoffice): invalid date in signed-up: filter (OPS-212)

Source: Papra Cloud back office handbook - OPS-212
