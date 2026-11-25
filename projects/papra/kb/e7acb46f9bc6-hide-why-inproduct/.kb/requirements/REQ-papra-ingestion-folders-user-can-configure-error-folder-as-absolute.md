---
title: The user can configure the error folder as an absolute path that can overlap with the organization ingestion folder.
status: active
semantic_text: The user can configure the error folder as an absolute path that can overlap with the organization ingestion folder.
semantic_clauses:
  - The user can configure the error folder as an absolute path that can overlap with the organization ingestion folder
logic_claims:
  - CLAIM-456AAF16883DD6B0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dd5e13b14c5a63eccc1a2cd66dfdc680440f1b509d0dc37ab285a6908516bf25
semantic_inventory:
  - claim_key: CLAIM-456AAF16883DD6B0
    claim_text: The user can configure the error folder as an absolute path that can overlap with the organization ingestion folder
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 115
    subjects:
      - ingestion_folders.is_file_in_error_folder
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1413'
  recorded_at: '2025-03-21T10:27:49.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:ingestion-folders
id: REQ-papra-ingestion-folders-user-can-configure-error-folder-as-absolute
type: req
---
The user can configure the error folder as an absolute path that can overlap with the organization ingestion folder.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/ingestion-folders/ingestion-folder.models.test.ts (ingestion-folder models > isFileInErrorFolder).

## Source

Source: Papra server behaviour notes - SRV-1413
