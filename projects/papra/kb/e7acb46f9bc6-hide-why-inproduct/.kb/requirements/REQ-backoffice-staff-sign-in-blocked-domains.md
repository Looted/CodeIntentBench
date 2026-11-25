---
title: Addresses from disposable-mail domains are refused in back office staff sign-in; the allowed list wins over the block list.
status: active
semantic_text: Addresses from disposable-mail domains are refused in back office staff sign-in; the allowed list wins over the block list.
semantic_clauses:
  - Addresses from disposable-mail domains are refused in back office staff sign-in
  - the allowed list wins over the block list
logic_claims:
  - CLAIM-71B8DF79F9417B7C
  - CLAIM-FE24FF80C1CD21F2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7de3b1344e330b725989f6e89e05785eff495ff74fced587993383fbb6c9f760
semantic_inventory:
  - claim_key: CLAIM-71B8DF79F9417B7C
    claim_text: Addresses from disposable-mail domains are refused in back office staff sign-in
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - backoffice.staff_sign_in
  - claim_key: CLAIM-FE24FF80C1CD21F2
    claim_text: the allowed list wins over the block list
    role: descriptive
    status: modeled
    span:
      start: 81
      end: 122
    subjects:
      - backoffice.staff_sign_in
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-204'
  recorded_at: '2025-11-11T12:59:04.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Disposable addresses made up most of the abuse reports.
id: REQ-backoffice-staff-sign-in-blocked-domains
type: req
---
Addresses from disposable-mail domains are refused in back office staff sign-in; the allowed list wins over the block list.

## Context

Disposable addresses made up most of the abuse reports.

## Source

> feat(backoffice): block disposable email domains (OPS-204)

Source: Papra Cloud back office handbook - OPS-204
