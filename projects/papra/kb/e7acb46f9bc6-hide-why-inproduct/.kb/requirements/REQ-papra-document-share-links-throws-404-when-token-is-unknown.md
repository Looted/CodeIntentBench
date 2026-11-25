---
title: Throws 404 when the token is unknown.
status: active
semantic_text: Throws 404 when the token is unknown.
semantic_clauses:
  - Throws 404 when the token is unknown
logic_claims:
  - CLAIM-C331BA3C98128369
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a989b5ce6b781bbb919262d420c32ebfcd4b98cfb2ab896c7745b68e6edc8f51
semantic_inventory:
  - claim_key: CLAIM-C331BA3C98128369
    claim_text: Throws 404 when the token is unknown
    role: normative
    status: modeled
    span:
      start: 0
      end: 36
    subjects:
      - document_share_links.resolve_usable_share_link_by_token
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-655'
  recorded_at: '2026-03-23T14:31:05.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-share-links
id: REQ-papra-document-share-links-throws-404-when-token-is-unknown
type: req
---
Throws 404 when the token is unknown.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/document-share-links/document-share-links.usecases.test.ts (document-share-links usecases > resolveUsableShareLinkByToken).

## Source

Source: Papra server behaviour notes - SRV-655
