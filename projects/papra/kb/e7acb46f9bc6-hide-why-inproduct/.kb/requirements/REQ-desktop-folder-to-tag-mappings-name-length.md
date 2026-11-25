---
title: Folder-to-tag mapping names in the desktop sync client are limited to 24 characters.
status: active
semantic_text: Folder-to-tag mapping names in the desktop sync client are limited to 24 characters.
semantic_clauses:
  - Folder-to-tag mapping names in the desktop sync client are limited to 24 characters
logic_claims:
  - CLAIM-7BCF87A03765F9CD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: eef496ed7466cb50a52919045a08a22ce72ffd5479ae8d0ed3edb934ebd7b63c
semantic_inventory:
  - claim_key: CLAIM-7BCF87A03765F9CD
    claim_text: Folder-to-tag mapping names in the desktop sync client are limited to 24 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - desktop.folder_to_tag_mappings
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-171'
  recorded_at: '2025-11-16T15:35:30.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-folder-to-tag-mappings-name-length
type: req
---
Folder-to-tag mapping names in the desktop sync client are limited to 24 characters.

## Context

Reason not stated.

## Source

> feat(desktop): cap folder-to-tag mapping name length at 24 (DSK-171)

Source: Desktop sync client decision log - DSK-171
