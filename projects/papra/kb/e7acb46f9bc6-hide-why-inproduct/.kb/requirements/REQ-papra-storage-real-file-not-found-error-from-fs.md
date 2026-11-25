---
title: Real file not found error from fs.promises catched using safely is detected as file not found error.
status: active
semantic_text: Real file not found error from fs.promises catched using safely is detected as file not found error.
semantic_clauses:
  - Real file not found error from fs.promises catched using safely is detected as file not found error
logic_claims:
  - CLAIM-5C774F627FCBB50D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f3e8f23a413f5b707c4958e652e205860af4f4dd1d9f2196be88184692734d11
semantic_inventory:
  - claim_key: CLAIM-5C774F627FCBB50D
    claim_text: Real file not found error from fs.promises catched using safely is detected as file not found error
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 99
    subjects:
      - storage.is_file_not_found_error
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1709'
  recorded_at: '2026-04-08T13:17:49.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-real-file-not-found-error-from-fs
type: req
---
Real file not found error from fs.promises catched using safely is detected as file not found error.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/drivers/fs/fs.storage-driver.models.test.ts (fs storage driver models > isFileNotFoundError).

## Source

Source: Papra server behaviour notes - SRV-1709
