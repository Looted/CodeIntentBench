---
title: Every sync folder the linked organization can access counts toward the limit in the desktop sync client; that includes ones shared with them.
status: active
semantic_text: Every sync folder the linked organization can access counts toward the limit in the desktop sync client; that includes ones shared with them.
semantic_clauses:
  - Every sync folder the linked organization can access counts toward the limit in the desktop sync client
  - that includes ones shared with them
logic_claims:
  - CLAIM-161F8DC4894DDC4E
  - CLAIM-70BD504DC2647196
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 65d959f07cb2394ae38ac78da5903d6c1b24fccab56bafbcc886ec0e89875fe2
semantic_inventory:
  - claim_key: CLAIM-161F8DC4894DDC4E
    claim_text: Every sync folder the linked organization can access counts toward the limit in the desktop sync client
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 103
    subjects:
      - desktop.sync_folders
  - claim_key: CLAIM-70BD504DC2647196
    claim_text: that includes ones shared with them
    role: descriptive
    status: modeled
    span:
      start: 105
      end: 140
    subjects:
      - desktop.sync_folders
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-322'
  recorded_at: '2026-05-13T11:53:28.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-sync-folders-what-counts
type: req
---
Every sync folder the linked organization can access counts toward the limit in the desktop sync client; that includes ones shared with them.

## Context

Reason not stated.

## Source

> feat(desktop): which sync folders count toward the limit (DSK-322)

Source: Desktop sync client decision log - DSK-322
