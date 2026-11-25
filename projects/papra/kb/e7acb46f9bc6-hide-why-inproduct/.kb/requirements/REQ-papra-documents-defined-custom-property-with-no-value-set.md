---
title: A defined custom property with no value set appears as null.
status: active
semantic_text: A defined custom property with no value set appears as null.
semantic_clauses:
  - A defined custom property with no value set appears as null
logic_claims:
  - CLAIM-C7860E26F36C4052
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a9481a4ea359d4be32e9dd60c81f8912ecf7050c812ac9265164701e3d0f34a3
semantic_inventory:
  - claim_key: CLAIM-C7860E26F36C4052
    claim_text: A defined custom property with no value set appears as null
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - documents.enrich_documents_for_api
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1169'
  recorded_at: '2025-11-04T14:00:35.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-defined-custom-property-with-no-value-set
type: req
---
A defined custom property with no value set appears as null.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > enrichDocumentsForApi).

## Source

Source: Papra server behaviour notes - SRV-1169
