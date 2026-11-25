---
title: Replaces characters that are not allowed in file names with an underscore.
status: active
semantic_text: Replaces characters that are not allowed in file names with an underscore.
semantic_clauses:
  - Replaces characters that are not allowed in file names with an underscore
logic_claims:
  - CLAIM-82D656D549386A53
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1135a6f02d7aafd769dcb6918b1651ce89c6fc6f8553a2c0155de3bd11663cc0
semantic_inventory:
  - claim_key: CLAIM-82D656D549386A53
    claim_text: Replaces characters that are not allowed in file names with an underscore
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - documents.ensure_safe_file_name
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1113'
  recorded_at: '2025-07-26T10:03:47.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-replaces-characters-that-are-not-allowed-in
type: req
---
Replaces characters that are not allowed in file names with an underscore.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.models.test.ts (documents models > ensureSafeFileName).

## Source

Source: Papra server behaviour notes - SRV-1113
