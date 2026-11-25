---
title: Returns the document for a non-protected, usable link and records the access time.
status: active
semantic_text: Returns the document for a non-protected, usable link and records the access time.
semantic_clauses:
  - Returns the document for a non-protected, usable link and records the access time
logic_claims:
  - CLAIM-2714D94B11B3B160
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 13058149267169fb1ba4d86a0a7d428cbd19098ee407a7d1bf343ae6023f1f4d
semantic_inventory:
  - claim_key: CLAIM-2714D94B11B3B160
    claim_text: Returns the document for a non-protected, usable link and records the access time
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - document_share_links.get_shared_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-653'
  recorded_at: '2025-12-05T10:56:30.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-share-links
id: REQ-papra-document-share-links-returns-document-for-non-protected-usable-link
type: req
---
Returns the document for a non-protected, usable link and records the access time.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/document-share-links/document-share-links.usecases.test.ts (document-share-links usecases > getSharedDocument).

## Source

Source: Papra server behaviour notes - SRV-653
