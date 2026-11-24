---
title: At most 5 sidebar groups can be added or removed in one request on the documentation site.
status: active
semantic_text: At most 5 sidebar groups can be added or removed in one request on the documentation site.
semantic_clauses:
  - At most 5 sidebar groups can be added or removed in one request on the documentation site
logic_claims:
  - CLAIM-5BB6942CAACAF5D3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e8eef369e1324edb00ed5a9977b6ea51785ea2987a3d35b69654528e186d24f7
semantic_inventory:
  - claim_key: CLAIM-5BB6942CAACAF5D3
    claim_text: At most 5 sidebar groups can be added or removed in one request on the documentation site
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - docs.sidebar_groups
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-193'
  recorded_at: '2025-06-12T12:52:06.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Requests with more than 5 sidebar groups timed out on slow connections.
id: REQ-docs-sidebar-groups-batch-size
type: req
---
At most 5 sidebar groups can be added or removed in one request on the documentation site.

## Context

Requests with more than 5 sidebar groups timed out on slow connections.

## Source

> feat(docs): batch sidebar groups, 5 per request (DOC-193)

Source: Documentation site decision log (apps/docs) - DOC-193
