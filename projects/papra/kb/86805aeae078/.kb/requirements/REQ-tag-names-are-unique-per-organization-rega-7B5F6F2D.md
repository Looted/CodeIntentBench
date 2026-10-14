---
title: Tag names are unique per organization regardless of letter case; a lowercase normalized name carries the unique constraint and a duplicate is reported as tag…
status: active
semantic_text: Tag names are unique per organization regardless of letter case; a lowercase normalized name carries the unique constraint and a duplicate is reported as tag-already-exists.
logic_claims:
  - CLAIM-95E4629CAE58C828
  - CLAIM-AE2B0D25F3D9FEA3
semantic_clauses:
  - Tag names are unique per organization regardless of letter case
  - a lowercase normalized name carries the unique constraint and a duplicate is reported as tag-already-exists
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 262ccd040e933a1e65355201eecc87045e056e86daa1f4b25044dc179f1a6ff9
semantic_inventory:
  - claim_key: CLAIM-95E4629CAE58C828
    claim_text: Tag names are unique per organization regardless of letter case
    role: descriptive
    status: ontology_gap
    span:
      start: 0
      end: 63
  - claim_key: CLAIM-AE2B0D25F3D9FEA3
    claim_text: a lowercase normalized name carries the unique constraint and a duplicate is reported as tag-already-exists
    role: descriptive
    status: ontology_gap
    span:
      start: 65
      end: 172
firmness: firm
origin:
  kind: import
  ref: 'papra-hq/papra merged pull requests: #822'
  recorded_at: '2026-10-14T12:11:10.114Z'
tags:
  - bootstrap
  - knowledge-source:papra-prs
  - component:tags
id: REQ-tag-names-are-unique-per-organization-rega-7B5F6F2D
type: req
---
Tag names are unique per organization regardless of letter case; a lowercase normalized name carries the unique constraint and a duplicate is reported as tag-already-exists.

## Context

Reason not stated.

## Source

> feat(tags): enforce case-insensitive unique constraint for tag names (#822)

Source: papra-hq/papra merged pull requests - #822
