---
title: Storage key patterns support {{document.date}} and {{document.createdAt}}; documents without a date use no-date, which the default transformer can change.
status: active
semantic_text: Storage key patterns support {{document.date}} and {{document.createdAt}}; documents without a date use no-date, which the default transformer can change.
semantic_clauses:
  - Storage key patterns support {{document.date}} and {{document.createdAt}}
  - documents without a date use no-date, which the default transformer can change
logic_claims:
  - CLAIM-7DF263FA600F175B
  - CLAIM-0624C08B18E10BC5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 00643fdcf12108206570d1dafd2784accceb45e7b92b54ddbea2638358a92d4b
semantic_inventory:
  - claim_key: CLAIM-7DF263FA600F175B
    claim_text: Storage key patterns support {{document.date}} and {{document.createdAt}}
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - storage_pattern.document_date
  - claim_key: CLAIM-0624C08B18E10BC5
    claim_text: documents without a date use no-date, which the default transformer can change
    role: descriptive
    status: modeled
    span:
      start: 75
      end: 153
    subjects:
      - storage_pattern.document_date
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.7.0 changelog, #1528: Added `document.date` and `document.createdAt` to storage ke'
  recorded_at: '2026-11-16T10:31:06.221Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:storage
id: REQ-papra-storage-pattern-document-date
type: req
---
Storage key patterns support {{document.date}} and {{document.createdAt}}; documents without a date use no-date, which the default transformer can change.

## Context

Reason not stated.

## Source

> Added `document.date` and `document.createdAt` to storage key patterns, so you can organize files by document date or creation date. Documents without a date use `no-date` (and can be configured with the `default` transformer).

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.7.0 changelog, #1528: Added `document.date` and `document.createdAt` to storage ke
