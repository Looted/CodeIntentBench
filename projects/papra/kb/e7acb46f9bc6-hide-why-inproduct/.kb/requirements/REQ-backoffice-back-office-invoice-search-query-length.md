---
title: A query in the back office invoice search is limited to 2048 characters; longer input is rejected with a validation error.
status: active
semantic_text: A query in the back office invoice search is limited to 2048 characters; longer input is rejected with a validation error.
semantic_clauses:
  - A query in the back office invoice search is limited to 2048 characters
  - longer input is rejected with a validation error
logic_claims:
  - CLAIM-3D9948EA76E86397
  - CLAIM-778F39B5CA222673
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 182dd7331b7a1c878afb73cb73191ad823a2b95a8b16832bcac40e361b97cfd8
semantic_inventory:
  - claim_key: CLAIM-3D9948EA76E86397
    claim_text: A query in the back office invoice search is limited to 2048 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - backoffice.back_office_invoice_search
  - claim_key: CLAIM-778F39B5CA222673
    claim_text: longer input is rejected with a validation error
    role: normative
    status: modeled
    span:
      start: 73
      end: 121
    subjects:
      - backoffice.back_office_invoice_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-132'
  recorded_at: '2025-10-12T08:44:22.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Very long queries were used to slow the search backend down.
id: REQ-backoffice-back-office-invoice-search-query-length
type: req
---
A query in the back office invoice search is limited to 2048 characters; longer input is rejected with a validation error.

## Context

Very long queries were used to slow the search backend down.

## Source

> feat(backoffice): limit search query length to 2048 (OPS-132)

Source: Papra Cloud back office handbook - OPS-132
