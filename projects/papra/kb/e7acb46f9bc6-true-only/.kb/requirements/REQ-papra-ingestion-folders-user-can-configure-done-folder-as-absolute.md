---
title: The user can configure the done folder as an absolute path that can overlap with the organization ingestion folder.
status: active
semantic_text: The user can configure the done folder as an absolute path that can overlap with the organization ingestion folder.
semantic_clauses:
  - The user can configure the done folder as an absolute path that can overlap with the organization ingestion folder
logic_claims:
  - CLAIM-B6B66188BEE84901
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9ae46478377036f0d4886d35cc4de3d775ab479b225fde5f94358a5488c5d645
semantic_inventory:
  - claim_key: CLAIM-B6B66188BEE84901
    claim_text: The user can configure the done folder as an absolute path that can overlap with the organization ingestion folder
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 114
    subjects:
      - ingestion_folders.is_file_in_done_folder
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1410'
  recorded_at: '2025-11-14T14:48:32.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:ingestion-folders
id: REQ-papra-ingestion-folders-user-can-configure-done-folder-as-absolute
type: req
---
The user can configure the done folder as an absolute path that can overlap with the organization ingestion folder.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/ingestion-folders/ingestion-folder.models.test.ts (ingestion-folder models > isFileInDoneFolder).

## Source

Source: Papra server behaviour notes - SRV-1410
