---
title: ingestion_folders.process_file if_the_post_processing_strategy_is_set_to = True
status: active
fact_kind: property_value
subject_key: ingestion_folders.process_file
property_key: if_the_post_processing_strategy_is_set_to
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5858FC67A28B1121
claim_text: When a file is added to an organization ingestion folder, if the post processing strategy is set to "delete", the file is ingested and deleted
text_ref: REQ-papra-ingestion-folders-post-processing-strategy-is-set-to-delete
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1420'
  recorded_at: '2025-06-21T11:26:18.000Z'
id: FACT-papra-ingestion-folders-process-file-if-the-post-processing-strategy-is-set-to
type: fact
---
When a file is added to an organization ingestion folder, if the post processing strategy is set to "delete", the file is ingested and deleted.

Modeled from REQ-papra-ingestion-folders-post-processing-strategy-is-set-to-delete so the claim can be checked for contradictions.
