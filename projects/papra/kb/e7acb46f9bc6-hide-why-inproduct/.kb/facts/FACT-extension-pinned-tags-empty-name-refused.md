---
title: extension.pinned_tags empty_name_refused = True
status: active
fact_kind: property_value
subject_key: extension.pinned_tags
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-extension-pinned-tags-names-trimmed
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-175'
  recorded_at: '2026-08-12T11:07:22.000Z'
id: FACT-extension-pinned-tags-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-extension-pinned-tags-names-trimmed so the claim can be checked for contradictions.
