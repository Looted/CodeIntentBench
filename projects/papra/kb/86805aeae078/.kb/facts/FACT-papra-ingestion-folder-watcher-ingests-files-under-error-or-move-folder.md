---
title: ingestion_folder.watcher ingests_files_under_error_or_move_folder = False
status: active
fact_kind: property_value
subject_key: ingestion_folder.watcher
property_key: ingests_files_under_error_or_move_folder
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9C6953F1C4051239
claim_text: the watcher must not ingest files under such a folder
text_ref: REQ-AUTO-198A6A47509791DF
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #482'
  recorded_at: '2026-11-15T21:49:42.368Z'
id: FACT-papra-ingestion-folder-watcher-ingests-files-under-error-or-move-folder
type: fact
---
The watcher must not ingest files under such a folder.

Modeled from REQ-AUTO-198A6A47509791DF so the claim can be checked for contradictions.
