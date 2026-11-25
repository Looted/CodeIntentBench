---
title: Does not emit an event when no documents were trashed.
status: active
semantic_text: Does not emit an event when no documents were trashed.
semantic_clauses:
  - Does not emit an event when no documents were trashed
logic_claims:
  - CLAIM-97B601E3017D9687
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c62ee01c5c360f56f9420b40e82fd7d1294fc21ec2801e3a39f5745b241dc2ed
semantic_inventory:
  - claim_key: CLAIM-97B601E3017D9687
    claim_text: Does not emit an event when no documents were trashed
    role: normative
    status: modeled
    span:
      start: 0
      end: 53
    subjects:
      - documents.trash_documents_batch
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1057'
  recorded_at: '2025-09-20T09:58:51.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-does-not-emit-event-when-no-documents
type: req
---
Does not emit an event when no documents were trashed.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > trashDocumentsBatch).

## Source

Source: Papra server behaviour notes - SRV-1057
