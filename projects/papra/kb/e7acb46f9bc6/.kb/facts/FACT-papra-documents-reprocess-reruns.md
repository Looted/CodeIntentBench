---
title: documents.reprocess reruns = extraction_auto_tagging_and_tagging_rules
status: active
fact_kind: property_value
subject_key: documents.reprocess
property_key: reruns
operator: eq
value_type: string
value_string: extraction_auto_tagging_and_tagging_rules
claim_key: CLAIM-2BC4FB2D231FA3F0
claim_text: POST /api/organizations/:organizationId/documents/:documentId/reprocess re-runs content extraction, auto tagging and tagging rules on an existing document
text_ref: REQ-papra-document-reprocess-endpoint
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.7.0 changelog, #1513: Added an API endpoint to reprocess existing documents `POST'
  recorded_at: '2026-11-16T10:20:28.742Z'
id: FACT-papra-documents-reprocess-reruns
type: fact
---
POST /api/organizations/:organizationId/documents/:documentId/reprocess re-runs content extraction, auto tagging and tagging rules on an existing document.

Modeled from REQ-papra-document-reprocess-endpoint so the claim can be checked for contradictions.
