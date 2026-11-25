---
title: Folder-to-tag mappings in the desktop sync client are compared exactly as typed; two folder-to-tag mappings that differ only by letter case are distinct.
status: active
semantic_text: Folder-to-tag mappings in the desktop sync client are compared exactly as typed; two folder-to-tag mappings that differ only by letter case are distinct.
semantic_clauses:
  - Folder-to-tag mappings in the desktop sync client are compared exactly as typed
  - two folder-to-tag mappings that differ only by letter case are distinct
logic_claims:
  - CLAIM-21EB70F9DB530204
  - CLAIM-CDA2154C77514105
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dfc6c025f27449a23235a756720305d1a3a36bc154605ca1a18fbcd3bc08e739
semantic_inventory:
  - claim_key: CLAIM-21EB70F9DB530204
    claim_text: Folder-to-tag mappings in the desktop sync client are compared exactly as typed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - desktop.folder_to_tag_mappings
  - claim_key: CLAIM-CDA2154C77514105
    claim_text: two folder-to-tag mappings that differ only by letter case are distinct
    role: descriptive
    status: modeled
    span:
      start: 81
      end: 152
    subjects:
      - desktop.folder_to_tag_mappings
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-167'
  recorded_at: '2025-03-09T12:09:31.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: Folder-to-tag mappings mirror identifiers of an outside system that is case-sensitive, so folding case would merge distinct entries.
id: REQ-desktop-folder-to-tag-mappings-case-sensitive-names
type: req
---
Folder-to-tag mappings in the desktop sync client are compared exactly as typed; two folder-to-tag mappings that differ only by letter case are distinct.

## Context

Folder-to-tag mappings mirror identifiers of an outside system that is case-sensitive, so folding case would merge distinct entries.

## Source

> docs(desktop): folder-to-tag mapping names are case-sensitive (DSK-167)

Source: Desktop sync client decision log - DSK-167
