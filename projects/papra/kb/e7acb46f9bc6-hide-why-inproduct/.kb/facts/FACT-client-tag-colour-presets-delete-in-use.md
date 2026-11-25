---
title: client.tag_colour_presets delete_in_use = detached
status: active
fact_kind: property_value
subject_key: client.tag_colour_presets
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-6BCF60092D507FEA
claim_text: Deleting a tag colour preset in the web client removes it from everything that uses it, without confirmation for each use
text_ref: REQ-client-tag-colour-presets-delete-in-use
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-155'
  recorded_at: '2026-05-13T11:08:44.000Z'
id: FACT-client-tag-colour-presets-delete-in-use
type: fact
---
Deleting a tag colour preset in the web client removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-client-tag-colour-presets-delete-in-use so the claim can be checked for contradictions.
