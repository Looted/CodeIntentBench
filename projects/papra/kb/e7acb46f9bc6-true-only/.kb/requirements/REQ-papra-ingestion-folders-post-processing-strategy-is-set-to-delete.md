---
title: When a file is added to an organization ingestion folder, if the post processing strategy is set to "delete", the file is ingested and deleted.
status: active
semantic_text: When a file is added to an organization ingestion folder, if the post processing strategy is set to "delete", the file is ingested and deleted.
semantic_clauses:
  - When a file is added to an organization ingestion folder, if the post processing strategy is set to "delete", the file is ingested and deleted
logic_claims:
  - CLAIM-5858FC67A28B1121
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 704aeba2490f0478bcc5970745deb5ea65ffe3191299997cabaafbba730ec7da
semantic_inventory:
  - claim_key: CLAIM-5858FC67A28B1121
    claim_text: When a file is added to an organization ingestion folder, if the post processing strategy is set to "delete", the file is ingested and deleted
    role: condition
    status: modeled
    span:
      start: 0
      end: 142
    subjects:
      - ingestion_folders.process_file
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1420'
  recorded_at: '2025-06-21T11:26:18.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:ingestion-folders
id: REQ-papra-ingestion-folders-post-processing-strategy-is-set-to-delete
type: req
---
When a file is added to an organization ingestion folder, if the post processing strategy is set to "delete", the file is ingested and deleted.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/ingestion-folders/ingestion-folders.usecases.test.ts (ingestion-folders usecases > processFile > when a file is added to an organization ingestion folder).

## Source

Source: Papra server behaviour notes - SRV-1420
