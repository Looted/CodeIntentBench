---
title: search.query_length max_characters = 256
status: deprecated
fact_kind: property_value
subject_key: search.query_length
property_key: max_characters
operator: eq
value_type: int
value_int: 256
claim_key: CLAIM-24A4853CC5ADEA0F
claim_text: A search query is limited to 256 characters
text_ref: REQ-papra-search-text-256-characters
tags:
  - lane:strict
  - knowledge-source:papra-server-decisions
origin:
  kind: agent
  ref: 'Papra server decision log: SRV-109'
  recorded_at: '2025-06-09T10:22:36.000Z'
id: FACT-papra-search-query-length-max-characters-35b338
type: fact
---
A search query is limited to 256 characters.

Modeled from REQ-papra-search-text-256-characters so the claim can be checked for contradictions.
