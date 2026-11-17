---
title: 'The synced: filter of the desktop sync client''s sync log filter accepts dates in the format of the browser locale.'
status: active
semantic_text: 'The synced: filter of the desktop sync client''s sync log filter accepts dates in the format of the browser locale.'
semantic_clauses:
  - 'The synced: filter of the desktop sync client''s sync log filter accepts dates in the format of the browser locale'
logic_claims:
  - CLAIM-54EC59CCFFD28012
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 22c2ceaf7da18db172cdf14d48ceea97ae37ec775262562b16e8adc8e43623bf
semantic_inventory:
  - claim_key: CLAIM-54EC59CCFFD28012
    claim_text: 'The synced: filter of the desktop sync client''s sync log filter accepts dates in the format of the browser locale'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 113
    subjects:
      - desktop.desktop_sync_client_sync_log_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-246'
  recorded_at: '2025-09-26T10:58:59.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: These are the forms people were seen typing in the search logs.
id: REQ-desktop-desktop-sync-client-sync-log-filter-date-format
type: req
---
The synced: filter of the desktop sync client's sync log filter accepts dates in the format of the browser locale.

## Context

These are the forms people were seen typing in the search logs.

## Source

> feat(desktop): date formats of the synced: filter (DSK-246)

Source: Desktop sync client decision log - DSK-246
