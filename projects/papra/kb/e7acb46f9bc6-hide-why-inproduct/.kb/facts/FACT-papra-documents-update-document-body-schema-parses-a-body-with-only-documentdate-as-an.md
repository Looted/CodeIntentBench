---
title: documents.update_document_body_schema parses_a_body_with_only_documentdate_as_an = True
status: active
fact_kind: property_value
subject_key: documents.update_document_body_schema
property_key: parses_a_body_with_only_documentdate_as_an
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-87431E0DC0B4F461
claim_text: Parses a body with only documentDate as an ISO string
text_ref: REQ-papra-documents-parses-body-with-only-documentdate-as-iso
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1164'
  recorded_at: '2026-09-05T14:42:21.000Z'
id: FACT-papra-documents-update-document-body-schema-parses-a-body-with-only-documentdate-as-an
type: fact
---
Parses a body with only documentDate as an ISO string.

Modeled from REQ-papra-documents-parses-body-with-only-documentdate-as-iso so the claim can be checked for contradictions.
