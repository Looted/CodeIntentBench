---
title: client.tag_colour_presets limit_configurable = True
status: active
fact_kind: property_value
subject_key: client.tag_colour_presets
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-33B228D1A7AD97C8
claim_text: the limit is configurable and 300 is the default
text_ref: REQ-client-tag-colour-presets-maximum-count
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-144'
  recorded_at: '2025-12-15T15:08:41.000Z'
id: FACT-client-tag-colour-presets-limit-configurable
type: fact
---
The limit is configurable and 300 is the default.

Modeled from REQ-client-tag-colour-presets-maximum-count so the claim can be checked for contradictions.
