---
title: ingestion_folders.process_file if_the_post_processing_strategy_is_set_to_2 = True
status: active
fact_kind: property_value
subject_key: ingestion_folders.process_file
property_key: if_the_post_processing_strategy_is_set_to_2
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-03DD5E34AC865A88
claim_text: When a file is added to an organization ingestion folder, if the post processing strategy is set to "move", the file is ingested and moved to the done folder
text_ref: REQ-papra-ingestion-folders-post-processing-strategy-is-set-to-move
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1421'
  recorded_at: '2025-12-20T09:35:27.000Z'
id: FACT-papra-ingestion-folders-process-file-if-the-post-processing-strategy-is-set-to-2
type: fact
---
When a file is added to an organization ingestion folder, if the post processing strategy is set to "move", the file is ingested and moved to the done folder.

Modeled from REQ-papra-ingestion-folders-post-processing-strategy-is-set-to-move so the claim can be checked for contradictions.
