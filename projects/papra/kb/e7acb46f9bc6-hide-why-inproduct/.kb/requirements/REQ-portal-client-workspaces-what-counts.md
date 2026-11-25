---
title: Only client workspaces the partner owns count toward the limit in the partner portal; client workspaces shared with them do not count.
status: active
semantic_text: Only client workspaces the partner owns count toward the limit in the partner portal; client workspaces shared with them do not count.
semantic_clauses:
  - Only client workspaces the partner owns count toward the limit in the partner portal
  - client workspaces shared with them do not count
logic_claims:
  - CLAIM-C298A73870686785
  - CLAIM-5414264CF0E5D617
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 23ddfc5056e2be0f4ec5d218ba68b6bf42b5196f6a98cdb3533e96b0d31098e6
semantic_inventory:
  - claim_key: CLAIM-C298A73870686785
    claim_text: Only client workspaces the partner owns count toward the limit in the partner portal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - portal.client_workspaces
  - claim_key: CLAIM-5414264CF0E5D617
    claim_text: client workspaces shared with them do not count
    role: descriptive
    status: modeled
    span:
      start: 86
      end: 133
    subjects:
      - portal.client_workspaces
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-215'
  recorded_at: '2026-04-25T13:58:07.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Archiving had become a way around the limit.
id: REQ-portal-client-workspaces-what-counts
type: req
---
Only client workspaces the partner owns count toward the limit in the partner portal; client workspaces shared with them do not count.

## Context

Archiving had become a way around the limit.

## Source

> feat(portal): which client workspaces count toward the limit (PRT-215)

Source: Partner portal decision log - PRT-215
