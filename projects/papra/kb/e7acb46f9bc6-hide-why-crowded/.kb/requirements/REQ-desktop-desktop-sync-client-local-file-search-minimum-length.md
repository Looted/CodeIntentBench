---
title: The desktop sync client's local file search runs only once the query has at least 3 characters.
status: active
semantic_text: The desktop sync client's local file search runs only once the query has at least 3 characters.
semantic_clauses:
  - The desktop sync client's local file search runs only once the query has at least 3 characters
logic_claims:
  - CLAIM-FC937A4A3D8EDCF2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f0b7697cd73e7e2ff41d83d3322496b07c056f7c08ef84ecf1df8092727de81e
semantic_inventory:
  - claim_key: CLAIM-FC937A4A3D8EDCF2
    claim_text: The desktop sync client's local file search runs only once the query has at least 3 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 94
    subjects:
      - desktop.desktop_sync_client_local_file_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-206'
  recorded_at: '2025-11-18T14:01:58.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-desktop-desktop-sync-client-local-file-search-minimum-length
type: req
---
The desktop sync client's local file search runs only once the query has at least 3 characters.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(desktop): minimum query length 3 (DSK-206)

Source: Desktop sync client decision log - DSK-206
