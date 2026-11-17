---
title: Watch-folder labels in the desktop sync client are unique per device regardless of letter case; a duplicate is reported as watch-folder-label-already-exists.
status: active
semantic_text: Watch-folder labels in the desktop sync client are unique per device regardless of letter case; a duplicate is reported as watch-folder-label-already-exists.
semantic_clauses:
  - Watch-folder labels in the desktop sync client are unique per device regardless of letter case
  - a duplicate is reported as watch-folder-label-already-exists
logic_claims:
  - CLAIM-F6FD0B6F61E05544
  - CLAIM-7768635A9FEA5B4C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: eb783947b6caba2046e2d2683bec4d2e22c279c004b55909de148fac4158b4cc
semantic_inventory:
  - claim_key: CLAIM-F6FD0B6F61E05544
    claim_text: Watch-folder labels in the desktop sync client are unique per device regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 94
    subjects:
      - desktop.watch_folder_labels
  - claim_key: CLAIM-7768635A9FEA5B4C
    claim_text: a duplicate is reported as watch-folder-label-already-exists
    role: descriptive
    status: modeled
    span:
      start: 96
      end: 156
    subjects:
      - desktop.watch_folder_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-103'
  recorded_at: '2026-03-10T17:05:49.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-watch-folder-labels-unique-ignoring-case
type: req
---
Watch-folder labels in the desktop sync client are unique per device regardless of letter case; a duplicate is reported as watch-folder-label-already-exists.

## Context

Reason not stated.

## Source

> feat(desktop): case-insensitive unique watch-folder label names (DSK-103)

Source: Desktop sync client decision log - DSK-103
