---
title: extension.browser_extension_clip_history_search page_size_maximum = 10
status: active
fact_kind: property_value
subject_key: extension.browser_extension_clip_history_search
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-6E4891F00BB40495
claim_text: The browser extension's clip history search returns at most 10 results per page
text_ref: REQ-extension-browser-extension-clip-history-search-page-size
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-204'
  recorded_at: '2025-03-13T16:38:55.000Z'
id: FACT-extension-browser-extension-clip-history-search-page-size-maximum
type: fact
---
The browser extension's clip history search returns at most 10 results per page.

Modeled from REQ-extension-browser-extension-clip-history-search-page-size so the claim can be checked for contradictions.
