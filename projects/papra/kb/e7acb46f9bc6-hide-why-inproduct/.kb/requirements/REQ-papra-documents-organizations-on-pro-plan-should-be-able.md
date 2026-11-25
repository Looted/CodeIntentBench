---
title: Organizations on Pro plan should be able to upload files up to 500 MiB (not limited by global config).
status: active
semantic_text: Organizations on Pro plan should be able to upload files up to 500 MiB (not limited by global config).
semantic_clauses:
  - Organizations on Pro plan should be able to upload files up to 500 MiB (not limited by global config)
logic_claims:
  - CLAIM-F00A3397A63B2E1C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5bc5affb9dfb46cfc7d0d71fad0daadb94c8fe47bfa3efffdea24e7d024e5c44
semantic_inventory:
  - claim_key: CLAIM-F00A3397A63B2E1C
    claim_text: Organizations on Pro plan should be able to upload files up to 500 MiB (not limited by global config)
    role: normative
    status: modeled
    span:
      start: 0
      end: 101
    subjects:
      - documents.documents_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1252'
  recorded_at: '2025-05-03T10:54:04.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-organizations-on-pro-plan-should-be-able
type: req
---
Organizations on Pro plan should be able to upload files up to 500 MiB (not limited by global config).

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/e2e/upload-documents.e2e.test.ts (documents e2e > document upload).

## Source

Source: Papra server behaviour notes - SRV-1252
