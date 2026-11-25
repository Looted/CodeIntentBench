---
title: Deleting a ticket tag in the support portal removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a ticket tag in the support portal removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a ticket tag in the support portal removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-7319D2BC97562F70
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0a59481d6e288a0504fc30c1ae72c8c49ebafa06ba8bbe7be3e98d93807a832b
semantic_inventory:
  - claim_key: CLAIM-7319D2BC97562F70
    claim_text: Deleting a ticket tag in the support portal removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 118
    subjects:
      - support.ticket_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-118'
  recorded_at: '2026-09-09T10:53:28.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
id: REQ-support-ticket-tags-delete-in-use
type: req
---
Deleting a ticket tag in the support portal removes it from everything that uses it, without confirmation for each use.

## Context

Reason not stated.

## Source

> feat(support): deleting a ticket tag detaches it (SUP-118)

Source: Support portal decision log - SUP-118
