---
title: A document in a soft-deleted organization is no longer reachable through its share link, and access resumes once the organization is restored.
status: active
semantic_text: A document in a soft-deleted organization is no longer reachable through its share link, and access resumes once the organization is restored.
semantic_clauses:
  - A document in a soft-deleted organization is no longer reachable through its share link, and access resumes once the organization is restored
logic_claims:
  - CLAIM-DE402559AD0889A7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9d4b8bb9fe98a576c947ce5a9e8bd6804fa0e1f8237d70de491dee107290f4bf
semantic_inventory:
  - claim_key: CLAIM-DE402559AD0889A7
    claim_text: A document in a soft-deleted organization is no longer reachable through its share link, and access resumes once the organization is restored
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 141
    subjects:
      - document_share_links.shared_document_access_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-656'
  recorded_at: '2026-01-02T13:02:34.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-share-links
id: REQ-papra-document-share-links-document-in-soft-deleted-organization-is-no
type: req
---
A document in a soft-deleted organization is no longer reachable through its share link, and access resumes once the organization is restored.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/document-share-links/e2e/shared-document-access.e2e.test.ts (shared document access e2e).

## Source

Source: Papra server behaviour notes - SRV-656
