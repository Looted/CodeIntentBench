---
title: The user can configure the error folder as a relative path, it is relative to the file organization ingestion folder.
status: active
semantic_text: The user can configure the error folder as a relative path, it is relative to the file organization ingestion folder.
semantic_clauses:
  - The user can configure the error folder as a relative path, it is relative to the file organization ingestion folder
logic_claims:
  - CLAIM-F9943BD3B6D53F9E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 90ddd4f304cff8b6c18aa1a337143469aec1d553e4896c2b7b36ecd594964524
semantic_inventory:
  - claim_key: CLAIM-F9943BD3B6D53F9E
    claim_text: The user can configure the error folder as a relative path, it is relative to the file organization ingestion folder
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 116
    subjects:
      - ingestion_folders.is_file_in_error_folder
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1411'
  recorded_at: '2025-02-06T14:24:41.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:ingestion-folders
id: REQ-papra-ingestion-folders-user-can-configure-error-folder-as-relative
type: req
---
The user can configure the error folder as a relative path, it is relative to the file organization ingestion folder.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/ingestion-folders/ingestion-folder.models.test.ts (ingestion-folder models > isFileInErrorFolder).

## Source

Source: Papra server behaviour notes - SRV-1411
