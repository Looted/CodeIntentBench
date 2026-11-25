---
title: ingestion_folders.process_file if_a_file_is_located_in_the_post = True
status: active
fact_kind: property_value
subject_key: ingestion_folders.process_file
property_key: if_a_file_is_located_in_the_post
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-632B4D5807BBBFA6
claim_text: When a file is added to an organization ingestion folder, if a file is located in the post-processed "done" folder or "error" folder, it is not processed nor ingested
text_ref: REQ-papra-ingestion-folders-file-is-located-in-post-processed-done
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1414'
  recorded_at: '2025-10-18T08:39:33.000Z'
id: FACT-papra-ingestion-folders-process-file-if-a-file-is-located-in-the-post
type: fact
---
When a file is added to an organization ingestion folder, if a file is located in the post-processed "done" folder or "error" folder, it is not processed nor ingested.

Modeled from REQ-papra-ingestion-folders-file-is-located-in-post-processed-done so the claim can be checked for contradictions.
