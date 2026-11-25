---
title: Throws TagNotFoundError when a tag id does not belong to the org.
status: active
semantic_text: Throws TagNotFoundError when a tag id does not belong to the org.
semantic_clauses:
  - Throws TagNotFoundError when a tag id does not belong to the org
logic_claims:
  - CLAIM-E7D7900D499AEFF0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 467c0909afa4de301a8be6e034a9b71c3d4b7772e16c51374502d3c082185bde
semantic_inventory:
  - claim_key: CLAIM-E7D7900D499AEFF0
    claim_text: Throws TagNotFoundError when a tag id does not belong to the org
    role: normative
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - documents.tag_documents_batch
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1090'
  recorded_at: '2026-04-01T14:37:00.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-throws-tagnotfounderror-when-tag-id-does-not
type: req
---
Throws TagNotFoundError when a tag id does not belong to the org.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > tagDocumentsBatch).

## Source

Source: Papra server behaviour notes - SRV-1090
