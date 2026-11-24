---
title: When a generated storage key collides with an existing file, the new file gets a suffix on its name; existing files are never overwritten and existing docume…
status: active
semantic_text: When a generated storage key collides with an existing file, the new file gets a suffix on its name; existing files are never overwritten and existing documents keep their old paths when the pattern changes.
logic_claims:
  - CLAIM-F8BC6C9CEA368CD7
  - CLAIM-4AF6B5BC4A7FA0F8
  - CLAIM-71B9B732D8FE2F5A
semantic_clauses:
  - When a generated storage key collides with an existing file, the new file gets a suffix on its name
  - existing files are never overwritten
  - existing documents keep their old paths when the pattern changes
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ae7987561656971e3b021a5eb2fc175e3bc78b0cd36ddee8d20b8be391b5090d
semantic_inventory:
  - claim_key: CLAIM-F8BC6C9CEA368CD7
    claim_text: When a generated storage key collides with an existing file, the new file gets a suffix on its name
    role: condition
    status: modeled
    span:
      start: 0
      end: 99
    subjects:
      - document.storage_key
  - claim_key: CLAIM-4AF6B5BC4A7FA0F8
    claim_text: existing files are never overwritten
    role: descriptive
    status: modeled
    span:
      start: 101
      end: 137
    subjects:
      - document.storage_key
  - claim_key: CLAIM-71B9B732D8FE2F5A
    claim_text: existing documents keep their old paths when the pattern changes
    role: normative
    status: modeled
    span:
      start: 142
      end: 206
    subjects:
      - document.storage_key
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
required_evidence: asserted
rationale: 'Maintainer CorentinTh on issue #440: suffixes handle the case "if someone uploads two files that produce the same path" (2026-02-04), counter suffixes are used "as done by many OSes" (2026-02-04), and "The system has mechanisms to avoid data loss for non-deterministic patterns" (2026-03-01). Existing documents keep their old path "as their storage path is saved in the database" (2026-02-04). The storage key docs add that a final collision fails the upload "rather than overwriting existing data".'
---
When a generated storage key collides with an existing file, the new file gets a suffix on its name; existing files are never overwritten and existing documents keep their old paths when the pattern changes.

## Context

Maintainer CorentinTh on issue #440: suffixes handle the case "if someone uploads two files that produce the same path" (2026-02-04), counter suffixes are used "as done by many OSes" (2026-02-04), and "The system has mechanisms to avoid data loss for non-deterministic patterns" (2026-03-01). Existing documents keep their old path "as their storage path is saved in the database" (2026-02-04). The storage key docs add that a final collision fails the upload "rather than overwriting existing data".

## Source

> if you add or change the naming pattern, it'll continue to use the old path for existing documents

Source: papra-hq/papra GitHub issues - #440
