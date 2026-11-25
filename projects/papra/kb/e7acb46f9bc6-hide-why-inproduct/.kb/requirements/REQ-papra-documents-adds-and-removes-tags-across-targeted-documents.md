---
title: Adds and removes tags across the targeted documents in a single call.
status: active
semantic_text: Adds and removes tags across the targeted documents in a single call.
semantic_clauses:
  - Adds and removes tags across the targeted documents in a single call
logic_claims:
  - CLAIM-0E5205998C02A12F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1d13a432e39982eea7642a92f6c70a6db212bb5d72465b56f9081a57456eec45
semantic_inventory:
  - claim_key: CLAIM-0E5205998C02A12F
    claim_text: Adds and removes tags across the targeted documents in a single call
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - documents.documents_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1228'
  recorded_at: '2025-06-26T15:55:59.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-adds-and-removes-tags-across-targeted-documents
type: req
---
Adds and removes tags across the targeted documents in a single call.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/e2e/batch-tags.e2e.test.ts (documents e2e > batch tags).

## Source

Source: Papra server behaviour notes - SRV-1228
