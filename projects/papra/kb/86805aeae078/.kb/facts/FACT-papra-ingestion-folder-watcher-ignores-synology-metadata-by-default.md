---
title: ingestion_folder.watcher ignores_synology_metadata_by_default = True
status: active
fact_kind: property_value
subject_key: ingestion_folder.watcher
property_key: ignores_synology_metadata_by_default
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0D361F585256487B
claim_text: Synology metadata files (@SynoEAStream, @SynoResource) are in the default ignore list
text_ref: REQ-files-matching-ingestion-folder-ignored-pa-9B49E534
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #881'
  recorded_at: '2026-11-15T21:50:28.241Z'
id: FACT-papra-ingestion-folder-watcher-ignores-synology-metadata-by-default
type: fact
---
Synology metadata files (@SynoEAStream, @SynoResource) are in the default ignore list.

Modeled from REQ-files-matching-ingestion-folder-ignored-pa-9B49E534 so the claim can be checked for contradictions.
