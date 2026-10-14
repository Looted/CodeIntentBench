---
title: Files matching INGESTION_FOLDER_IGNORED_PATTERNS are skipped by folder ingestion, and Synology metadata files (@SynoEAStream, @SynoResource) are in the defau…
status: active
semantic_text: Files matching INGESTION_FOLDER_IGNORED_PATTERNS are skipped by folder ingestion, and Synology metadata files (@SynoEAStream, @SynoResource) are in the default ignore list.
logic_claims:
  - CLAIM-873099C8C5F984EC
semantic_clauses:
  - Files matching INGESTION_FOLDER_IGNORED_PATTERNS are skipped by folder ingestion, and Synology metadata files (@SynoEAStream, @SynoResource) are in the default ignore list
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0bc3ffa8c2f7f8df43048d9efc822cb87c6e2b9f0c7f77f0621055cf25f07798
semantic_inventory:
  - claim_key: CLAIM-873099C8C5F984EC
    claim_text: Files matching INGESTION_FOLDER_IGNORED_PATTERNS are skipped by folder ingestion, and Synology metadata files (@SynoEAStream, @SynoResource) are in the default ignore list
    role: descriptive
    status: ontology_gap
    span:
      start: 0
      end: 171
firmness: firm
origin:
  kind: import
  ref: 'papra-hq/papra GitHub issues: #881'
  recorded_at: '2026-10-14T12:08:49.017Z'
tags:
  - bootstrap
  - knowledge-source:papra-issues
  - component:ingestion_folder
id: REQ-files-matching-ingestion-folder-ignored-pa-9B49E534
type: req
---
Files matching INGESTION_FOLDER_IGNORED_PATTERNS are skipped by folder ingestion, and Synology metadata files (@SynoEAStream, @SynoResource) are in the default ignore list.

## Context

Reason not stated.

## Source

> It's already possible to exclude files and folders using the `INGESTION_FOLDER_IGNORED_PATTERNS` env variable.

Source: papra-hq/papra GitHub issues - #881
