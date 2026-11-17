---
title: Sidebar group names on the documentation site are limited to 24 characters.
status: active
semantic_text: Sidebar group names on the documentation site are limited to 24 characters.
semantic_clauses:
  - Sidebar group names on the documentation site are limited to 24 characters
logic_claims:
  - CLAIM-B8CC03D8581F18DB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4d5bc704c4dbfc2438ea2c1e4728eb368dc9d8728ccdb9a9650a7c70a5c7eca1
semantic_inventory:
  - claim_key: CLAIM-B8CC03D8581F18DB
    claim_text: Sidebar group names on the documentation site are limited to 24 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - docs.sidebar_groups
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-169'
  recorded_at: '2026-09-02T16:23:21.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: The column that stores the name is 24 characters wide.
id: REQ-docs-sidebar-groups-name-length
type: req
---
Sidebar group names on the documentation site are limited to 24 characters.

## Context

The column that stores the name is 24 characters wide.

## Source

> feat(docs): cap sidebar group name length at 24 (DOC-169)

Source: Documentation site decision log (apps/docs) - DOC-169
