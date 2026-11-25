---
title: ingestion_folder.watcher_stability poll_setting = INGESTION_FOLDER_WATCHER_FILE_STABILITY_POLL_INTERVAL_MS
status: active
fact_kind: property_value
subject_key: ingestion_folder.watcher_stability
property_key: poll_setting
operator: eq
value_type: string
value_string: INGESTION_FOLDER_WATCHER_FILE_STABILITY_POLL_INTERVAL_MS
claim_key: CLAIM-C4D511FC9FEBA074
claim_text: the polling interval is INGESTION_FOLDER_WATCHER_FILE_STABILITY_POLL_INTERVAL_MS
text_ref: REQ-papra-ingestion-watcher-stability
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.0 changelog, #1173: Added the possibility to configure the file size polling int'
  recorded_at: '2026-11-16T10:25:29.765Z'
id: FACT-papra-ingestion-folder-watcher-stability-poll-setting
type: fact
---
The polling interval is INGESTION_FOLDER_WATCHER_FILE_STABILITY_POLL_INTERVAL_MS.

Modeled from REQ-papra-ingestion-watcher-stability so the claim can be checked for contradictions.
