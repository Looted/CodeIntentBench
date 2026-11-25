---
title: The desktop sync client's sync log filter runs only once the query has at least 3 characters.
status: active
semantic_text: The desktop sync client's sync log filter runs only once the query has at least 3 characters.
semantic_clauses:
  - The desktop sync client's sync log filter runs only once the query has at least 3 characters
logic_claims:
  - CLAIM-02A1B5976606C284
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 81f4bf82e8d20780a9eb6b19d51d05be7c08d096aa1b5e5aa0ae20251eb1ef89
semantic_inventory:
  - claim_key: CLAIM-02A1B5976606C284
    claim_text: The desktop sync client's sync log filter runs only once the query has at least 3 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 92
    subjects:
      - desktop.desktop_sync_client_sync_log_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-238'
  recorded_at: '2026-03-05T13:10:33.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-desktop-sync-client-sync-log-filter-minimum-length
type: req
---
The desktop sync client's sync log filter runs only once the query has at least 3 characters.

## Context

Reason not stated.

## Source

> feat(desktop): minimum query length 3 (DSK-238)

Source: Desktop sync client decision log - DSK-238
