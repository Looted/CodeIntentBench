---
title: client.tag_colour_presets duplicate_error = tag-colour-preset-already-exists
status: active
fact_kind: property_value
subject_key: client.tag_colour_presets
property_key: duplicate_error
operator: eq
value_type: string
value_string: tag-colour-preset-already-exists
claim_key: CLAIM-CB1261F8B726ECDF
claim_text: a duplicate is reported as tag-colour-preset-already-exists
text_ref: REQ-client-tag-colour-presets-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-139'
  recorded_at: '2025-11-21T12:41:58.000Z'
id: FACT-client-tag-colour-presets-duplicate-error
type: fact
---
A duplicate is reported as tag-colour-preset-already-exists.

Modeled from REQ-client-tag-colour-presets-unique-ignoring-case so the claim can be checked for contradictions.
