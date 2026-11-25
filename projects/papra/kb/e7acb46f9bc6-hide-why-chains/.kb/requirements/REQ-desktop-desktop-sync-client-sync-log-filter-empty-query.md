---
title: An empty query in the desktop sync client's sync log filter lists the most recent items.
status: active
semantic_text: An empty query in the desktop sync client's sync log filter lists the most recent items.
semantic_clauses:
  - An empty query in the desktop sync client's sync log filter lists the most recent items
logic_claims:
  - CLAIM-66C448C58B46B805
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b0ff1f51ba511b315a07069d1d11783ce4267c583d84943eee1b0cf3862a058d
semantic_inventory:
  - claim_key: CLAIM-66C448C58B46B805
    claim_text: An empty query in the desktop sync client's sync log filter lists the most recent items
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - desktop.desktop_sync_client_sync_log_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-262'
  recorded_at: '2026-06-22T10:22:18.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: Listing everything for an empty query was the most expensive request the page made.
id: REQ-desktop-desktop-sync-client-sync-log-filter-empty-query
type: req
---
An empty query in the desktop sync client's sync log filter lists the most recent items.

## Context

Listing everything for an empty query was the most expensive request the page made.

## Source

> feat(desktop): empty search query (DSK-262)

Source: Desktop sync client decision log - DSK-262
