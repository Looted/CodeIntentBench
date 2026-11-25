---
title: Is a no-op when the activities array is empty.
status: active
semantic_text: Is a no-op when the activities array is empty.
semantic_clauses:
  - Is a no-op when the activities array is empty
logic_claims:
  - CLAIM-9B334514340B6814
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5cb0687a02516ca856a00034b56ef63d723ce07683dd66cfb90f1c91f15b56cf
semantic_inventory:
  - claim_key: CLAIM-9B334514340B6814
    claim_text: Is a no-op when the activities array is empty
    role: normative
    status: modeled
    span:
      start: 0
      end: 45
    subjects:
      - documents.register_documents_activity_log
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-733'
  recorded_at: '2026-06-28T10:08:47.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-is-no-op-when-activities-array-is
type: req
---
Is a no-op when the activities array is empty.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-activity/document-activity.usecases.test.ts (document-activity usecases > registerDocumentsActivityLog).

## Source

Source: Papra server behaviour notes - SRV-733
