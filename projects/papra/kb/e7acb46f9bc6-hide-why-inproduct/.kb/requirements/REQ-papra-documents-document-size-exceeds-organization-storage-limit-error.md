---
title: If the document size exceeds the organization storage limit, an error is thrown and nothing is saved in the db.
status: active
semantic_text: If the document size exceeds the organization storage limit, an error is thrown and nothing is saved in the db.
semantic_clauses:
  - If the document size exceeds the organization storage limit, an error is thrown and nothing is saved in the db
logic_claims:
  - CLAIM-092078B53383787D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4784256045e0043a0b87d77235dad783013991211e8943db6a943e200de9e57d
semantic_inventory:
  - claim_key: CLAIM-092078B53383787D
    claim_text: If the document size exceeds the organization storage limit, an error is thrown and nothing is saved in the db
    role: condition
    status: modeled
    span:
      start: 0
      end: 110
    subjects:
      - documents.create_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1188'
  recorded_at: '2026-01-18T15:54:29.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-document-size-exceeds-organization-storage-limit-error
type: req
---
If the document size exceeds the organization storage limit, an error is thrown and nothing is saved in the db.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > createDocument).

## Source

Source: Papra server behaviour notes - SRV-1188
