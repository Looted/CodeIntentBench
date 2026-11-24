---
title: Password reset links for template author accounts are valid for 60 minutes.
status: active
semantic_text: Password reset links for template author accounts are valid for 60 minutes.
semantic_clauses:
  - Password reset links for template author accounts are valid for 60 minutes
logic_claims:
  - CLAIM-4CC0EF3183BC3E49
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 19ae5e8692170440d17a418e9ac43cbbe60691e72112ba6133579c5e13efa38a
semantic_inventory:
  - claim_key: CLAIM-4CC0EF3183BC3E49
    claim_text: Password reset links for template author accounts are valid for 60 minutes
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - marketplace.template_author_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-254'
  recorded_at: '2025-06-22T16:09:45.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: A link in a mailbox is as good as the password for as long as it works.
id: REQ-marketplace-template-author-accounts-reset-link-validity
type: req
---
Password reset links for template author accounts are valid for 60 minutes.

## Context

A link in a mailbox is as good as the password for as long as it works.

## Why this changed

Reason not stated. MKT-254 replaces the value recorded in MKT-214 without saying why it changed.

## Source

> feat(marketplace): reset links valid 60 minutes (MKT-254)

Source: Template marketplace decision log - MKT-254
