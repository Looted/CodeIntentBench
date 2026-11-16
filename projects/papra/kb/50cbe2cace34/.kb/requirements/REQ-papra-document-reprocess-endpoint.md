---
title: POST /api/organizations/:organizationId/documents/:documentId/reprocess re-runs content extraction, auto tagging and tagging rules on an existing document.
status: active
semantic_text: POST /api/organizations/:organizationId/documents/:documentId/reprocess re-runs content extraction, auto tagging and tagging rules on an existing document.
semantic_clauses:
  - POST /api/organizations/:organizationId/documents/:documentId/reprocess re-runs content extraction, auto tagging and tagging rules on an existing document
logic_claims:
  - CLAIM-2BC4FB2D231FA3F0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: da553e9c468c9027faa7edacb31a4d02fe15a45db58f6987a489056e7f5fd36c
semantic_inventory:
  - claim_key: CLAIM-2BC4FB2D231FA3F0
    claim_text: POST /api/organizations/:organizationId/documents/:documentId/reprocess re-runs content extraction, auto tagging and tagging rules on an existing document
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 154
    subjects:
      - documents.reprocess
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.7.0 changelog, #1513: Added an API endpoint to reprocess existing documents `POST'
  recorded_at: '2026-11-16T10:31:32.611Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:documents
id: REQ-papra-document-reprocess-endpoint
type: req
---
POST /api/organizations/:organizationId/documents/:documentId/reprocess re-runs content extraction, auto tagging and tagging rules on an existing document.

## Context

Reason not stated.

## Source

> Added an API endpoint to reprocess existing documents `POST /api/organizations/:organizationId/documents/:documentId/reprocess`. This endpoint allows re-running content extraction + auto tagging and tagging rules on existing documents.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.7.0 changelog, #1513: Added an API endpoint to reprocess existing documents `POST
