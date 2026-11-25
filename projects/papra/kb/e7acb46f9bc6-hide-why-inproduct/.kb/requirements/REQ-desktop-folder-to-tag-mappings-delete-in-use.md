---
title: Deleting a folder-to-tag mapping in the desktop sync client removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a folder-to-tag mapping in the desktop sync client removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a folder-to-tag mapping in the desktop sync client removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-AC4FA60B0E163C8C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8aa290cb2ff70ecc52bc444fc7d97d54611fed7cb469d6632cafebe187c455d1
semantic_inventory:
  - claim_key: CLAIM-AC4FA60B0E163C8C
    claim_text: Deleting a folder-to-tag mapping in the desktop sync client removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 134
    subjects:
      - desktop.folder_to_tag_mappings
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-182'
  recorded_at: '2025-02-08T15:34:40.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-folder-to-tag-mappings-delete-in-use
type: req
---
Deleting a folder-to-tag mapping in the desktop sync client removes it from everything that uses it, without confirmation for each use.

## Context

Reason not stated.

## Source

> feat(desktop): deleting a folder-to-tag mapping detaches it (DSK-182)

Source: Desktop sync client decision log - DSK-182
