---
title: When a file is added to an organization ingestion folder, if a file is located in the post-processed "done" folder or "error" folder, it is not processed nor…
status: active
semantic_text: When a file is added to an organization ingestion folder, if a file is located in the post-processed "done" folder or "error" folder, it is not processed nor ingested.
semantic_clauses:
  - When a file is added to an organization ingestion folder, if a file is located in the post-processed "done" folder or "error" folder, it is not processed nor ingested
logic_claims:
  - CLAIM-632B4D5807BBBFA6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9ce55119c5e4bff85a6b4f4257089080547a87ab30500d691f76df0b2dbfa21b
semantic_inventory:
  - claim_key: CLAIM-632B4D5807BBBFA6
    claim_text: When a file is added to an organization ingestion folder, if a file is located in the post-processed "done" folder or "error" folder, it is not processed nor ingested
    role: condition
    status: modeled
    span:
      start: 0
      end: 166
    subjects:
      - ingestion_folders.process_file
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1414'
  recorded_at: '2025-10-18T08:39:33.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:ingestion-folders
id: REQ-papra-ingestion-folders-file-is-located-in-post-processed-done
type: req
---
When a file is added to an organization ingestion folder, if a file is located in the post-processed "done" folder or "error" folder, it is not processed nor ingested.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/ingestion-folders/ingestion-folders.usecases.test.ts (ingestion-folders usecases > processFile > when a file is added to an organization ingestion folder).

## Source

Source: Papra server behaviour notes - SRV-1414
