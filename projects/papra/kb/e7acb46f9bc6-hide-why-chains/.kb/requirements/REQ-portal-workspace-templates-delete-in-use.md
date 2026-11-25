---
title: Deleting a workspace template in the partner portal that is still in use is refused until nothing refers to it.
status: active
semantic_text: Deleting a workspace template in the partner portal that is still in use is refused until nothing refers to it.
semantic_clauses:
  - Deleting a workspace template in the partner portal that is still in use is refused until nothing refers to it
logic_claims:
  - CLAIM-8807D01A3B8F4C21
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 872743c88c48142871fcc7b6a7f8efe90134f7a1c60146c64a915ff5b2f3eceb
semantic_inventory:
  - claim_key: CLAIM-8807D01A3B8F4C21
    claim_text: Deleting a workspace template in the partner portal that is still in use is refused until nothing refers to it
    role: definition
    status: modeled
    span:
      start: 0
      end: 110
    subjects:
      - portal.workspace_templates
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-159'
  recorded_at: '2025-05-24T09:31:55.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
id: REQ-portal-workspace-templates-delete-in-use
type: req
---
Deleting a workspace template in the partner portal that is still in use is refused until nothing refers to it.

## Context

Reason not stated.

## Source

> feat(portal): refuse deleting workspace templates in use (PRT-159)

Source: Partner portal decision log - PRT-159
