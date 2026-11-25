---
title: Given a papra instance with some encrypted and some unencrypted documents, it should encrypt all unencrypted documents.
status: active
semantic_text: Given a papra instance with some encrypted and some unencrypted documents, it should encrypt all unencrypted documents.
semantic_clauses:
  - Given a papra instance with some encrypted and some unencrypted documents, it should encrypt all unencrypted documents
logic_claims:
  - CLAIM-DE1AECB7C17C9E37
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 772286dcfbd2d822fef9cd408a9ad1f4bb14430e8ef04648e4646ae6c05753b1
semantic_inventory:
  - claim_key: CLAIM-DE1AECB7C17C9E37
    claim_text: Given a papra instance with some encrypted and some unencrypted documents, it should encrypt all unencrypted documents
    role: normative
    status: modeled
    span:
      start: 0
      end: 118
    subjects:
      - documents.encrypt_all_unencrypted_documents
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-736'
  recorded_at: '2026-06-17T17:20:15.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-papra-instance-with-some-encrypted-and-some
type: req
---
Given a papra instance with some encrypted and some unencrypted documents, it should encrypt all unencrypted documents.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-encryption.usecases.test.ts (document-encryption usecases > encryptAllUnencryptedDocuments).

## Source

Source: Papra server behaviour notes - SRV-736
