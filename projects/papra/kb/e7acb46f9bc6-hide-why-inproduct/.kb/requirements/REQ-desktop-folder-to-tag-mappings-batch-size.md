---
title: At most 25 folder-to-tag mappings can be added or removed in one request in the desktop sync client.
status: active
semantic_text: At most 25 folder-to-tag mappings can be added or removed in one request in the desktop sync client.
semantic_clauses:
  - At most 25 folder-to-tag mappings can be added or removed in one request in the desktop sync client
logic_claims:
  - CLAIM-F209EAB827C475AF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e07545499aa33389de86daa444d3c71a33dc7d4e22762a52061f0edc26652b2a
semantic_inventory:
  - claim_key: CLAIM-F209EAB827C475AF
    claim_text: At most 25 folder-to-tag mappings can be added or removed in one request in the desktop sync client
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 99
    subjects:
      - desktop.folder_to_tag_mappings
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-190'
  recorded_at: '2026-03-23T10:03:06.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-folder-to-tag-mappings-batch-size
type: req
---
At most 25 folder-to-tag mappings can be added or removed in one request in the desktop sync client.

## Context

Reason not stated.

## Source

> feat(desktop): batch folder-to-tag mappings, 25 per request (DSK-190)

Source: Desktop sync client decision log - DSK-190
