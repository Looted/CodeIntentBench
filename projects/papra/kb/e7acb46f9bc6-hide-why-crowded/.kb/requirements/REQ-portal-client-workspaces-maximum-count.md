---
title: The number of client workspaces per partner in the partner portal is limited to 20; the limit is configured per deployment and 20 is the default.
status: active
semantic_text: The number of client workspaces per partner in the partner portal is limited to 20; the limit is configured per deployment and 20 is the default.
semantic_clauses:
  - The number of client workspaces per partner in the partner portal is limited to 20
  - the limit is configured per deployment and 20 is the default
logic_claims:
  - CLAIM-9670E443107C418E
  - CLAIM-D032EE70E71E1F3D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 29d3c6a824cc8b66a9345dcc0c8f78363bfcc274eb20e92e552825e226df9158
semantic_inventory:
  - claim_key: CLAIM-9670E443107C418E
    claim_text: The number of client workspaces per partner in the partner portal is limited to 20
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - portal.client_workspaces
  - claim_key: CLAIM-D032EE70E71E1F3D
    claim_text: the limit is configured per deployment and 20 is the default
    role: descriptive
    status: modeled
    span:
      start: 84
      end: 144
    subjects:
      - portal.client_workspaces
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-281'
  recorded_at: '2026-07-27T16:11:54.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Each client workspace reserves resources whether or not it is used.
id: REQ-portal-client-workspaces-maximum-count
type: req
---
The number of client workspaces per partner in the partner portal is limited to 20; the limit is configured per deployment and 20 is the default.

## Context

Each client workspace reserves resources whether or not it is used.

## Why this changed

PRT-281 replaced the value recorded in PRT-211 and gives this reason for the change: Larger customers reached 10 client workspaces in their first month.

## Source

> feat(portal): limit client workspaces per partner (PRT-281)

Source: Partner portal decision log - PRT-281
