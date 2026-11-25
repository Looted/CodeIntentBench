---
title: client.tag_colour_presets empty_name_refused = True
status: active
fact_kind: property_value
subject_key: client.tag_colour_presets
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-client-tag-colour-presets-names-trimmed
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-152'
  recorded_at: '2025-03-16T09:08:25.000Z'
id: FACT-client-tag-colour-presets-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-client-tag-colour-presets-names-trimmed so the claim can be checked for contradictions.
