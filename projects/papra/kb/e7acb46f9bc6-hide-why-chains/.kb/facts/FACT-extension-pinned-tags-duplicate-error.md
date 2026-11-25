---
title: extension.pinned_tags duplicate_error = pinned-tag-already-exists
status: active
fact_kind: property_value
subject_key: extension.pinned_tags
property_key: duplicate_error
operator: eq
value_type: string
value_string: pinned-tag-already-exists
claim_key: CLAIM-F1D5D008D6CB1F1E
claim_text: a duplicate is reported as pinned-tag-already-exists
text_ref: REQ-extension-pinned-tags-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-164'
  recorded_at: '2026-04-26T15:02:29.000Z'
id: FACT-extension-pinned-tags-duplicate-error
type: fact
---
A duplicate is reported as pinned-tag-already-exists.

Modeled from REQ-extension-pinned-tags-unique-ignoring-case so the claim can be checked for contradictions.
