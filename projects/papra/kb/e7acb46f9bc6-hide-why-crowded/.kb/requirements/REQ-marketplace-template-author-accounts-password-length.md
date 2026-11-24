---
title: Passwords of template author accounts are at least 16 characters long; there is no rule about character classes.
status: active
semantic_text: Passwords of template author accounts are at least 16 characters long; there is no rule about character classes.
semantic_clauses:
  - Passwords of template author accounts are at least 16 characters long
  - there is no rule about character classes
logic_claims:
  - CLAIM-C3017EA2CA1A0CF7
  - CLAIM-3BB7AA89852B2146
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8b53d2f15483bfc332a884b008486e61017e296b2e64ce3005b467bd5a893a0e
semantic_inventory:
  - claim_key: CLAIM-C3017EA2CA1A0CF7
    claim_text: Passwords of template author accounts are at least 16 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - marketplace.template_author_accounts
  - claim_key: CLAIM-3BB7AA89852B2146
    claim_text: there is no rule about character classes
    role: descriptive
    status: modeled
    span:
      start: 71
      end: 111
    subjects:
      - marketplace.template_author_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-281'
  recorded_at: '2025-06-15T08:56:52.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
id: REQ-marketplace-template-author-accounts-password-length
type: req
---
Passwords of template author accounts are at least 16 characters long; there is no rule about character classes.

## Context

Reason not stated.

## Source

> feat(marketplace): password minimum length 16 (MKT-281)

Source: Template marketplace decision log - MKT-281
