---
title: documents.extract_text_from_response a_non_object_response_throws = True
status: active
fact_kind: property_value
subject_key: documents.extract_text_from_response
property_key: a_non_object_response_throws
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-CB323592B2144D2F
claim_text: When the response format is json, a non-object response throws
text_ref: REQ-papra-documents-non-object-response-throws
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-674'
  recorded_at: '2026-04-13T08:28:32.000Z'
id: FACT-papra-documents-extract-text-from-response-a-non-object-response-throws
type: fact
---
When the response format is json, a non-object response throws.

Modeled from REQ-papra-documents-non-object-response-throws so the claim can be checked for contradictions.
