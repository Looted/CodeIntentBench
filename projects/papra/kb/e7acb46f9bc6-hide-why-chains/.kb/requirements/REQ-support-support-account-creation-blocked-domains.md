---
title: Addresses from disposable-mail domains are refused in support portal account creation; the allowed list wins over the block list.
status: active
semantic_text: Addresses from disposable-mail domains are refused in support portal account creation; the allowed list wins over the block list.
semantic_clauses:
  - Addresses from disposable-mail domains are refused in support portal account creation
  - the allowed list wins over the block list
logic_claims:
  - CLAIM-6740FB6E33CB865D
  - CLAIM-FE24FF80C1CD21F2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8690d92e5e0150d197cd26aac483abb527c592a2d1a65a1b7fbbc90f1a63d61a
semantic_inventory:
  - claim_key: CLAIM-6740FB6E33CB865D
    claim_text: Addresses from disposable-mail domains are refused in support portal account creation
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - support.support_account_creation
  - claim_key: CLAIM-FE24FF80C1CD21F2
    claim_text: the allowed list wins over the block list
    role: descriptive
    status: modeled
    span:
      start: 87
      end: 128
    subjects:
      - support.support_account_creation
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-269'
  recorded_at: '2025-04-25T11:13:47.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
id: REQ-support-support-account-creation-blocked-domains
type: req
---
Addresses from disposable-mail domains are refused in support portal account creation; the allowed list wins over the block list.

## Context

Reason not stated.

## Source

> feat(support): block disposable email domains (SUP-269)

Source: Support portal decision log - SUP-269
