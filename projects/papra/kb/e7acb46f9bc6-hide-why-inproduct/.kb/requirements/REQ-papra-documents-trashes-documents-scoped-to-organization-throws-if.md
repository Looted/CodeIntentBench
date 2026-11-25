---
title: Trashes documents scoped to the organization, throws if any document does not belong to the organization.
status: active
semantic_text: Trashes documents scoped to the organization, throws if any document does not belong to the organization.
semantic_clauses:
  - Trashes documents scoped to the organization, throws if any document does not belong to the organization
logic_claims:
  - CLAIM-CB035E7666BB89A0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2e752dc47efe2518131ec63e12c0adbd6b0c9fad98768472ce38ebb1da232d99
semantic_inventory:
  - claim_key: CLAIM-CB035E7666BB89A0
    claim_text: Trashes documents scoped to the organization, throws if any document does not belong to the organization
    role: normative
    status: modeled
    span:
      start: 0
      end: 104
    subjects:
      - documents.trash_documents_batch
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1093'
  recorded_at: '2025-03-23T17:17:08.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-trashes-documents-scoped-to-organization-throws-if
type: req
---
Trashes documents scoped to the organization, throws if any document does not belong to the organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > trashDocumentsBatch).

## Source

Source: Papra server behaviour notes - SRV-1093
