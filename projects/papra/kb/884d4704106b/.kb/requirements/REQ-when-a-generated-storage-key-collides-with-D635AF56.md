---
title: When a generated storage key collides with an existing file, the new file gets a suffix on its name; existing files are never overwritten and existing docume…
status: active
semantic_text: When a generated storage key collides with an existing file, the new file gets a suffix on its name; existing files are never overwritten and existing documents keep their old paths when the pattern changes.
logic_claims:
  - CLAIM-F8BC6C9CEA368CD7
  - CLAIM-272ECEE09D54D8BB
semantic_clauses:
  - When a generated storage key collides with an existing file, the new file gets a suffix on its name
  - existing files are never overwritten and existing documents keep their old paths when the pattern changes
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ae7987561656971e3b021a5eb2fc175e3bc78b0cd36ddee8d20b8be391b5090d
semantic_inventory:
  - claim_key: CLAIM-F8BC6C9CEA368CD7
    claim_text: When a generated storage key collides with an existing file, the new file gets a suffix on its name
    role: condition
    status: ontology_gap
    span:
      start: 0
      end: 99
  - claim_key: CLAIM-272ECEE09D54D8BB
    claim_text: existing files are never overwritten and existing documents keep their old paths when the pattern changes
    role: normative
    status: ontology_gap
    span:
      start: 101
      end: 206
firmness: firm
origin:
  kind: import
  ref: 'papra-hq/papra GitHub issues: #440'
  recorded_at: '2026-10-14T12:07:51.083Z'
tags:
  - bootstrap
  - knowledge-source:papra-issues
  - component:storage
id: REQ-when-a-generated-storage-key-collides-with-D635AF56
type: req
---
When a generated storage key collides with an existing file, the new file gets a suffix on its name; existing files are never overwritten and existing documents keep their old paths when the pattern changes.

## Context

Reason not stated.

## Source

> if you add or change the naming pattern, it'll continue to use the old path for existing documents

Source: papra-hq/papra GitHub issues - #440
