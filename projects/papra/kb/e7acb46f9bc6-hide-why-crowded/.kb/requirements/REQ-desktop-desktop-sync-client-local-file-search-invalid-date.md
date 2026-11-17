---
title: 'An invalid date in the modified: filter of the desktop sync client''s local file search is ignored and the other filters still apply.'
status: active
semantic_text: 'An invalid date in the modified: filter of the desktop sync client''s local file search is ignored and the other filters still apply.'
semantic_clauses:
  - 'An invalid date in the modified: filter of the desktop sync client''s local file search is ignored and the other filters still apply'
logic_claims:
  - CLAIM-413CB20122E6FDCB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3b992aea4766079ca6d1ff6bb4a1c8ae5e817e29b5f879abee6f530244edfcd0
semantic_inventory:
  - claim_key: CLAIM-413CB20122E6FDCB
    claim_text: 'An invalid date in the modified: filter of the desktop sync client''s local file search is ignored and the other filters still apply'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 131
    subjects:
      - desktop.desktop_sync_client_local_file_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-196'
  recorded_at: '2026-01-22T11:38:58.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: One mistyped filter should not cost the person the rest of a long query.
id: REQ-desktop-desktop-sync-client-local-file-search-invalid-date
type: req
---
An invalid date in the modified: filter of the desktop sync client's local file search is ignored and the other filters still apply.

## Context

One mistyped filter should not cost the person the rest of a long query.

## Source

> fix(desktop): invalid date in modified: filter (DSK-196)

Source: Desktop sync client decision log - DSK-196
