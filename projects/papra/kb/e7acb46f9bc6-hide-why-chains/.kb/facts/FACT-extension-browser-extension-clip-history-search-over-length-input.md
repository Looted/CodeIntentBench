---
title: extension.browser_extension_clip_history_search over_length_input = rejected
status: active
fact_kind: property_value
subject_key: extension.browser_extension_clip_history_search
property_key: over_length_input
operator: eq
value_type: string
value_string: rejected
claim_key: CLAIM-778F39B5CA222673
claim_text: longer input is rejected with a validation error
text_ref: REQ-extension-browser-extension-clip-history-search-query-length
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-194'
  recorded_at: '2026-03-03T13:52:39.000Z'
id: FACT-extension-browser-extension-clip-history-search-over-length-input
type: fact
---
Longer input is rejected with a validation error.

Modeled from REQ-extension-browser-extension-clip-history-search-query-length so the claim can be checked for contradictions.
