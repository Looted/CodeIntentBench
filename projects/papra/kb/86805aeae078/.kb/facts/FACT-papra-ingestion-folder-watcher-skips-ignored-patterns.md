---
title: ingestion_folder.watcher skips_ignored_patterns = True
status: active
fact_kind: property_value
subject_key: ingestion_folder.watcher
property_key: skips_ignored_patterns
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-122680AEEA84C804
claim_text: Files matching INGESTION_FOLDER_IGNORED_PATTERNS are skipped by folder ingestion
text_ref: REQ-files-matching-ingestion-folder-ignored-pa-9B49E534
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #881'
  recorded_at: '2026-11-15T21:50:27.695Z'
id: FACT-papra-ingestion-folder-watcher-skips-ignored-patterns
type: fact
---
Files matching INGESTION_FOLDER_IGNORED_PATTERNS are skipped by folder ingestion.

Modeled from REQ-files-matching-ingestion-folder-ignored-pa-9B49E534 so the claim can be checked for contradictions.
