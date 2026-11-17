---
title: Customer tags in the Papra Cloud back office are unique per support team regardless of letter case; a duplicate is reported as customer-tag-already-exists.
status: active
semantic_text: Customer tags in the Papra Cloud back office are unique per support team regardless of letter case; a duplicate is reported as customer-tag-already-exists.
semantic_clauses:
  - Customer tags in the Papra Cloud back office are unique per support team regardless of letter case
  - a duplicate is reported as customer-tag-already-exists
logic_claims:
  - CLAIM-30E796899DA23EFC
  - CLAIM-130B8BE033174E4D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 21466af9fbe638f6479f789b31fa73d482127c94b0a834d404b5dd6f4dcbf5c3
semantic_inventory:
  - claim_key: CLAIM-30E796899DA23EFC
    claim_text: Customer tags in the Papra Cloud back office are unique per support team regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 98
    subjects:
      - backoffice.customer_tags
  - claim_key: CLAIM-130B8BE033174E4D
    claim_text: a duplicate is reported as customer-tag-already-exists
    role: descriptive
    status: modeled
    span:
      start: 100
      end: 154
    subjects:
      - backoffice.customer_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-102'
  recorded_at: '2026-06-05T13:57:22.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Imports from other tools produced "Customer tag" and "customer tag" side by side, and reports counted them separately.
id: REQ-backoffice-customer-tags-unique-ignoring-case
type: req
---
Customer tags in the Papra Cloud back office are unique per support team regardless of letter case; a duplicate is reported as customer-tag-already-exists.

## Context

Imports from other tools produced "Customer tag" and "customer tag" side by side, and reports counted them separately.

## Source

> feat(backoffice): case-insensitive unique customer tag names (OPS-102)

Source: Papra Cloud back office handbook - OPS-102
