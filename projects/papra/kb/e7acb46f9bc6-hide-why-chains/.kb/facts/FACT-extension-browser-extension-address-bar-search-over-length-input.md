---
title: extension.browser_extension_address_bar_search over_length_input = truncated
status: active
fact_kind: property_value
subject_key: extension.browser_extension_address_bar_search
property_key: over_length_input
operator: eq
value_type: string
value_string: truncated
claim_key: CLAIM-7ABD8CACE2C520A4
claim_text: longer input is cut to the limit without an error
text_ref: REQ-extension-browser-extension-address-bar-search-query-length
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-233'
  recorded_at: '2026-07-07T16:15:42.000Z'
id: FACT-extension-browser-extension-address-bar-search-over-length-input
type: fact
---
Longer input is cut to the limit without an error.

Modeled from REQ-extension-browser-extension-address-bar-search-query-length so the claim can be checked for contradictions.
