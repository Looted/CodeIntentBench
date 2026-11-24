---
title: At most 20 watch-folder labels can be added or removed in one request in the desktop sync client.
status: active
semantic_text: At most 20 watch-folder labels can be added or removed in one request in the desktop sync client.
semantic_clauses:
  - At most 20 watch-folder labels can be added or removed in one request in the desktop sync client
logic_claims:
  - CLAIM-76E9ED3F84A57697
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: abac5a451de52dd839489a3e943f5898f2bd877872249fc3fcd4c6f5cee2644c
semantic_inventory:
  - claim_key: CLAIM-76E9ED3F84A57697
    claim_text: At most 20 watch-folder labels can be added or removed in one request in the desktop sync client
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 96
    subjects:
      - desktop.watch_folder_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-125'
  recorded_at: '2026-02-20T13:41:26.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: Requests with more than 20 watch-folder labels timed out on slow connections.
id: REQ-desktop-watch-folder-labels-batch-size
type: req
---
At most 20 watch-folder labels can be added or removed in one request in the desktop sync client.

## Context

Requests with more than 20 watch-folder labels timed out on slow connections.

## Source

> feat(desktop): batch watch-folder labels, 20 per request (DSK-125)

Source: Desktop sync client decision log - DSK-125
