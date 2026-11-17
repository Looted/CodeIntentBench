---
title: extension.clip_presets delete_in_use = detached
status: active
fact_kind: property_value
subject_key: extension.clip_presets
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-EF14977250E58A7A
claim_text: Deleting a clip preset in the browser extension removes it from everything that uses it, without confirmation for each use
text_ref: REQ-extension-clip-presets-delete-in-use
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-123'
  recorded_at: '2026-07-10T13:36:24.000Z'
id: FACT-extension-clip-presets-delete-in-use
type: fact
---
Deleting a clip preset in the browser extension removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-extension-clip-presets-delete-in-use so the claim can be checked for contradictions.
