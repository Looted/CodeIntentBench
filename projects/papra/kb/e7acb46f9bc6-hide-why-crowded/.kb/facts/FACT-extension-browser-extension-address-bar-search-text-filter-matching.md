---
title: extension.browser_extension_address_bar_search text_filter_matching = exact
status: active
fact_kind: property_value
subject_key: extension.browser_extension_address_bar_search
property_key: text_filter_matching
operator: eq
value_type: string
value_string: exact
claim_key: CLAIM-9193B7828DD867B7
claim_text: 'The site: filter of the browser extension''s address-bar search uses exact equality, not contains matching'
text_ref: REQ-extension-browser-extension-address-bar-search-text-filter-matching
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-241'
  recorded_at: '2026-06-01T17:35:46.000Z'
id: FACT-extension-browser-extension-address-bar-search-text-filter-matching
type: fact
---
The site: filter of the browser extension's address-bar search uses exact equality, not contains matching.

Modeled from REQ-extension-browser-extension-address-bar-search-text-filter-matching so the claim can be checked for contradictions.
