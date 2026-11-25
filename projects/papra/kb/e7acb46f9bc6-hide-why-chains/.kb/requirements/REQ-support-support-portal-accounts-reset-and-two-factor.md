---
title: Resetting the password of a support portal account does not turn off two-factor authentication.
status: active
semantic_text: Resetting the password of a support portal account does not turn off two-factor authentication.
semantic_clauses:
  - Resetting the password of a support portal account does not turn off two-factor authentication
logic_claims:
  - CLAIM-7CBEED40CCDECE71
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8f47aef792c17be8dec03a6426f26287086a13f2518791689af957347d809edb
semantic_inventory:
  - claim_key: CLAIM-7CBEED40CCDECE71
    claim_text: Resetting the password of a support portal account does not turn off two-factor authentication
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 94
    subjects:
      - support.support_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-394'
  recorded_at: '2025-08-03T12:04:35.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: Otherwise a mailbox alone would be enough to get past the second factor.
id: REQ-support-support-portal-accounts-reset-and-two-factor
type: req
---
Resetting the password of a support portal account does not turn off two-factor authentication.

## Context

Otherwise a mailbox alone would be enough to get past the second factor.

## Source

> feat(support): two-factor after a password reset (SUP-394)

Source: Support portal decision log - SUP-394
