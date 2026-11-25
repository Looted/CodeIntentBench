---
title: Strips sensitive storage and encryption fields.
status: active
semantic_text: Strips sensitive storage and encryption fields.
semantic_clauses:
  - Strips sensitive storage and encryption fields
logic_claims:
  - CLAIM-FCE6AFDFA04EB745
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 54319c6a00a0300c305bf681cc65a074792c0766ee952e2e501f556f839ec7de
semantic_inventory:
  - claim_key: CLAIM-FCE6AFDFA04EB745
    claim_text: Strips sensitive storage and encryption fields
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 46
    subjects:
      - documents.enrich_documents_for_api
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1201'
  recorded_at: '2025-10-14T14:24:11.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-strips-sensitive-storage-and-encryption-fields
type: req
---
Strips sensitive storage and encryption fields.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > enrichDocumentsForApi).

## Source

Source: Papra server behaviour notes - SRV-1201
