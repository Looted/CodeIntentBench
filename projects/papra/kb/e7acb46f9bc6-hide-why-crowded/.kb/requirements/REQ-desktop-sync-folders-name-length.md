---
title: Sync folder names in the desktop sync client are between 3 and 100 characters long.
status: active
semantic_text: Sync folder names in the desktop sync client are between 3 and 100 characters long.
semantic_clauses:
  - Sync folder names in the desktop sync client are between 3 and 100 characters long
logic_claims:
  - CLAIM-9B5386C6E5FC8769
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f7cff31fc9c2bdb14da1c4546522868207c6b9ce028c72465c98fb8a4a574b81
semantic_inventory:
  - claim_key: CLAIM-9B5386C6E5FC8769
    claim_text: Sync folder names in the desktop sync client are between 3 and 100 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - desktop.sync_folders
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-330'
  recorded_at: '2026-06-02T10:58:02.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: One-letter names were used for throwaway tests and never cleaned up.
id: REQ-desktop-sync-folders-name-length
type: req
---
Sync folder names in the desktop sync client are between 3 and 100 characters long.

## Context

One-letter names were used for throwaway tests and never cleaned up.

## Source

> feat(desktop): sync folder name length (DSK-330)

Source: Desktop sync client decision log - DSK-330
