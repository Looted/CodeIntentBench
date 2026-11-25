---
title: ingestion_folder.special_folders accept_absolute_paths = True
status: active
fact_kind: property_value
subject_key: ingestion_folder.special_folders
property_key: accept_absolute_paths
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-061911D24ED061E9
claim_text: The ingestion error folder and post-processing move folder accept absolute paths (INGESTION_FOLDER_ERROR_FOLDER_PATH, INGESTION_FOLDER_POST_PROCESSING_MOVE_FOLDER_PATH)
text_ref: REQ-AUTO-198A6A47509791DF
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #482'
  recorded_at: '2026-11-15T21:44:32.483Z'
id: FACT-papra-ingestion-folder-special-folders-accept-absolute-paths
type: fact
---
The ingestion error folder and post-processing move folder accept absolute paths (INGESTION_FOLDER_ERROR_FOLDER_PATH, INGESTION_FOLDER_POST_PROCESSING_MOVE_FOLDER_PATH).

Modeled from REQ-AUTO-198A6A47509791DF so the claim can be checked for contradictions.
