---
title: A device can hold at most 500 watch-folder labels in the desktop sync client; the limit is fixed.
status: active
semantic_text: A device can hold at most 500 watch-folder labels in the desktop sync client; the limit is fixed.
semantic_clauses:
  - A device can hold at most 500 watch-folder labels in the desktop sync client
  - the limit is fixed
logic_claims:
  - CLAIM-FA96EC12B9A84BE8
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 143dd6d71f5b27407292e8a61154be2348de51905e34fde6185f110771e940c0
semantic_inventory:
  - claim_key: CLAIM-FA96EC12B9A84BE8
    claim_text: A device can hold at most 500 watch-folder labels in the desktop sync client
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - desktop.watch_folder_labels
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 78
      end: 96
    subjects:
      - desktop.watch_folder_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-111'
  recorded_at: '2026-06-10T08:52:00.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-watch-folder-labels-maximum-count
type: req
---
A device can hold at most 500 watch-folder labels in the desktop sync client; the limit is fixed.

## Context

Reason not stated.

## Source

> feat(desktop): limit watch-folder labels per device (DSK-111)

Source: Desktop sync client decision log - DSK-111
