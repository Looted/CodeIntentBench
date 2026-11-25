---
title: documents.extract_text_from_response a_non_string_value_at_the_end_of = True
status: active
fact_kind: property_value
subject_key: documents.extract_text_from_response
property_key: a_non_string_value_at_the_end_of
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-15D24BA623301FBD
claim_text: When the response format is json, a non-string value at the end of the path throws
text_ref: REQ-papra-documents-non-string-value-at-end-of-path
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-676'
  recorded_at: '2026-04-04T09:30:45.000Z'
id: FACT-papra-documents-extract-text-from-response-a-non-string-value-at-the-end-of
type: fact
---
When the response format is json, a non-string value at the end of the path throws.

Modeled from REQ-papra-documents-non-string-value-at-end-of-path so the claim can be checked for contradictions.
