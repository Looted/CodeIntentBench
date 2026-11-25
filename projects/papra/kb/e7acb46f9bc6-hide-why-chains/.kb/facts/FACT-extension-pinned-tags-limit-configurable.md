---
title: extension.pinned_tags limit_configurable = True
status: active
fact_kind: property_value
subject_key: extension.pinned_tags
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-33B228D1A7AD97C8
claim_text: the limit is configurable and 300 is the default
text_ref: REQ-extension-pinned-tags-maximum-count
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-169'
  recorded_at: '2025-04-27T15:13:24.000Z'
id: FACT-extension-pinned-tags-limit-configurable
type: fact
---
The limit is configurable and 300 is the default.

Modeled from REQ-extension-pinned-tags-maximum-count so the claim can be checked for contradictions.
