---
title: A query in the desktop sync client's local file search is limited to 500 characters; longer input is cut to the limit without an error.
status: active
semantic_text: A query in the desktop sync client's local file search is limited to 500 characters; longer input is cut to the limit without an error.
semantic_clauses:
  - A query in the desktop sync client's local file search is limited to 500 characters
  - longer input is cut to the limit without an error
logic_claims:
  - CLAIM-9D6743ADBCFD0A05
  - CLAIM-7ABD8CACE2C520A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9ffa661cf1131d43f94dc2e5fa6d127741d97997c3f1dc691c2ce23cc7f24195
semantic_inventory:
  - claim_key: CLAIM-9D6743ADBCFD0A05
    claim_text: A query in the desktop sync client's local file search is limited to 500 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - desktop.desktop_sync_client_local_file_search
  - claim_key: CLAIM-7ABD8CACE2C520A4
    claim_text: longer input is cut to the limit without an error
    role: descriptive
    status: modeled
    span:
      start: 85
      end: 134
    subjects:
      - desktop.desktop_sync_client_local_file_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-195'
  recorded_at: '2026-03-22T13:01:12.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-desktop-sync-client-local-file-search-query-length
type: req
---
A query in the desktop sync client's local file search is limited to 500 characters; longer input is cut to the limit without an error.

## Context

Reason not stated.

## Source

> feat(desktop): limit search query length to 500 (DSK-195)

Source: Desktop sync client decision log - DSK-195
