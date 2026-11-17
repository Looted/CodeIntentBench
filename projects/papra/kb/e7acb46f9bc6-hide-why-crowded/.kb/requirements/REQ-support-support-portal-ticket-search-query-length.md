---
title: A query in the support portal ticket search is limited to 200 characters; longer input is rejected with a validation error.
status: active
semantic_text: A query in the support portal ticket search is limited to 200 characters; longer input is rejected with a validation error.
semantic_clauses:
  - A query in the support portal ticket search is limited to 200 characters
  - longer input is rejected with a validation error
logic_claims:
  - CLAIM-226450C6755775B8
  - CLAIM-778F39B5CA222673
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: daf3125d9a1ac613f4c28758f9fa67a09c5a333c326ed9b8a3cef36552a894fb
semantic_inventory:
  - claim_key: CLAIM-226450C6755775B8
    claim_text: A query in the support portal ticket search is limited to 200 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - support.support_portal_ticket_search
  - claim_key: CLAIM-778F39B5CA222673
    claim_text: longer input is rejected with a validation error
    role: normative
    status: modeled
    span:
      start: 74
      end: 122
    subjects:
      - support.support_portal_ticket_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-158'
  recorded_at: '2025-09-08T12:07:58.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
id: REQ-support-support-portal-ticket-search-query-length
type: req
---
A query in the support portal ticket search is limited to 200 characters; longer input is rejected with a validation error.

## Context

Reason not stated.

## Source

> feat(support): limit search query length to 200 (SUP-158)

Source: Support portal decision log - SUP-158
