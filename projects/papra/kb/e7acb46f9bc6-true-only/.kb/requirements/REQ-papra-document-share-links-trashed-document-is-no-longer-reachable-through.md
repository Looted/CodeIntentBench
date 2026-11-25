---
title: A trashed document is no longer reachable through its share link, and access resumes once it is restored.
status: active
semantic_text: A trashed document is no longer reachable through its share link, and access resumes once it is restored.
semantic_clauses:
  - A trashed document is no longer reachable through its share link, and access resumes once it is restored
logic_claims:
  - CLAIM-A9BCDA25D1453867
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 39a6650019ec1712e47326f658311acd1cccc30aae2d7a8d93efbff2400a1fc1
semantic_inventory:
  - claim_key: CLAIM-A9BCDA25D1453867
    claim_text: A trashed document is no longer reachable through its share link, and access resumes once it is restored
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 104
    subjects:
      - document_share_links.shared_document_access_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-660'
  recorded_at: '2025-08-21T08:02:08.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-share-links
id: REQ-papra-document-share-links-trashed-document-is-no-longer-reachable-through
type: req
---
A trashed document is no longer reachable through its share link, and access resumes once it is restored.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/document-share-links/e2e/shared-document-access.e2e.test.ts (shared document access e2e).

## Source

Source: Papra server behaviour notes - SRV-660
