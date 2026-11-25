---
title: When on the verge of reaching the organization storage limit, if multiple documents, with the sum of the size exceeding the limit, are uploaded at the same t…
status: active
semantic_text: When on the verge of reaching the organization storage limit, if multiple documents, with the sum of the size exceeding the limit, are uploaded at the same time, the quota is not exceeded and only the first to be inserted is saved.
semantic_clauses:
  - When on the verge of reaching the organization storage limit, if multiple documents, with the sum of the size exceeding the limit, are uploaded at the same time, the quota is not exceeded and only the first to be inserted is saved
logic_claims:
  - CLAIM-777C563F4A8688C5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: acc2e0f05dc73d0813913f85c74dc74c299568ecc266451a6541af393dcf798c
semantic_inventory:
  - claim_key: CLAIM-777C563F4A8688C5
    claim_text: When on the verge of reaching the organization storage limit, if multiple documents, with the sum of the size exceeding the limit, are uploaded at the same time, the quota is not exceeded and only the first to be inserted is saved
    role: condition
    status: modeled
    span:
      start: 0
      end: 230
    subjects:
      - documents.create_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1221'
  recorded_at: '2025-05-08T15:06:59.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-on-verge-of-reaching-organization-storage-limit
type: req
---
When on the verge of reaching the organization storage limit, if multiple documents, with the sum of the size exceeding the limit, are uploaded at the same time, the quota is not exceeded and only the first to be inserted is saved.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > createDocument).

## Source

Source: Papra server behaviour notes - SRV-1221
