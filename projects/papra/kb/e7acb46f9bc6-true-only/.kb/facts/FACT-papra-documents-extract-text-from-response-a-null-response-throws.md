---
title: documents.extract_text_from_response a_null_response_throws = True
status: active
fact_kind: property_value
subject_key: documents.extract_text_from_response
property_key: a_null_response_throws
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7FA8C4422B393447
claim_text: When the response format is json, a null response throws
text_ref: REQ-papra-documents-null-response-throws
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-678'
  recorded_at: '2025-12-10T15:53:20.000Z'
id: FACT-papra-documents-extract-text-from-response-a-null-response-throws
type: fact
---
When the response format is json, a null response throws.

Modeled from REQ-papra-documents-null-response-throws so the claim can be checked for contradictions.
