---
title: A deleted client workspace in the partner portal can be restored for 60 days; after that it is removed for good.
status: active
semantic_text: A deleted client workspace in the partner portal can be restored for 60 days; after that it is removed for good.
semantic_clauses:
  - A deleted client workspace in the partner portal can be restored for 60 days
  - after that it is removed for good
logic_claims:
  - CLAIM-F5D7C5A75299F881
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 03ca15254f7d206535a26275ef3d36e2f4df7f53b2bd44c39d3c84f1edc6cb8b
semantic_inventory:
  - claim_key: CLAIM-F5D7C5A75299F881
    claim_text: A deleted client workspace in the partner portal can be restored for 60 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - portal.client_workspaces
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 78
      end: 111
    subjects:
      - portal.client_workspaces
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-303'
  recorded_at: '2026-05-11T13:24:00.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-portal-client-workspaces-deletion-grace
type: req
---
A deleted client workspace in the partner portal can be restored for 60 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(portal): 60-day restore window for client workspaces (PRT-303)

Source: Partner portal decision log - PRT-303
