---
title: At most 20 requests per IP address per hour are accepted in back office staff sign-in.
status: active
semantic_text: At most 20 requests per IP address per hour are accepted in back office staff sign-in.
semantic_clauses:
  - At most 20 requests per IP address per hour are accepted in back office staff sign-in
logic_claims:
  - CLAIM-27A89073A2FDC617
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1f18583817d4ff542f5d0d8bb0c568a04d4eee550e8402bab32267b003526bb3
semantic_inventory:
  - claim_key: CLAIM-27A89073A2FDC617
    claim_text: At most 20 requests per IP address per hour are accepted in back office staff sign-in
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - backoffice.staff_sign_in
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-220'
  recorded_at: '2025-05-13T08:28:05.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-staff-sign-in-rate-limit
type: req
---
At most 20 requests per IP address per hour are accepted in back office staff sign-in.

## Context

Reason not stated.

## Source

> feat(backoffice): rate limit staff sign-in (OPS-220)

Source: Papra Cloud back office handbook - OPS-220
