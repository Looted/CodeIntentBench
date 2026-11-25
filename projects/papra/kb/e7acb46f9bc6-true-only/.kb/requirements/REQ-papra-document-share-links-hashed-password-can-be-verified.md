---
title: An hashed password can be verified.
status: active
semantic_text: An hashed password can be verified.
semantic_clauses:
  - An hashed password can be verified
logic_claims:
  - CLAIM-76A4C1AEB45C6C1C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 39a1d273f762e85c013b8495779959f376946ca43c89b98c283a1fd2595b9509
semantic_inventory:
  - claim_key: CLAIM-76A4C1AEB45C6C1C
    claim_text: An hashed password can be verified
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 34
    subjects:
      - document_share_links.document_share_links_password
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-643'
  recorded_at: '2026-05-21T09:55:04.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-share-links
id: REQ-papra-document-share-links-hashed-password-can-be-verified
type: req
---
An hashed password can be verified.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/document-share-links/document-share-links.password.test.ts (document-share-links.password > hash/verify password).

## Source

Source: Papra server behaviour notes - SRV-643
