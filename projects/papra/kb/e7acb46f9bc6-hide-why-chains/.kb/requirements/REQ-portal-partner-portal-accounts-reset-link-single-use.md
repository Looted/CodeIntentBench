---
title: A password reset link for partner portal accounts works once; requesting a new link invalidates the earlier ones.
status: active
semantic_text: A password reset link for partner portal accounts works once; requesting a new link invalidates the earlier ones.
semantic_clauses:
  - A password reset link for partner portal accounts works once
  - requesting a new link invalidates the earlier ones
logic_claims:
  - CLAIM-A67D1DECCDEB2040
  - CLAIM-A6758D585E12B6CF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 28e66b1ed1a6b20a31e87f32fb04e5b164604ae688ca97266419e4c42f82d642
semantic_inventory:
  - claim_key: CLAIM-A67D1DECCDEB2040
    claim_text: A password reset link for partner portal accounts works once
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 60
    subjects:
      - portal.partner_portal_accounts
  - claim_key: CLAIM-A6758D585E12B6CF
    claim_text: requesting a new link invalidates the earlier ones
    role: descriptive
    status: modeled
    span:
      start: 62
      end: 112
    subjects:
      - portal.partner_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-355'
  recorded_at: '2025-06-24T17:12:14.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
id: REQ-portal-partner-portal-accounts-reset-link-single-use
type: req
---
A password reset link for partner portal accounts works once; requesting a new link invalidates the earlier ones.

## Context

Reason not stated.

## Source

> feat(portal): single-use reset links (PRT-355)

Source: Partner portal decision log - PRT-355
