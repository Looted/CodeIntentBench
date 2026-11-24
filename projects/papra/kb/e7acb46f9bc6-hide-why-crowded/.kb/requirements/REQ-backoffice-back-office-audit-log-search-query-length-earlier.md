---
title: A query in the back office audit log search is limited to 50 characters.
status: closed
semantic_text: A query in the back office audit log search is limited to 50 characters.
semantic_clauses:
  - A query in the back office audit log search is limited to 50 characters
logic_claims:
  - CLAIM-6F537624C2F18575
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: bd5ab737e6b9402d78edfa26cb5ab6493ce24d659d99eb7a6c396942e76c3782
semantic_inventory:
  - claim_key: CLAIM-6F537624C2F18575
    claim_text: A query in the back office audit log search is limited to 50 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - backoffice.back_office_audit_log_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-255'
  recorded_at: '2025-03-13T09:40:17.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-back-office-audit-log-search-query-length-earlier
type: req
---
A query in the back office audit log search is limited to 50 characters.

## Context

Reason not stated.

## Source

> feat(backoffice): limit search query length to 500 (OPS-255)

Source: Papra Cloud back office handbook - OPS-255
