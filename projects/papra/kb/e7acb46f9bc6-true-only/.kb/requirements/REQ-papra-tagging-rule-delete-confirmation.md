---
title: Deleting a tagging rule asks for confirmation first.
status: active
semantic_text: Deleting a tagging rule asks for confirmation first.
semantic_clauses:
  - Deleting a tagging rule asks for confirmation first
logic_claims:
  - CLAIM-7CD19CD04322C96F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 901fca1f2063fd5865597c3f666b6883cd7f09699b0fa6778f110d95397d6026
semantic_inventory:
  - claim_key: CLAIM-7CD19CD04322C96F
    claim_text: Deleting a tagging rule asks for confirmation first
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 51
    subjects:
      - tagging_rules.delete_confirmation
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.2 changelog, #1407: Added a deletion confirmation modal when deleting a tagging'
  recorded_at: '2026-11-16T10:22:10.572Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:tagging-rules
rationale: 'The changeset of #1407 (2026-08-07): "to prevent accidental deletion of tagging rules".'
id: REQ-papra-tagging-rule-delete-confirmation
type: req
---
Deleting a tagging rule asks for confirmation first.

## Context

The changeset of #1407 (2026-08-07): "to prevent accidental deletion of tagging rules".

## Source

> Added a deletion confirmation modal when deleting a tagging rule, to prevent accidental deletion of tagging rules.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.6.2 changelog, #1407: Added a deletion confirmation modal when deleting a tagging
