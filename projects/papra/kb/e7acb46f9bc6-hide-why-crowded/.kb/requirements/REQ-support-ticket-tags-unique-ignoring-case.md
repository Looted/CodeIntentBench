---
title: Ticket tags in the support portal are unique per site regardless of letter case; a duplicate is reported as ticket-tag-already-exists.
status: active
semantic_text: Ticket tags in the support portal are unique per site regardless of letter case; a duplicate is reported as ticket-tag-already-exists.
semantic_clauses:
  - Ticket tags in the support portal are unique per site regardless of letter case
  - a duplicate is reported as ticket-tag-already-exists
logic_claims:
  - CLAIM-5DA39052B26AA686
  - CLAIM-29EB900F3E3758A8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: da0ad828ad14ea77231ec8fc9663f489d88973de49be211d70d907875a3a5c85
semantic_inventory:
  - claim_key: CLAIM-5DA39052B26AA686
    claim_text: Ticket tags in the support portal are unique per site regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - support.ticket_tags
  - claim_key: CLAIM-29EB900F3E3758A8
    claim_text: a duplicate is reported as ticket-tag-already-exists
    role: descriptive
    status: modeled
    span:
      start: 81
      end: 133
    subjects:
      - support.ticket_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-102'
  recorded_at: '2025-04-16T11:20:31.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
id: REQ-support-ticket-tags-unique-ignoring-case
type: req
---
Ticket tags in the support portal are unique per site regardless of letter case; a duplicate is reported as ticket-tag-already-exists.

## Context

Reason not stated.

## Source

> feat(support): case-insensitive unique ticket tag names (SUP-102)

Source: Support portal decision log - SUP-102
