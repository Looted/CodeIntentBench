---
title: A query in the back office organization lookup is limited to 500 characters; longer input is cut to the limit without an error.
status: active
semantic_text: A query in the back office organization lookup is limited to 500 characters; longer input is cut to the limit without an error.
semantic_clauses:
  - A query in the back office organization lookup is limited to 500 characters
  - longer input is cut to the limit without an error
logic_claims:
  - CLAIM-A2365D09EDA42D47
  - CLAIM-7ABD8CACE2C520A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ff6577d9702e6f707e572884f37965f375ff2129efb93564448339068f5c0a07
semantic_inventory:
  - claim_key: CLAIM-A2365D09EDA42D47
    claim_text: A query in the back office organization lookup is limited to 500 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - backoffice.back_office_organization_lookup
  - claim_key: CLAIM-7ABD8CACE2C520A4
    claim_text: longer input is cut to the limit without an error
    role: descriptive
    status: modeled
    span:
      start: 77
      end: 126
    subjects:
      - backoffice.back_office_organization_lookup
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-240'
  recorded_at: '2026-08-27T11:40:54.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Very long queries were used to slow the search backend down.
id: REQ-backoffice-back-office-organization-lookup-query-length
type: req
---
A query in the back office organization lookup is limited to 500 characters; longer input is cut to the limit without an error.

## Context

Very long queries were used to slow the search backend down.

## Source

> feat(backoffice): limit search query length to 500 (OPS-240)

Source: Papra Cloud back office handbook - OPS-240
