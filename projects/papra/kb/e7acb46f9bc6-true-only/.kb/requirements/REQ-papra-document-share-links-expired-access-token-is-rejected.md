---
title: An expired access token is rejected.
status: active
semantic_text: An expired access token is rejected.
semantic_clauses:
  - An expired access token is rejected
logic_claims:
  - CLAIM-3CE34460DD2DE583
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 556f8425f605dd6d271151f8c1448673e0c75a3af39c32e9477f02d7677248d2
semantic_inventory:
  - claim_key: CLAIM-3CE34460DD2DE583
    claim_text: An expired access token is rejected
    role: normative
    status: modeled
    span:
      start: 0
      end: 35
    subjects:
      - document_share_links.document_share_links_usecases
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-649'
  recorded_at: '2026-01-27T15:25:34.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-share-links
id: REQ-papra-document-share-links-expired-access-token-is-rejected
type: req
---
An expired access token is rejected.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/document-share-links/document-share-links.usecases.test.ts (document-share-links usecases > verifySharePassword + ensureShareLinkAccessGranted).

## Source

Source: Papra server behaviour notes - SRV-649
