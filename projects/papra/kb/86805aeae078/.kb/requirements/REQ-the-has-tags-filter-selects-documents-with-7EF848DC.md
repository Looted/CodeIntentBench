---
title: The has:tags filter selects documents with at least one tag and its negation (-has:tags or NOT has:tags) selects untagged documents.
status: active
semantic_text: The has:tags filter selects documents with at least one tag and its negation (-has:tags or NOT has:tags) selects untagged documents.
logic_claims:
  - CLAIM-D8B78B034C90ABE1
  - CLAIM-396455D000BC81F5
semantic_clauses:
  - The has:tags filter selects documents with at least one tag
  - its negation (-has:tags or NOT has:tags) selects untagged documents
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2c2d69e68341a3dd1cabce88f07f020b0104bcd2be3d70b7f8e2a6181de07a31
semantic_inventory:
  - claim_key: CLAIM-D8B78B034C90ABE1
    claim_text: The has:tags filter selects documents with at least one tag
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - search.filter.has_tags
  - claim_key: CLAIM-396455D000BC81F5
    claim_text: its negation (-has:tags or NOT has:tags) selects untagged documents
    role: descriptive
    status: modeled
    span:
      start: 64
      end: 131
    subjects:
      - search.filter.has_tags
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 03-guides/08-advanced-search.mdx#has-tags'
  recorded_at: '2026-10-14T12:11:17.818Z'
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:search
id: REQ-the-has-tags-filter-selects-documents-with-7EF848DC
type: req
required_evidence: asserted
---
The has:tags filter selects documents with at least one tag and its negation (-has:tags or NOT has:tags) selects untagged documents.

## Context

Reason not stated.

## Source

> - `has:tags` - Check if documents have any tags, it can be negated with `-has:tags` or `NOT has:tags` to find untagged documents

Source: Papra documentation site (apps/docs) - 03-guides/08-advanced-search.mdx#has-tags
