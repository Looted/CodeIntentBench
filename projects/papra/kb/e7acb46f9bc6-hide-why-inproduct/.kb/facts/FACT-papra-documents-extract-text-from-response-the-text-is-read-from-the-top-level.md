---
title: documents.extract_text_from_response the_text_is_read_from_the_top_level = True
status: active
fact_kind: property_value
subject_key: documents.extract_text_from_response
property_key: the_text_is_read_from_the_top_level
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-AD231896C5124CF6
claim_text: When the response format is json, the text is read from the top-level key when the path has a single segment
text_ref: REQ-papra-documents-text-is-read-from-top-level-key
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-684'
  recorded_at: '2025-07-06T09:16:08.000Z'
id: FACT-papra-documents-extract-text-from-response-the-text-is-read-from-the-top-level
type: fact
---
When the response format is json, the text is read from the top-level key when the path has a single segment.

Modeled from REQ-papra-documents-text-is-read-from-top-level-key so the claim can be checked for contradictions.
