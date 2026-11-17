---
title: A deleted linked organization in the desktop sync client can be restored for 30 days; after that it is removed for good.
status: active
semantic_text: A deleted linked organization in the desktop sync client can be restored for 30 days; after that it is removed for good.
semantic_clauses:
  - A deleted linked organization in the desktop sync client can be restored for 30 days
  - after that it is removed for good
logic_claims:
  - CLAIM-EA83477A748DEBF0
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f0c2375cf303c4c2d6e62603cd8544f6d47efefd361bb2ba81c6b592f42cdfc1
semantic_inventory:
  - claim_key: CLAIM-EA83477A748DEBF0
    claim_text: A deleted linked organization in the desktop sync client can be restored for 30 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - desktop.linked_organizations
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 86
      end: 119
    subjects:
      - desktop.linked_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-314'
  recorded_at: '2026-06-28T14:28:30.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-desktop-linked-organizations-deletion-grace
type: req
---
A deleted linked organization in the desktop sync client can be restored for 30 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(desktop): 30-day restore window for linked organizations (DSK-314)

Source: Desktop sync client decision log - DSK-314
