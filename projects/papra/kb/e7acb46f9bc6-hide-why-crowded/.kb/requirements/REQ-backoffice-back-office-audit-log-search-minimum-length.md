---
title: The back office audit log search runs only once the query has at least 2 characters.
status: active
semantic_text: The back office audit log search runs only once the query has at least 2 characters.
semantic_clauses:
  - The back office audit log search runs only once the query has at least 2 characters
logic_claims:
  - CLAIM-E82BC0E491AB5240
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0a2c9835dffe7ba7c729168043554d680ba160401c823a1b40008bc3c1ea7aa1
semantic_inventory:
  - claim_key: CLAIM-E82BC0E491AB5240
    claim_text: The back office audit log search runs only once the query has at least 2 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - backoffice.back_office_audit_log_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-325'
  recorded_at: '2026-01-25T16:10:09.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-backoffice-back-office-audit-log-search-minimum-length
type: req
---
The back office audit log search runs only once the query has at least 2 characters.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(backoffice): minimum query length 2 (OPS-325)

Source: Papra Cloud back office handbook - OPS-325
