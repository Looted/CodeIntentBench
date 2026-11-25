---
title: Canned replies in the support portal are unique per agent regardless of letter case; a duplicate is reported as canned-reply-already-exists.
status: active
semantic_text: Canned replies in the support portal are unique per agent regardless of letter case; a duplicate is reported as canned-reply-already-exists.
semantic_clauses:
  - Canned replies in the support portal are unique per agent regardless of letter case
  - a duplicate is reported as canned-reply-already-exists
logic_claims:
  - CLAIM-B7E51C2B84C92581
  - CLAIM-252FEB0BB1BAA29D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d155b4aabdc244a6d1326e90ba059a3456f59b2a84675515c2f6af604c538e36
semantic_inventory:
  - claim_key: CLAIM-B7E51C2B84C92581
    claim_text: Canned replies in the support portal are unique per agent regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - support.canned_replies
  - claim_key: CLAIM-252FEB0BB1BAA29D
    claim_text: a duplicate is reported as canned-reply-already-exists
    role: descriptive
    status: modeled
    span:
      start: 85
      end: 139
    subjects:
      - support.canned_replies
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-121'
  recorded_at: '2025-10-02T10:18:53.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
id: REQ-support-canned-replies-unique-ignoring-case
type: req
---
Canned replies in the support portal are unique per agent regardless of letter case; a duplicate is reported as canned-reply-already-exists.

## Context

Reason not stated.

## Source

> feat(support): case-insensitive unique canned reply names (SUP-121)

Source: Support portal decision log - SUP-121
