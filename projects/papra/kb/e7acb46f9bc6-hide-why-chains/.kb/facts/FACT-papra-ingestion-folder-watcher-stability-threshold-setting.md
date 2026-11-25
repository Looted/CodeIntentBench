---
title: ingestion_folder.watcher_stability threshold_setting = INGESTION_FOLDER_WATCHER_FILE_STABILITY_THRESHOLD_MS
status: active
fact_kind: property_value
subject_key: ingestion_folder.watcher_stability
property_key: threshold_setting
operator: eq
value_type: string
value_string: INGESTION_FOLDER_WATCHER_FILE_STABILITY_THRESHOLD_MS
claim_key: CLAIM-DC7235C8BC521E2B
claim_text: The ingestion folder watcher consumes a file only after its size has stayed constant for INGESTION_FOLDER_WATCHER_FILE_STABILITY_THRESHOLD_MS
text_ref: REQ-papra-ingestion-watcher-stability
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.0 changelog, #1173: Added the possibility to configure the file size polling int'
  recorded_at: '2026-11-16T13:22:35.806Z'
id: FACT-papra-ingestion-folder-watcher-stability-threshold-setting
type: fact
---
The ingestion folder watcher consumes a file only after its size has stayed constant for INGESTION_FOLDER_WATCHER_FILE_STABILITY_THRESHOLD_MS.

Modeled from REQ-papra-ingestion-watcher-stability so the claim can be checked for contradictions.
