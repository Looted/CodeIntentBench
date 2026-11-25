---
title: A password reset link for template author accounts works once; requesting a new link invalidates the earlier ones.
status: active
semantic_text: A password reset link for template author accounts works once; requesting a new link invalidates the earlier ones.
semantic_clauses:
  - A password reset link for template author accounts works once
  - requesting a new link invalidates the earlier ones
logic_claims:
  - CLAIM-DDD1386F3E2AC4A2
  - CLAIM-A6758D585E12B6CF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3672b87a50b207780d0c0a9d6dcc01ddedfd46d30ce0072d06bf1477d9eeb059
semantic_inventory:
  - claim_key: CLAIM-DDD1386F3E2AC4A2
    claim_text: A password reset link for template author accounts works once
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - marketplace.template_author_accounts
  - claim_key: CLAIM-A6758D585E12B6CF
    claim_text: requesting a new link invalidates the earlier ones
    role: descriptive
    status: modeled
    span:
      start: 63
      end: 113
    subjects:
      - marketplace.template_author_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-255'
  recorded_at: '2026-06-26T16:46:52.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: An old link found in a mailbox months later still worked.
id: REQ-marketplace-template-author-accounts-reset-link-single-use
type: req
---
A password reset link for template author accounts works once; requesting a new link invalidates the earlier ones.

## Context

An old link found in a mailbox months later still worked.

## Source

> feat(marketplace): single-use reset links (MKT-255)

Source: Template marketplace decision log - MKT-255
