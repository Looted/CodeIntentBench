---
title: A query in the desktop sync client's sync log filter is limited to 64 characters; longer input is rejected with a validation error.
status: active
semantic_text: A query in the desktop sync client's sync log filter is limited to 64 characters; longer input is rejected with a validation error.
semantic_clauses:
  - A query in the desktop sync client's sync log filter is limited to 64 characters
  - longer input is rejected with a validation error
logic_claims:
  - CLAIM-17EBB55B45BA2AB7
  - CLAIM-778F39B5CA222673
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 58932a7f0c89655d867eed5c3c2dc6180ae2567aba48c8fd08351f74dcb55977
semantic_inventory:
  - claim_key: CLAIM-17EBB55B45BA2AB7
    claim_text: A query in the desktop sync client's sync log filter is limited to 64 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - desktop.desktop_sync_client_sync_log_filter
  - claim_key: CLAIM-778F39B5CA222673
    claim_text: longer input is rejected with a validation error
    role: normative
    status: modeled
    span:
      start: 82
      end: 130
    subjects:
      - desktop.desktop_sync_client_sync_log_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-228'
  recorded_at: '2025-07-06T10:54:36.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-desktop-sync-client-sync-log-filter-query-length
type: req
---
A query in the desktop sync client's sync log filter is limited to 64 characters; longer input is rejected with a validation error.

## Context

Reason not stated.

## Source

> feat(desktop): limit search query length to 64 (DSK-228)

Source: Desktop sync client decision log - DSK-228
