---
title: Sync folder names in the desktop sync client are unique per linked organization, regardless of letter case.
status: active
semantic_text: Sync folder names in the desktop sync client are unique per linked organization, regardless of letter case.
semantic_clauses:
  - Sync folder names in the desktop sync client are unique per linked organization, regardless of letter case
logic_claims:
  - CLAIM-0C2A21374E7C781A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: bef4da300f9f11257733a874e4ade65e8e5aa165d11e57a4a121d6aa4db94d0c
semantic_inventory:
  - claim_key: CLAIM-0C2A21374E7C781A
    claim_text: Sync folder names in the desktop sync client are unique per linked organization, regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 106
    subjects:
      - desktop.sync_folders
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-328'
  recorded_at: '2025-12-07T11:33:39.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: Two sync folders with the same name could not be told apart in the switcher.
id: REQ-desktop-sync-folders-name-uniqueness
type: req
---
Sync folder names in the desktop sync client are unique per linked organization, regardless of letter case.

## Context

Two sync folders with the same name could not be told apart in the switcher.

## Source

> feat(desktop): sync folder name uniqueness (DSK-328)

Source: Desktop sync client decision log - DSK-328
