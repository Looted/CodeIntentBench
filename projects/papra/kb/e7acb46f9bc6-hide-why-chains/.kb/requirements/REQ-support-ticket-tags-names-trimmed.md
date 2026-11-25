---
title: Ticket tag names in the support portal are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Ticket tag names in the support portal are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Ticket tag names in the support portal are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-1CD28815F9C21E4C
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3ec3b7431374cc574838180343893ce6aa2ed4b44a7317db8bd5af16a10c069f
semantic_inventory:
  - claim_key: CLAIM-1CD28815F9C21E4C
    claim_text: Ticket tag names in the support portal are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 107
    subjects:
      - support.ticket_tags
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 109
      end: 155
    subjects:
      - support.ticket_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-114'
  recorded_at: '2025-02-20T10:16:44.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: Pasted names carried trailing spaces and produced ticket tags that looked identical but were not.
id: REQ-support-ticket-tags-names-trimmed
type: req
---
Ticket tag names in the support portal are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced ticket tags that looked identical but were not.

## Source

> fix(support): trim ticket tag names (SUP-114)

Source: Support portal decision log - SUP-114
