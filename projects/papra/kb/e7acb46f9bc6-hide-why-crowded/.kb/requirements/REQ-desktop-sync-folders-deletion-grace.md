---
title: A deleted sync folder in the desktop sync client can be restored for 14 days; after that it is removed for good.
status: active
semantic_text: A deleted sync folder in the desktop sync client can be restored for 14 days; after that it is removed for good.
semantic_clauses:
  - A deleted sync folder in the desktop sync client can be restored for 14 days
  - after that it is removed for good
logic_claims:
  - CLAIM-7021BA8227BFDA30
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9c589be4bcc43bfd0d7ca15984b497bc9b226dd541e10e3024d1fb23ff12a143
semantic_inventory:
  - claim_key: CLAIM-7021BA8227BFDA30
    claim_text: A deleted sync folder in the desktop sync client can be restored for 14 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - desktop.sync_folders
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 78
      end: 111
    subjects:
      - desktop.sync_folders
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-331'
  recorded_at: '2025-06-23T15:27:06.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-desktop-sync-folders-deletion-grace
type: req
---
A deleted sync folder in the desktop sync client can be restored for 14 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(desktop): 14-day restore window for sync folders (DSK-331)

Source: Desktop sync client decision log - DSK-331
