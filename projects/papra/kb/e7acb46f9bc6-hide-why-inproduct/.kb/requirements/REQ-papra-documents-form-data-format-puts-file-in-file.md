---
title: The form-data format puts the file in the "file" field of a multipart body.
status: active
semantic_text: The form-data format puts the file in the "file" field of a multipart body.
semantic_clauses:
  - The form-data format puts the file in the "file" field of a multipart body
logic_claims:
  - CLAIM-091102C5DE45CC2F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0ca8c21ccaff658a56910923512fcca523f122e1657fcd8982cbcedb13c187b7
semantic_inventory:
  - claim_key: CLAIM-091102C5DE45CC2F
    claim_text: The form-data format puts the file in the "file" field of a multipart body
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - documents.build_request_body
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-664'
  recorded_at: '2026-05-09T10:53:40.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-form-data-format-puts-file-in-file
type: req
---
The form-data format puts the file in the "file" field of a multipart body.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/custom-http/custom-http.content-extraction-strategy.models.test.ts (custom-http.content-extraction-strategy.models > buildRequestBody).

## Source

Source: Papra server behaviour notes - SRV-664
