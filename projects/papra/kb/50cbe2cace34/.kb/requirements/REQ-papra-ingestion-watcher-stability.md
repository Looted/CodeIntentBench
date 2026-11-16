---
title: The ingestion folder watcher consumes a file only after its size has stayed constant for INGESTION_FOLDER_WATCHER_FILE_STABILITY_THRESHOLD_MS; the polling in…
status: active
semantic_text: The ingestion folder watcher consumes a file only after its size has stayed constant for INGESTION_FOLDER_WATCHER_FILE_STABILITY_THRESHOLD_MS; the polling interval is INGESTION_FOLDER_WATCHER_FILE_STABILITY_POLL_INTERVAL_MS.
semantic_clauses:
  - The ingestion folder watcher consumes a file only after its size has stayed constant for INGESTION_FOLDER_WATCHER_FILE_STABILITY_THRESHOLD_MS
  - the polling interval is INGESTION_FOLDER_WATCHER_FILE_STABILITY_POLL_INTERVAL_MS
logic_claims:
  - CLAIM-DC7235C8BC521E2B
  - CLAIM-C4D511FC9FEBA074
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 23845bf6da4f3cf4ccd91d9ac78cd3a96b7c74c0a85667ee601cf179fdd2c3c2
semantic_inventory:
  - claim_key: CLAIM-DC7235C8BC521E2B
    claim_text: The ingestion folder watcher consumes a file only after its size has stayed constant for INGESTION_FOLDER_WATCHER_FILE_STABILITY_THRESHOLD_MS
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 141
    subjects:
      - ingestion_folder.watcher_stability
  - claim_key: CLAIM-C4D511FC9FEBA074
    claim_text: the polling interval is INGESTION_FOLDER_WATCHER_FILE_STABILITY_POLL_INTERVAL_MS
    role: descriptive
    status: modeled
    span:
      start: 143
      end: 223
    subjects:
      - ingestion_folder.watcher_stability
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.0 changelog, #1173: Added the possibility to configure the file size polling int'
  recorded_at: '2026-11-16T10:36:21.602Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:ingestion
rationale: 'The changeset of #1173 (2026-06-17): "This helps to avoid processing files that are still being written to (e.g., scanners, cameras, network shares, etc.)."'
id: REQ-papra-ingestion-watcher-stability
type: req
---
The ingestion folder watcher consumes a file only after its size has stayed constant for INGESTION_FOLDER_WATCHER_FILE_STABILITY_THRESHOLD_MS; the polling interval is INGESTION_FOLDER_WATCHER_FILE_STABILITY_POLL_INTERVAL_MS.

## Context

The changeset of #1173 (2026-06-17): "This helps to avoid processing files that are still being written to (e.g., scanners, cameras, network shares, etc.)."

## Source

> Added the possibility to configure the file size polling interval for ingestion folder watchers. - `INGESTION_FOLDER_WATCHER_FILE_STABILITY_THRESHOLD_MS`: The amount of time in milliseconds for a file size to remain constant before being consumed. This helps to avoid processing files that are still being written to (e.g., scanners, cameras, network shares, etc.). - `INGESTION_FOLDER_WATCHER_FILE_STABILITY_POLL_INTERVAL_MS`: The interval in milliseconds at which the file size is polled while waiting for write to finish.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.6.0 changelog, #1173: Added the possibility to configure the file size polling int
