---
title: At most 25 workspace templates can be added or removed in one request in the partner portal.
status: active
semantic_text: At most 25 workspace templates can be added or removed in one request in the partner portal.
semantic_clauses:
  - At most 25 workspace templates can be added or removed in one request in the partner portal
logic_claims:
  - CLAIM-74CC5509FE682EFE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 41bdd0ea3992f2dfe587f414c8dcb5d07a0fee9d66ea191e21d00d47632bd7a3
semantic_inventory:
  - claim_key: CLAIM-74CC5509FE682EFE
    claim_text: At most 25 workspace templates can be added or removed in one request in the partner portal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 91
    subjects:
      - portal.workspace_templates
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-160'
  recorded_at: '2025-11-01T08:32:12.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Requests with more than 25 workspace templates timed out on slow connections.
id: REQ-portal-workspace-templates-batch-size
type: req
---
At most 25 workspace templates can be added or removed in one request in the partner portal.

## Context

Requests with more than 25 workspace templates timed out on slow connections.

## Source

> feat(portal): batch workspace templates, 25 per request (PRT-160)

Source: Partner portal decision log - PRT-160
