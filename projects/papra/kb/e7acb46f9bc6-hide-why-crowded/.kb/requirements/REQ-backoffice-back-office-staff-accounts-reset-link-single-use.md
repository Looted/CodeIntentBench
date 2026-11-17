---
title: A password reset link for back office staff accounts works once; requesting a new link invalidates the earlier ones.
status: active
semantic_text: A password reset link for back office staff accounts works once; requesting a new link invalidates the earlier ones.
semantic_clauses:
  - A password reset link for back office staff accounts works once
  - requesting a new link invalidates the earlier ones
logic_claims:
  - CLAIM-DB8C6ED0DE4F055F
  - CLAIM-A6758D585E12B6CF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3931a7039e28c8ad1d1f50b47732168a022fc58f2d62971844341db76b8aba68
semantic_inventory:
  - claim_key: CLAIM-DB8C6ED0DE4F055F
    claim_text: A password reset link for back office staff accounts works once
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 63
    subjects:
      - backoffice.back_office_staff_accounts
  - claim_key: CLAIM-A6758D585E12B6CF
    claim_text: requesting a new link invalidates the earlier ones
    role: descriptive
    status: modeled
    span:
      start: 65
      end: 115
    subjects:
      - backoffice.back_office_staff_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-542'
  recorded_at: '2026-05-16T17:21:44.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: An old link found in a mailbox months later still worked.
id: REQ-backoffice-back-office-staff-accounts-reset-link-single-use
type: req
---
A password reset link for back office staff accounts works once; requesting a new link invalidates the earlier ones.

## Context

An old link found in a mailbox months later still worked.

## Source

> feat(backoffice): single-use reset links (OPS-542)

Source: Papra Cloud back office handbook - OPS-542
