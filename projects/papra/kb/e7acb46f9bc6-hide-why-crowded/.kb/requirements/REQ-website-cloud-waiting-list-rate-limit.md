---
title: At most 20 requests per IP address per day are accepted in the cloud waiting list.
status: active
semantic_text: At most 20 requests per IP address per day are accepted in the cloud waiting list.
semantic_clauses:
  - At most 20 requests per IP address per day are accepted in the cloud waiting list
logic_claims:
  - CLAIM-7DD46EF9E0875C88
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 48af28c1195c23d5ff406d0497fcac13909528fa3ffd2637a170bda3611c1c08
semantic_inventory:
  - claim_key: CLAIM-7DD46EF9E0875C88
    claim_text: At most 20 requests per IP address per day are accepted in the cloud waiting list
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - website.cloud_waiting_list
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-367'
  recorded_at: '2026-02-15T15:05:18.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
id: REQ-website-cloud-waiting-list-rate-limit
type: req
---
At most 20 requests per IP address per day are accepted in the cloud waiting list.

## Context

Reason not stated.

## Source

> feat(website): rate limit cloud waiting list (WEB-367)

Source: Marketing website decision log (apps/website) - WEB-367
