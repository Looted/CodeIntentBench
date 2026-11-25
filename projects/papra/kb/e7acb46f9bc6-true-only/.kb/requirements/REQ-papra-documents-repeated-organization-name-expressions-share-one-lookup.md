---
title: Repeated organization name expressions share one lookup and use the requested organization.
status: active
semantic_text: Repeated organization name expressions share one lookup and use the requested organization.
semantic_clauses:
  - Repeated organization name expressions share one lookup and use the requested organization
logic_claims:
  - CLAIM-7A498E865312FF74
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6545fa7dceb3f18e5306a23c512a3fda833e1a670879dfd0d04f484b7529d36e
semantic_inventory:
  - claim_key: CLAIM-7A498E865312FF74
    claim_text: Repeated organization name expressions share one lookup and use the requested organization
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - documents.resolve_storage_pattern_context
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1384'
  recorded_at: '2025-08-05T08:43:39.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-repeated-organization-name-expressions-share-one-lookup
type: req
---
Repeated organization name expressions share one lookup and use the requested organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > resolveStoragePatternContext).

## Source

Source: Papra server behaviour notes - SRV-1384
