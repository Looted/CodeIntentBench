---
title: At most 30 ticket tags can be created per site in the support portal; the limit is fixed.
status: active
semantic_text: At most 30 ticket tags can be created per site in the support portal; the limit is fixed.
semantic_clauses:
  - At most 30 ticket tags can be created per site in the support portal
  - the limit is fixed
logic_claims:
  - CLAIM-5F894DFF96BBD062
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ba57c3c7e0c91df5aaad36c0aba34caafe6d39d6442522658f608162463e23dd
semantic_inventory:
  - claim_key: CLAIM-5F894DFF96BBD062
    claim_text: At most 30 ticket tags can be created per site in the support portal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - support.ticket_tags
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 70
      end: 88
    subjects:
      - support.ticket_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-105'
  recorded_at: '2026-07-12T16:32:49.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: Lists of ticket tags are loaded in one request, and beyond a few hundred the screen became slow.
id: REQ-support-ticket-tags-maximum-count
type: req
---
At most 30 ticket tags can be created per site in the support portal; the limit is fixed.

## Context

Lists of ticket tags are loaded in one request, and beyond a few hundred the screen became slow.

## Source

> feat(support): limit ticket tags per site (SUP-105)

Source: Support portal decision log - SUP-105
