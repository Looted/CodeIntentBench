---
title: documents.extract_text_from_response a_non_string_response_throws = True
status: active
fact_kind: property_value
subject_key: documents.extract_text_from_response
property_key: a_non_string_response_throws
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-3CC763C94D07173D
claim_text: When the response format is text, a non-string response throws
text_ref: REQ-papra-documents-non-string-response-throws
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-688'
  recorded_at: '2026-01-21T12:36:56.000Z'
id: FACT-papra-documents-extract-text-from-response-a-non-string-response-throws
type: fact
---
When the response format is text, a non-string response throws.

Modeled from REQ-papra-documents-non-string-response-throws so the claim can be checked for contradictions.
