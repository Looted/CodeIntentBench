---
title: Watch-folder label names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming…
status: active
semantic_text: Watch-folder label names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Watch-folder label names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-5469233378C85732
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d88801ca47e00b2371d4161ffe569014899a1bf9f7bdc32521204fe852251858
semantic_inventory:
  - claim_key: CLAIM-5469233378C85732
    claim_text: Watch-folder label names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 120
    subjects:
      - desktop.watch_folder_labels
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 122
      end: 168
    subjects:
      - desktop.watch_folder_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-114'
  recorded_at: '2025-08-05T08:24:37.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: Pasted names carried trailing spaces and produced watch-folder labels that looked identical but were not.
id: REQ-desktop-watch-folder-labels-names-trimmed
type: req
---
Watch-folder label names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced watch-folder labels that looked identical but were not.

## Source

> fix(desktop): trim watch-folder label names (DSK-114)

Source: Desktop sync client decision log - DSK-114
