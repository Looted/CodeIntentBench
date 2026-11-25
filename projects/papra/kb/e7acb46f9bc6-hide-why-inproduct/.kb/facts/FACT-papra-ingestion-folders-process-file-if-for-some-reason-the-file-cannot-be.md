---
title: ingestion_folders.process_file if_for_some_reason_the_file_cannot_be = True
status: active
fact_kind: property_value
subject_key: ingestion_folders.process_file
property_key: if_for_some_reason_the_file_cannot_be
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-B7F6A7A132E0DA1A
claim_text: When a file is added to an organization ingestion folder, if for some reason the file cannot be read, a log is emitted and the processing stops
text_ref: REQ-papra-ingestion-folders-for-some-reason-file-cannot-be-read
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1417'
  recorded_at: '2025-09-27T10:52:03.000Z'
id: FACT-papra-ingestion-folders-process-file-if-for-some-reason-the-file-cannot-be
type: fact
---
When a file is added to an organization ingestion folder, if for some reason the file cannot be read, a log is emitted and the processing stops.

Modeled from REQ-papra-ingestion-folders-for-some-reason-file-cannot-be-read so the claim can be checked for contradictions.
