---
title: Tag names are unique per organization regardless of letter case; a lowercase normalized name carries the unique constraint and a duplicate is reported as tag…
status: active
semantic_text: Tag names are unique per organization regardless of letter case; a lowercase normalized name carries the unique constraint and a duplicate is reported as tag-already-exists.
logic_claims:
  - CLAIM-95E4629CAE58C828
  - CLAIM-3FF00DCBE4045318
  - CLAIM-E703678EE76BA481
semantic_clauses:
  - Tag names are unique per organization regardless of letter case
  - a lowercase normalized name carries the unique constraint
  - a duplicate is reported as tag-already-exists
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 262ccd040e933a1e65355201eecc87045e056e86daa1f4b25044dc179f1a6ff9
semantic_inventory:
  - claim_key: CLAIM-95E4629CAE58C828
    claim_text: Tag names are unique per organization regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 63
    subjects:
      - tags.tag
  - claim_key: CLAIM-3FF00DCBE4045318
    claim_text: a lowercase normalized name carries the unique constraint
    role: descriptive
    status: modeled
    span:
      start: 65
      end: 122
    subjects:
      - tags.tag
  - claim_key: CLAIM-E703678EE76BA481
    claim_text: a duplicate is reported as tag-already-exists
    role: descriptive
    status: modeled
    span:
      start: 127
      end: 172
    subjects:
      - tags.tag
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
required_evidence: asserted
---
Tag names are unique per organization regardless of letter case; a lowercase normalized name carries the unique constraint and a duplicate is reported as tag-already-exists.

## Context

Reason not stated.

## Source

> feat(tags): enforce case-insensitive unique constraint for tag names (#822)

Source: papra-hq/papra merged pull requests - #822
