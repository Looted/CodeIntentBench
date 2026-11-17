---
title: 'An invalid date in the synced: filter of the desktop sync client''s sync log filter is ignored and the other filters still apply.'
status: active
semantic_text: 'An invalid date in the synced: filter of the desktop sync client''s sync log filter is ignored and the other filters still apply.'
semantic_clauses:
  - 'An invalid date in the synced: filter of the desktop sync client''s sync log filter is ignored and the other filters still apply'
logic_claims:
  - CLAIM-B5282EA15B49D7B9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7a92a73fa2747427800c0df72113f89e8c2c5ea265e315bf1d67aeb0b3611792
semantic_inventory:
  - claim_key: CLAIM-B5282EA15B49D7B9
    claim_text: 'An invalid date in the synced: filter of the desktop sync client''s sync log filter is ignored and the other filters still apply'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 127
    subjects:
      - desktop.desktop_sync_client_sync_log_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-233'
  recorded_at: '2026-07-18T12:15:11.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: A filter that cannot be understood must not be read as "no restriction".
id: REQ-desktop-desktop-sync-client-sync-log-filter-invalid-date
type: req
---
An invalid date in the synced: filter of the desktop sync client's sync log filter is ignored and the other filters still apply.

## Context

A filter that cannot be understood must not be read as "no restriction".

## Source

> fix(desktop): invalid date in synced: filter (DSK-233)

Source: Desktop sync client decision log - DSK-233
