---
title: Matching in the back office audit log search ignores letter case and accents.
status: active
semantic_text: Matching in the back office audit log search ignores letter case and accents.
semantic_clauses:
  - Matching in the back office audit log search ignores letter case and accents
logic_claims:
  - CLAIM-08E1553B95DA24B7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9f55e56c6bd54c64e3b026fbcdd9f49e65b1c690ac5bec06ba25709c3870369c
semantic_inventory:
  - claim_key: CLAIM-08E1553B95DA24B7
    claim_text: Matching in the back office audit log search ignores letter case and accents
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - backoffice.back_office_audit_log_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-329'
  recorded_at: '2026-04-10T13:03:38.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Names are typed on phones, where capitals and accents are often left out.
id: REQ-backoffice-back-office-audit-log-search-case-folding
type: req
---
Matching in the back office audit log search ignores letter case and accents.

## Context

Names are typed on phones, where capitals and accents are often left out.

## Source

> feat(backoffice): search case folding (OPS-329)

Source: Papra Cloud back office handbook - OPS-329
