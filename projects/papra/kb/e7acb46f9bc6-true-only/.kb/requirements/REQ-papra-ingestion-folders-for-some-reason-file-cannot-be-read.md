---
title: When a file is added to an organization ingestion folder, if for some reason the file cannot be read, a log is emitted and the processing stops.
status: active
semantic_text: When a file is added to an organization ingestion folder, if for some reason the file cannot be read, a log is emitted and the processing stops.
semantic_clauses:
  - When a file is added to an organization ingestion folder, if for some reason the file cannot be read, a log is emitted and the processing stops
logic_claims:
  - CLAIM-B7F6A7A132E0DA1A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ac70f984f7d00334a34bf5e2eeeb478d51d6fb8a7f27c0e2d88e188a8da7b3e7
semantic_inventory:
  - claim_key: CLAIM-B7F6A7A132E0DA1A
    claim_text: When a file is added to an organization ingestion folder, if for some reason the file cannot be read, a log is emitted and the processing stops
    role: condition
    status: modeled
    span:
      start: 0
      end: 143
    subjects:
      - ingestion_folders.process_file
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1417'
  recorded_at: '2025-09-27T10:52:03.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:ingestion-folders
id: REQ-papra-ingestion-folders-for-some-reason-file-cannot-be-read
type: req
---
When a file is added to an organization ingestion folder, if for some reason the file cannot be read, a log is emitted and the processing stops.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/ingestion-folders/ingestion-folders.usecases.test.ts (ingestion-folders usecases > processFile > when a file is added to an organization ingestion folder).

## Source

Source: Papra server behaviour notes - SRV-1417
