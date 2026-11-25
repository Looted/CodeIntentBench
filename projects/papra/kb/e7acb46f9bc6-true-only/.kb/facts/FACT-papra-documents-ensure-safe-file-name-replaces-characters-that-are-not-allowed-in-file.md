---
title: documents.ensure_safe_file_name replaces_characters_that_are_not_allowed_in_file = True
status: active
fact_kind: property_value
subject_key: documents.ensure_safe_file_name
property_key: replaces_characters_that_are_not_allowed_in_file
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-82D656D549386A53
claim_text: Replaces characters that are not allowed in file names with an underscore
text_ref: REQ-papra-documents-replaces-characters-that-are-not-allowed-in
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1113'
  recorded_at: '2025-07-26T10:03:47.000Z'
id: FACT-papra-documents-ensure-safe-file-name-replaces-characters-that-are-not-allowed-in-file
type: fact
---
Replaces characters that are not allowed in file names with an underscore.

Modeled from REQ-papra-documents-replaces-characters-that-are-not-allowed-in so the claim can be checked for contradictions.
