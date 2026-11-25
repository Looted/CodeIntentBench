---
title: The user can configure the done folder as a relative path, it is relative to the file organization ingestion folder.
status: active
semantic_text: The user can configure the done folder as a relative path, it is relative to the file organization ingestion folder.
semantic_clauses:
  - The user can configure the done folder as a relative path, it is relative to the file organization ingestion folder
logic_claims:
  - CLAIM-C75F47FCC76E58F9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 84ce289fada4fa31d904b802d41fee946ba2cbf332cfd1d49eb9f04f8a0a55d1
semantic_inventory:
  - claim_key: CLAIM-C75F47FCC76E58F9
    claim_text: The user can configure the done folder as a relative path, it is relative to the file organization ingestion folder
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 115
    subjects:
      - ingestion_folders.is_file_in_done_folder
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1407'
  recorded_at: '2026-07-11T11:30:24.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:ingestion-folders
id: REQ-papra-ingestion-folders-user-can-configure-done-folder-as-relative
type: req
---
The user can configure the done folder as a relative path, it is relative to the file organization ingestion folder.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/ingestion-folders/ingestion-folder.models.test.ts (ingestion-folder models > isFileInDoneFolder).

## Source

Source: Papra server behaviour notes - SRV-1407
