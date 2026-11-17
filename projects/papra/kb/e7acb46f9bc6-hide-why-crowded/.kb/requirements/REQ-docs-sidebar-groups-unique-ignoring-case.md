---
title: Sidebar groups on the documentation site are unique per documentation version regardless of letter case; a duplicate is reported as sidebar-group-already-exi…
status: active
semantic_text: Sidebar groups on the documentation site are unique per documentation version regardless of letter case; a duplicate is reported as sidebar-group-already-exists.
semantic_clauses:
  - Sidebar groups on the documentation site are unique per documentation version regardless of letter case
  - a duplicate is reported as sidebar-group-already-exists
logic_claims:
  - CLAIM-62036F329464BD8E
  - CLAIM-53BF42BCA169A9B6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 14b7baa4127c10b3133bbd1f0b09bc7ab22f6dfa0b0a1e34522f87cb17952b68
semantic_inventory:
  - claim_key: CLAIM-62036F329464BD8E
    claim_text: Sidebar groups on the documentation site are unique per documentation version regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 103
    subjects:
      - docs.sidebar_groups
  - claim_key: CLAIM-53BF42BCA169A9B6
    claim_text: a duplicate is reported as sidebar-group-already-exists
    role: descriptive
    status: modeled
    span:
      start: 105
      end: 160
    subjects:
      - docs.sidebar_groups
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-164'
  recorded_at: '2025-05-26T17:04:36.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
id: REQ-docs-sidebar-groups-unique-ignoring-case
type: req
---
Sidebar groups on the documentation site are unique per documentation version regardless of letter case; a duplicate is reported as sidebar-group-already-exists.

## Context

Reason not stated.

## Source

> feat(docs): case-insensitive unique sidebar group names (DOC-164)

Source: Documentation site decision log (apps/docs) - DOC-164
