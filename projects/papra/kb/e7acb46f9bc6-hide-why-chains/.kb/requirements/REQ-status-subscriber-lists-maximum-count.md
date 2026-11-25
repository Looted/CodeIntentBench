---
title: A status page can have at most 5 subscriber lists on the status page; the limit is the same for everyone.
status: active
semantic_text: A status page can have at most 5 subscriber lists on the status page; the limit is the same for everyone.
semantic_clauses:
  - A status page can have at most 5 subscriber lists on the status page
  - the limit is the same for everyone
logic_claims:
  - CLAIM-13A7998C1E8D287C
  - CLAIM-950BC8C0A4D47D22
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 51968315bda4891e7845976b11d50e51d49f1595a2f43134386cfe81fc4bcec1
semantic_inventory:
  - claim_key: CLAIM-13A7998C1E8D287C
    claim_text: A status page can have at most 5 subscriber lists on the status page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - status.subscriber_lists
  - claim_key: CLAIM-950BC8C0A4D47D22
    claim_text: the limit is the same for everyone
    role: descriptive
    status: modeled
    span:
      start: 70
      end: 104
    subjects:
      - status.subscriber_lists
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-259'
  recorded_at: '2026-04-16T08:22:46.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Each subscriber list reserves resources whether or not it is used.
id: REQ-status-subscriber-lists-maximum-count
type: req
---
A status page can have at most 5 subscriber lists on the status page; the limit is the same for everyone.

## Context

Each subscriber list reserves resources whether or not it is used.

## Why this changed

STA-259 replaced the value recorded in STA-219 and gives this reason for the change: Larger customers reached 2 subscriber lists in their first month.

## Source

> feat(status): limit subscriber lists per status page (STA-259)

Source: Status page runbook - STA-259
