---
title: When a file is added to an organization ingestion folder, if the post processing strategy is set to "move", the file is ingested and moved to the done folder.
status: active
semantic_text: When a file is added to an organization ingestion folder, if the post processing strategy is set to "move", the file is ingested and moved to the done folder.
semantic_clauses:
  - When a file is added to an organization ingestion folder, if the post processing strategy is set to "move", the file is ingested and moved to the done folder
logic_claims:
  - CLAIM-03DD5E34AC865A88
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c9d0596df1bde5d9e934e8e7e604ade863b890ba7fb9bbcb4c6e3af58c0ea915
semantic_inventory:
  - claim_key: CLAIM-03DD5E34AC865A88
    claim_text: When a file is added to an organization ingestion folder, if the post processing strategy is set to "move", the file is ingested and moved to the done folder
    role: condition
    status: modeled
    span:
      start: 0
      end: 157
    subjects:
      - ingestion_folders.process_file
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1421'
  recorded_at: '2025-12-20T09:35:27.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:ingestion-folders
id: REQ-papra-ingestion-folders-post-processing-strategy-is-set-to-move
type: req
---
When a file is added to an organization ingestion folder, if the post processing strategy is set to "move", the file is ingested and moved to the done folder.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/ingestion-folders/ingestion-folders.usecases.test.ts (ingestion-folders usecases > processFile > when a file is added to an organization ingestion folder).

## Source

Source: Papra server behaviour notes - SRV-1421
