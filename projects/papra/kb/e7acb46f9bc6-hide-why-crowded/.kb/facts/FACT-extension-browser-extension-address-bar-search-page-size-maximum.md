---
title: extension.browser_extension_address_bar_search page_size_maximum = 200
status: active
fact_kind: property_value
subject_key: extension.browser_extension_address_bar_search
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 200
claim_key: CLAIM-30E9AE0BEED1BFE1
claim_text: The browser extension's address-bar search returns at most 200 results per page
text_ref: REQ-extension-browser-extension-address-bar-search-page-size
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-252'
  recorded_at: '2026-05-27T17:48:02.000Z'
id: FACT-extension-browser-extension-address-bar-search-page-size-maximum
type: fact
---
The browser extension's address-bar search returns at most 200 results per page.

Modeled from REQ-extension-browser-extension-address-bar-search-page-size so the claim can be checked for contradictions.
