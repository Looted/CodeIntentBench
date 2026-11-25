---
title: extension.browser_extension_address_bar_search query_min_length = 3
status: active
fact_kind: property_value
subject_key: extension.browser_extension_address_bar_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-FC63C76310D39288
claim_text: The browser extension's address-bar search runs only once the query has at least 3 characters
text_ref: REQ-extension-browser-extension-address-bar-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-244'
  recorded_at: '2025-11-18T15:07:11.000Z'
id: FACT-extension-browser-extension-address-bar-search-query-min-length
type: fact
---
The browser extension's address-bar search runs only once the query has at least 3 characters.

Modeled from REQ-extension-browser-extension-address-bar-search-minimum-length so the claim can be checked for contradictions.
