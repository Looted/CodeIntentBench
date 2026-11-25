---
title: documents.update_document_body_schema fails_if_documentdate_is_an_invalid_date_string = True
status: active
fact_kind: property_value
subject_key: documents.update_document_body_schema
property_key: fails_if_documentdate_is_an_invalid_date_string
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-4BAD8108B3035736
claim_text: Fails if documentDate is an invalid date string
text_ref: REQ-papra-documents-fails-if-documentdate-is-invalid-date-string
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1144'
  recorded_at: '2025-12-09T10:01:48.000Z'
id: FACT-papra-documents-update-document-body-schema-fails-if-documentdate-is-an-invalid-date-string
type: fact
---
Fails if documentDate is an invalid date string.

Modeled from REQ-papra-documents-fails-if-documentdate-is-invalid-date-string so the claim can be checked for contradictions.
