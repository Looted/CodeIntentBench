---
title: At most 25 folder-to-tag mappings can be created per sync folder in the desktop sync client; the limit is fixed.
status: active
semantic_text: At most 25 folder-to-tag mappings can be created per sync folder in the desktop sync client; the limit is fixed.
semantic_clauses:
  - At most 25 folder-to-tag mappings can be created per sync folder in the desktop sync client
  - the limit is fixed
logic_claims:
  - CLAIM-0EB07B7CC83B6983
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3f14e7c35e76b290c98f244407ff389bef9d2f28550b32aef713d31c2c8e4eff
semantic_inventory:
  - claim_key: CLAIM-0EB07B7CC83B6983
    claim_text: At most 25 folder-to-tag mappings can be created per sync folder in the desktop sync client
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 91
    subjects:
      - desktop.folder_to_tag_mappings
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 93
      end: 111
    subjects:
      - desktop.folder_to_tag_mappings
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-170'
  recorded_at: '2025-08-11T12:10:40.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-folder-to-tag-mappings-maximum-count
type: req
---
At most 25 folder-to-tag mappings can be created per sync folder in the desktop sync client; the limit is fixed.

## Context

Reason not stated.

## Why this changed

DSK-170 replaced the value recorded in DSK-115 and gives this reason for the change: The earlier limit of 10 was reached by ordinary use within a few weeks of release.

## Source

> feat(desktop): limit folder-to-tag mappings per sync folder (DSK-170)

Source: Desktop sync client decision log - DSK-170
