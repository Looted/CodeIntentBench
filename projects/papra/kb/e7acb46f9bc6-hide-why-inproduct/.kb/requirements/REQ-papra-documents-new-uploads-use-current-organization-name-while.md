---
title: New uploads use the current organization name while older uploads retain their keys.
status: active
semantic_text: New uploads use the current organization name while older uploads retain their keys.
semantic_clauses:
  - New uploads use the current organization name while older uploads retain their keys
logic_claims:
  - CLAIM-ECC1F293E817C550
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 10600312efe15b36dc2040db691dbe5dbaefaa752339d1151afc3b9376a61f37
semantic_inventory:
  - claim_key: CLAIM-ECC1F293E817C550
    claim_text: New uploads use the current organization name while older uploads retain their keys
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - documents.create_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1195'
  recorded_at: '2026-09-12T15:26:49.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-new-uploads-use-current-organization-name-while
type: req
---
New uploads use the current organization name while older uploads retain their keys.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > createDocument).

## Source

Source: Papra server behaviour notes - SRV-1195
