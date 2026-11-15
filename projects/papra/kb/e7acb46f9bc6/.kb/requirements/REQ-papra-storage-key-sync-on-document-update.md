---
title: Storage key synchronization is optional and off by default (DOCUMENT_STORAGE_KEY_SYNC_ENABLED, with pattern-based storage keys); when it is enabled, a change…
status: active
semantic_text: Storage key synchronization is optional and off by default (DOCUMENT_STORAGE_KEY_SYNC_ENABLED, with pattern-based storage keys); when it is enabled, a change of a document's name or document date re-evaluates the pattern and moves the stored file to the new key; enabling it does not move existing files by itself; a failed copy or database update keeps the original file.
semantic_clauses:
  - Storage key synchronization is optional and off by default (DOCUMENT_STORAGE_KEY_SYNC_ENABLED, with pattern-based storage keys)
  - when it is enabled, a change of a document's name or document date re-evaluates the pattern and moves the stored file to the new key
  - enabling it does not move existing files by itself
  - a failed copy or database update keeps the original file
logic_claims:
  - CLAIM-3C97454B5F2F5AAB
  - CLAIM-CA7158CF32B244E3
  - CLAIM-5E75D4B18AC63A8D
  - CLAIM-40F125176F954E2E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ee97de27a8c9e5b99e4bbf2fd75e438a466a4d49936b1bf3fec4c74c1c0a55ff
semantic_inventory:
  - claim_key: CLAIM-3C97454B5F2F5AAB
    claim_text: Storage key synchronization is optional and off by default (DOCUMENT_STORAGE_KEY_SYNC_ENABLED, with pattern-based storage keys)
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 127
    subjects:
      - document.storage_key_sync
  - claim_key: CLAIM-CA7158CF32B244E3
    claim_text: when it is enabled, a change of a document's name or document date re-evaluates the pattern and moves the stored file to the new key
    role: condition
    status: modeled
    span:
      start: 129
      end: 261
    subjects:
      - document.storage_key_sync
  - claim_key: CLAIM-5E75D4B18AC63A8D
    claim_text: enabling it does not move existing files by itself
    role: descriptive
    status: modeled
    span:
      start: 263
      end: 313
    subjects:
      - document.storage_key_sync
  - claim_key: CLAIM-40F125176F954E2E
    claim_text: a failed copy or database update keeps the original file
    role: descriptive
    status: modeled
    span:
      start: 315
      end: 371
    subjects:
      - document.storage_key_sync
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra merged pull requests: #1525'
  recorded_at: '2026-11-15T22:57:01.265Z'
tags:
  - bootstrap
  - knowledge-source:papra-prs
  - component:storage
rationale: 'The changeset of PR #1525 (2026-09-18): synchronization was added "so document renames are reflected in the underlying storage". Why it is off by default, and why only name and date changes trigger it: reason not stated.'
id: REQ-papra-storage-key-sync-on-document-update
type: req
---
Storage key synchronization is optional and off by default (DOCUMENT_STORAGE_KEY_SYNC_ENABLED, with pattern-based storage keys); when it is enabled, a change of a document's name or document date re-evaluates the pattern and moves the stored file to the new key; enabling it does not move existing files by itself; a failed copy or database update keeps the original file.

## Context

The changeset of PR #1525 (2026-09-18): synchronization was added "so document renames are reflected in the underlying storage". Why it is off by default, and why only name and date changes trigger it: reason not stated.

## Source

> Added optional storage key synchronization so document renames are reflected in the underlying storage. Enable it with `DOCUMENT_STORAGE_KEY_SYNC_ENABLED=true` when using pattern-based storage keys.
> Currently, synchronization is triggered by document name or document date changes. Papra copies the stored file to the new key, updates its database reference, and removes the old file.
> Enabling synchronization does not immediately move existing files: it applies to subsequent updates that trigger synchronization.
> Failed copies or database updates retain the original file, while failed old-file cleanup leaves the new key usable.

Source: papra-hq/papra merged pull requests - #1525
