---
title: The number of workspace templates per partner account in the partner portal is limited to 150; the limit is fixed.
status: active
semantic_text: The number of workspace templates per partner account in the partner portal is limited to 150; the limit is fixed.
semantic_clauses:
  - The number of workspace templates per partner account in the partner portal is limited to 150
  - the limit is fixed
logic_claims:
  - CLAIM-16771A57B1F55EFB
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4c8178d29b8d0cc6b9e7836ba4cca60cafa17c5d7f64b3f182e7fd2f22cebb07
semantic_inventory:
  - claim_key: CLAIM-16771A57B1F55EFB
    claim_text: The number of workspace templates per partner account in the partner portal is limited to 150
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - portal.workspace_templates
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 95
      end: 113
    subjects:
      - portal.workspace_templates
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-146'
  recorded_at: '2025-06-22T08:48:21.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: An unbounded number of workspace templates had been used to store data the feature was never meant for.
id: REQ-portal-workspace-templates-maximum-count
type: req
---
The number of workspace templates per partner account in the partner portal is limited to 150; the limit is fixed.

## Context

An unbounded number of workspace templates had been used to store data the feature was never meant for.

## Source

> feat(portal): limit workspace templates per partner account (PRT-146)

Source: Partner portal decision log - PRT-146
