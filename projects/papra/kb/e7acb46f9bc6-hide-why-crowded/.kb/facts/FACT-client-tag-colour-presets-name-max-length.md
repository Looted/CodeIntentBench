---
title: client.tag_colour_presets name_max_length = 48
status: active
fact_kind: property_value
subject_key: client.tag_colour_presets
property_key: name_max_length
operator: eq
value_type: int
value_int: 48
claim_key: CLAIM-77D8763A8C819959
claim_text: Tag colour preset names in the web client are limited to 48 characters
text_ref: REQ-client-tag-colour-presets-name-length
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-149'
  recorded_at: '2025-02-21T08:49:38.000Z'
id: FACT-client-tag-colour-presets-name-max-length
type: fact
---
Tag colour preset names in the web client are limited to 48 characters.

Modeled from REQ-client-tag-colour-presets-name-length so the claim can be checked for contradictions.
