---
title: Workspace templates in the partner portal are unique per partner account regardless of letter case; a duplicate is reported as workspace-template-already-exi…
status: active
semantic_text: Workspace templates in the partner portal are unique per partner account regardless of letter case; a duplicate is reported as workspace-template-already-exists.
semantic_clauses:
  - Workspace templates in the partner portal are unique per partner account regardless of letter case
  - a duplicate is reported as workspace-template-already-exists
logic_claims:
  - CLAIM-147F762BF2748B96
  - CLAIM-FD74B07820D66DE7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 86c08c950d6762c8897f3ec2b5f7698b6c1056da658763426cedab9d8bf8afa5
semantic_inventory:
  - claim_key: CLAIM-147F762BF2748B96
    claim_text: Workspace templates in the partner portal are unique per partner account regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 98
    subjects:
      - portal.workspace_templates
  - claim_key: CLAIM-FD74B07820D66DE7
    claim_text: a duplicate is reported as workspace-template-already-exists
    role: descriptive
    status: modeled
    span:
      start: 100
      end: 160
    subjects:
      - portal.workspace_templates
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-144'
  recorded_at: '2025-11-13T11:51:58.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Two workspace templates that differed only by capitalisation were being created by accident and then merged by hand.
id: REQ-portal-workspace-templates-unique-ignoring-case
type: req
---
Workspace templates in the partner portal are unique per partner account regardless of letter case; a duplicate is reported as workspace-template-already-exists.

## Context

Two workspace templates that differed only by capitalisation were being created by accident and then merged by hand.

## Source

> feat(portal): case-insensitive unique workspace template names (PRT-144)

Source: Partner portal decision log - PRT-144
