---
title: Ingest Files Under Such A Folder forbidden
status: active
text_ref: papra-issues:#482
tags:
  - strict-modeling
  - confidence:0.90
  - confidence-band:high
  - provenance:papra-issues-482
  - lane:strict
  - fact:property_value
fact_kind: property_value
subject_key: ingestion_folder.ingestion_error_folder
property_key: ingest_files_under_such_a_folder
canonical_key: knowledge-source-papra-issues:ingestion_folder.ingestion_error_folder:ingest_files_under_such_a_folder:polarity:forbid
operator: eq
value_type: bool
value_bool: true
polarity: forbid
claim_key: CLAIM-345B9D174EDC203A
claim_text: The ingestion error folder and post-processing move folder accept absolute paths (INGESTION_FOLDER_ERROR_FOLDER_PATH, INGESTION_FOLDER_POST_PROCESSING_MOVE_FOLDER_PATH), and the watcher must not ingest files under such a folder.
origin:
  kind: agent
  recorded_at: '2026-10-14T12:10:20.660Z'
id: FACT-PROP-797C15E30B14AE61
type: fact
---
