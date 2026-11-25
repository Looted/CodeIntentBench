---
title: documents.extract_text_from_response the_text_is_read_by_walking_a_nested = True
status: active
fact_kind: property_value
subject_key: documents.extract_text_from_response
property_key: the_text_is_read_by_walking_a_nested
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-20B6570284E034D3
claim_text: When the response format is json, the text is read by walking a nested path
text_ref: REQ-papra-documents-text-is-read-by-walking-nested-path
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-681'
  recorded_at: '2026-06-10T09:18:50.000Z'
id: FACT-papra-documents-extract-text-from-response-the-text-is-read-by-walking-a-nested
type: fact
---
When the response format is json, the text is read by walking a nested path.

Modeled from REQ-papra-documents-text-is-read-by-walking-nested-path so the claim can be checked for contradictions.
