---
title: A filter name that the desktop sync client's local file search does not know is treated as plain search text.
status: active
semantic_text: A filter name that the desktop sync client's local file search does not know is treated as plain search text.
semantic_clauses:
  - A filter name that the desktop sync client's local file search does not know is treated as plain search text
logic_claims:
  - CLAIM-FB703D7F4E0B9BC5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a320dcb3b689a5e26436c9376dd63ec49dff579b896e05eff80e84f2975c4e01
semantic_inventory:
  - claim_key: CLAIM-FB703D7F4E0B9BC5
    claim_text: A filter name that the desktop sync client's local file search does not know is treated as plain search text
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 108
    subjects:
      - desktop.desktop_sync_client_local_file_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-224'
  recorded_at: '2026-02-16T09:04:10.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: Text with a colon in it, such as a time, is a common thing to search for.
id: REQ-desktop-desktop-sync-client-local-file-search-unknown-filter
type: req
---
A filter name that the desktop sync client's local file search does not know is treated as plain search text.

## Context

Text with a colon in it, such as a time, is a common thing to search for.

## Source

> feat(desktop): unknown search filters (DSK-224)

Source: Desktop sync client decision log - DSK-224
