---
title: extension.browser_extension_clip_history_search query_min_length = 1
status: active
fact_kind: property_value
subject_key: extension.browser_extension_clip_history_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-2417CE600256F8BD
claim_text: The browser extension's clip history search runs only once the query has at least 1 character
text_ref: REQ-extension-browser-extension-clip-history-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-202'
  recorded_at: '2025-09-25T12:12:58.000Z'
id: FACT-extension-browser-extension-clip-history-search-query-min-length
type: fact
---
The browser extension's clip history search runs only once the query has at least 1 character.

Modeled from REQ-extension-browser-extension-clip-history-search-minimum-length so the claim can be checked for contradictions.
