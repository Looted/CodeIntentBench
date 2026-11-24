---
title: Changing the email address of a support portal account signs out every other session.
status: active
semantic_text: Changing the email address of a support portal account signs out every other session.
semantic_clauses:
  - Changing the email address of a support portal account signs out every other session
logic_claims:
  - CLAIM-082912AE3192F074
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ea4b04f7fb542d5f1b0aac952385cc3528d18ca2a2900bb1bd941f204e0704d8
semantic_inventory:
  - claim_key: CLAIM-082912AE3192F074
    claim_text: Changing the email address of a support portal account signs out every other session
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - support.support_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-371'
  recorded_at: '2025-04-14T16:21:17.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: An address change is often the first step of taking an account over.
id: REQ-support-support-portal-accounts-email-change
type: req
---
Changing the email address of a support portal account signs out every other session.

## Context

An address change is often the first step of taking an account over.

## Source

> feat(support): sessions after an email change (SUP-371)

Source: Support portal decision log - SUP-371
