---
title: In the same organization, we should not be able to have two documents with the same content, an error is raised if the document already exists.
status: active
semantic_text: In the same organization, we should not be able to have two documents with the same content, an error is raised if the document already exists.
semantic_clauses:
  - In the same organization, we should not be able to have two documents with the same content, an error is raised if the document already exists
logic_claims:
  - CLAIM-5E5DBA87C6C4A59C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 952d97263f03a003402cb1e3408baed04753939fb9fb2a0d0596f85a151add98
semantic_inventory:
  - claim_key: CLAIM-5E5DBA87C6C4A59C
    claim_text: In the same organization, we should not be able to have two documents with the same content, an error is raised if the document already exists
    role: normative
    status: modeled
    span:
      start: 0
      end: 142
    subjects:
      - documents.create_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1191'
  recorded_at: '2026-03-02T13:47:32.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-in-same-organization-we-should-not-be
type: req
---
In the same organization, we should not be able to have two documents with the same content, an error is raised if the document already exists.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > createDocument).

## Source

Source: Papra server behaviour notes - SRV-1191
