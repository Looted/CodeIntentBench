---
title: Folder-to-tag mapping names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimm…
status: active
semantic_text: Folder-to-tag mapping names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Folder-to-tag mapping names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-16AA09ED684921E2
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a1e4b19d452f8932f862d3cddf4329d40b73e48f9570cda581ab668629417f5c
semantic_inventory:
  - claim_key: CLAIM-16AA09ED684921E2
    claim_text: Folder-to-tag mapping names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 123
    subjects:
      - desktop.folder_to_tag_mappings
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 125
      end: 171
    subjects:
      - desktop.folder_to_tag_mappings
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-176'
  recorded_at: '2026-08-01T08:42:41.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: Pasted names carried trailing spaces and produced folder-to-tag mappings that looked identical but were not.
id: REQ-desktop-folder-to-tag-mappings-names-trimmed
type: req
---
Folder-to-tag mapping names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced folder-to-tag mappings that looked identical but were not.

## Source

> fix(desktop): trim folder-to-tag mapping names (DSK-176)

Source: Desktop sync client decision log - DSK-176
