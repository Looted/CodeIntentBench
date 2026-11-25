---
title: extension.browser_extension_address_bar_search query_max_length = 4096
status: active
fact_kind: property_value
subject_key: extension.browser_extension_address_bar_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 4096
claim_key: CLAIM-094CD7A81CB1133C
claim_text: A query in the browser extension's address-bar search is limited to 4096 characters
text_ref: REQ-extension-browser-extension-address-bar-search-query-length
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-233'
  recorded_at: '2026-07-07T16:15:42.000Z'
id: FACT-extension-browser-extension-address-bar-search-query-max-length
type: fact
---
A query in the browser extension's address-bar search is limited to 4096 characters.

Modeled from REQ-extension-browser-extension-address-bar-search-query-length so the claim can be checked for contradictions.
