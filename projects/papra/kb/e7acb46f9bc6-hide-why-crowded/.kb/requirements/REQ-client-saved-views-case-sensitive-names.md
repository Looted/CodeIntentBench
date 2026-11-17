---
title: Saved views in the web client are compared exactly as typed; two saved views that differ only by letter case are distinct.
status: active
semantic_text: Saved views in the web client are compared exactly as typed; two saved views that differ only by letter case are distinct.
semantic_clauses:
  - Saved views in the web client are compared exactly as typed
  - two saved views that differ only by letter case are distinct
logic_claims:
  - CLAIM-24DAB4C88B53FB3B
  - CLAIM-72B487E035B3799D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0e349d9f88011dfb116a9dd5a9bb9507ba33295a92957351eb59043e4eed7531
semantic_inventory:
  - claim_key: CLAIM-24DAB4C88B53FB3B
    claim_text: Saved views in the web client are compared exactly as typed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - client.saved_views
  - claim_key: CLAIM-72B487E035B3799D
    claim_text: two saved views that differ only by letter case are distinct
    role: descriptive
    status: modeled
    span:
      start: 61
      end: 121
    subjects:
      - client.saved_views
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-108'
  recorded_at: '2025-09-20T08:18:00.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: Existing data already held saved views that differ only by case, and merging them would have lost information.
id: REQ-client-saved-views-case-sensitive-names
type: req
---
Saved views in the web client are compared exactly as typed; two saved views that differ only by letter case are distinct.

## Context

Existing data already held saved views that differ only by case, and merging them would have lost information.

## Source

> docs(client): saved view names are case-sensitive (WCL-108)

Source: Web client decision log (apps/papra-client) - WCL-108
