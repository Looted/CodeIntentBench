---
title: Files matching INGESTION_FOLDER_IGNORED_PATTERNS are skipped by folder ingestion, and Synology metadata files (@SynoEAStream, @SynoResource) are in the defau…
status: active
semantic_text: Files matching INGESTION_FOLDER_IGNORED_PATTERNS are skipped by folder ingestion, and Synology metadata files (@SynoEAStream, @SynoResource) are in the default ignore list.
logic_claims:
  - CLAIM-122680AEEA84C804
  - CLAIM-0D361F585256487B
semantic_clauses:
  - Files matching INGESTION_FOLDER_IGNORED_PATTERNS are skipped by folder ingestion
  - Synology metadata files (@SynoEAStream, @SynoResource) are in the default ignore list
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0bc3ffa8c2f7f8df43048d9efc822cb87c6e2b9f0c7f77f0621055cf25f07798
semantic_inventory:
  - claim_key: CLAIM-122680AEEA84C804
    claim_text: Files matching INGESTION_FOLDER_IGNORED_PATTERNS are skipped by folder ingestion
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - ingestion_folder.watcher
  - claim_key: CLAIM-0D361F585256487B
    claim_text: Synology metadata files (@SynoEAStream, @SynoResource) are in the default ignore list
    role: descriptive
    status: modeled
    span:
      start: 86
      end: 171
    subjects:
      - ingestion_folder.watcher
firmness: firm
origin:
  kind: import
  ref: 'papra-hq/papra GitHub issues: #881'
  recorded_at: '2026-10-14T12:11:33.106Z'
tags:
  - bootstrap
  - knowledge-source:papra-issues
  - component:ingestion_folder
id: REQ-files-matching-ingestion-folder-ignored-pa-9B49E534
type: req
required_evidence: asserted
rationale: 'Requested in issue #881 by Webreaper (2026-02-09): Synology "creates lots of metadata files that shouldn''t be imported." The maintainer agreed to add them to the default exclusion list without a reason of his own.'
---
Files matching INGESTION_FOLDER_IGNORED_PATTERNS are skipped by folder ingestion, and Synology metadata files (@SynoEAStream, @SynoResource) are in the default ignore list.

## Context

Requested in issue #881 by Webreaper (2026-02-09): Synology "creates lots of metadata files that shouldn't be imported." The maintainer agreed to add them to the default exclusion list without a reason of his own.

## Source

> It's already possible to exclude files and folders using the `INGESTION_FOLDER_IGNORED_PATTERNS` env variable.

Source: papra-hq/papra GitHub issues - #881
