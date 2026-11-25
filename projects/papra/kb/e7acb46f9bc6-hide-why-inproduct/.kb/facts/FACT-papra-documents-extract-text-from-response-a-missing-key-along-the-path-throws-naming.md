---
title: documents.extract_text_from_response a_missing_key_along_the_path_throws_naming = True
status: active
fact_kind: property_value
subject_key: documents.extract_text_from_response
property_key: a_missing_key_along_the_path_throws_naming
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7DE57011BBBDF287
claim_text: When the response format is json, a missing key along the path throws, naming the missing key
text_ref: REQ-papra-documents-missing-key-along-path-throws-naming-missing
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-672'
  recorded_at: '2025-07-07T11:03:42.000Z'
id: FACT-papra-documents-extract-text-from-response-a-missing-key-along-the-path-throws-naming
type: fact
---
When the response format is json, a missing key along the path throws, naming the missing key.

Modeled from REQ-papra-documents-missing-key-along-path-throws-naming-missing so the claim can be checked for contradictions.
