---
title: Organizations on Plus plan should be able to upload files up to 100 MiB (not limited by global config).
status: active
semantic_text: Organizations on Plus plan should be able to upload files up to 100 MiB (not limited by global config).
semantic_clauses:
  - Organizations on Plus plan should be able to upload files up to 100 MiB (not limited by global config)
logic_claims:
  - CLAIM-5C519B446CAEEDCD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b6d4574b1dad256d15e3becc66bdde21d690fce36d9868e647018a0e188f47f6
semantic_inventory:
  - claim_key: CLAIM-5C519B446CAEEDCD
    claim_text: Organizations on Plus plan should be able to upload files up to 100 MiB (not limited by global config)
    role: normative
    status: modeled
    span:
      start: 0
      end: 102
    subjects:
      - documents.documents_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1248'
  recorded_at: '2026-01-02T16:02:09.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-organizations-on-plus-plan-should-be-able
type: req
---
Organizations on Plus plan should be able to upload files up to 100 MiB (not limited by global config).

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/e2e/upload-documents.e2e.test.ts (documents e2e > document upload).

## Source

Source: Papra server behaviour notes - SRV-1248
