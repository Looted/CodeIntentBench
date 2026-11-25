---
title: Access is denied without a token on a protected link.
status: active
semantic_text: Access is denied without a token on a protected link.
semantic_clauses:
  - Access is denied without a token on a protected link
logic_claims:
  - CLAIM-B1F162FEDFA1453E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 30a8f85ca718582f1f56aa75adc312f9dfe38577f6b04896d251aeae309fd2d6
semantic_inventory:
  - claim_key: CLAIM-B1F162FEDFA1453E
    claim_text: Access is denied without a token on a protected link
    role: normative
    status: modeled
    span:
      start: 0
      end: 52
    subjects:
      - document_share_links.document_share_links_usecases
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-647'
  recorded_at: '2026-06-27T15:21:01.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-share-links
id: REQ-papra-document-share-links-access-is-denied-without-token-on-protected
type: req
---
Access is denied without a token on a protected link.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/document-share-links/document-share-links.usecases.test.ts (document-share-links usecases > verifySharePassword + ensureShareLinkAccessGranted).

## Source

Source: Papra server behaviour notes - SRV-647
