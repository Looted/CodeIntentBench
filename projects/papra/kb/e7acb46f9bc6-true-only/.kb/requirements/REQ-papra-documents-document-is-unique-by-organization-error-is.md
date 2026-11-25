---
title: A document is unique by organization, an error is raised if a document with the same hash already exists.
status: active
semantic_text: A document is unique by organization, an error is raised if a document with the same hash already exists.
semantic_clauses:
  - A document is unique by organization, an error is raised if a document with the same hash already exists
logic_claims:
  - CLAIM-FD1DAAFE6432CCA9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9b411d9e73f94ec2027f2c22b485e238da932d1a174e82693ee635cf815b30b7
semantic_inventory:
  - claim_key: CLAIM-FD1DAAFE6432CCA9
    claim_text: A document is unique by organization, an error is raised if a document with the same hash already exists
    role: normative
    status: modeled
    span:
      start: 0
      end: 104
    subjects:
      - documents.save_organization_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1126'
  recorded_at: '2026-09-06T10:18:15.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-document-is-unique-by-organization-error-is
type: req
---
A document is unique by organization, an error is raised if a document with the same hash already exists.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.repository.test.ts (documents repository > saveOrganizationDocument).

## Source

Source: Papra server behaviour notes - SRV-1126
