---
title: The support portal ticket search runs only once the query has at least 1 character.
status: active
semantic_text: The support portal ticket search runs only once the query has at least 1 character.
semantic_clauses:
  - The support portal ticket search runs only once the query has at least 1 character
logic_claims:
  - CLAIM-222C61B0FDACC93E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4016b071d1f9ad3f767c1eac556e7de93c54561b5bf6cbcd2f460bb67f21040a
semantic_inventory:
  - claim_key: CLAIM-222C61B0FDACC93E
    claim_text: The support portal ticket search runs only once the query has at least 1 character
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - support.support_portal_ticket_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-171'
  recorded_at: '2026-04-08T17:54:17.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-support-support-portal-ticket-search-minimum-length
type: req
---
The support portal ticket search runs only once the query has at least 1 character.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(support): minimum query length 1 (SUP-171)

Source: Support portal decision log - SUP-171
