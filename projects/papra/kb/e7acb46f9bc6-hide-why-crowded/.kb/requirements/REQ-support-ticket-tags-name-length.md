---
title: Ticket tag names in the support portal are limited to 64 characters.
status: active
semantic_text: Ticket tag names in the support portal are limited to 64 characters.
semantic_clauses:
  - Ticket tag names in the support portal are limited to 64 characters
logic_claims:
  - CLAIM-77DE932DC0CAE0D5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 13cb7d288a6f074bd25107cf535396b85b776d854ad94bd6efe1e1513a3d9f04
semantic_inventory:
  - claim_key: CLAIM-77DE932DC0CAE0D5
    claim_text: Ticket tag names in the support portal are limited to 64 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - support.ticket_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-106'
  recorded_at: '2025-10-11T09:49:08.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: Longer names broke the layout of the list where ticket tags are shown.
id: REQ-support-ticket-tags-name-length
type: req
---
Ticket tag names in the support portal are limited to 64 characters.

## Context

Longer names broke the layout of the list where ticket tags are shown.

## Source

> feat(support): cap ticket tag name length at 64 (SUP-106)

Source: Support portal decision log - SUP-106
