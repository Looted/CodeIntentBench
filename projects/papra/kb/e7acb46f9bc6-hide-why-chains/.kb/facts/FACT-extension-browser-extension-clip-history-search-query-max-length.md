---
title: extension.browser_extension_clip_history_search query_max_length = 64
status: active
fact_kind: property_value
subject_key: extension.browser_extension_clip_history_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 64
claim_key: CLAIM-D5FBC77781F701ED
claim_text: A query in the browser extension's clip history search is limited to 64 characters
text_ref: REQ-extension-browser-extension-clip-history-search-query-length
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-194'
  recorded_at: '2026-03-03T13:52:39.000Z'
id: FACT-extension-browser-extension-clip-history-search-query-max-length
type: fact
---
A query in the browser extension's clip history search is limited to 64 characters.

Modeled from REQ-extension-browser-extension-clip-history-search-query-length so the claim can be checked for contradictions.
