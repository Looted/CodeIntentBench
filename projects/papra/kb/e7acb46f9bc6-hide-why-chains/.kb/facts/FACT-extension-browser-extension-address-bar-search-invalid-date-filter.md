---
title: extension.browser_extension_address_bar_search invalid_date_filter = matches nothing
status: active
fact_kind: property_value
subject_key: extension.browser_extension_address_bar_search
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: matches nothing
claim_key: CLAIM-91B01797AE2E9B17
claim_text: 'An invalid date in the saved: filter of the browser extension''s address-bar search makes the search return nothing'
text_ref: REQ-extension-browser-extension-address-bar-search-invalid-date
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-236'
  recorded_at: '2025-02-08T08:50:18.000Z'
id: FACT-extension-browser-extension-address-bar-search-invalid-date-filter
type: fact
---
An invalid date in the saved: filter of the browser extension's address-bar search makes the search return nothing.

Modeled from REQ-extension-browser-extension-address-bar-search-invalid-date so the claim can be checked for contradictions.
