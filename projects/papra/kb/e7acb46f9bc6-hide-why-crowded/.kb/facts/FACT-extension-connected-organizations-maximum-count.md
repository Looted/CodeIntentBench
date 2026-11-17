---
title: extension.connected_organizations maximum_count = 10
status: active
fact_kind: property_value
subject_key: extension.connected_organizations
property_key: maximum_count
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-DFA38BD6AEEC9740
claim_text: A browser profile can have at most 10 connected organizations in the browser extension
text_ref: REQ-extension-connected-organizations-maximum-count
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-298'
  recorded_at: '2026-08-10T13:00:26.000Z'
id: FACT-extension-connected-organizations-maximum-count
type: fact
---
A browser profile can have at most 10 connected organizations in the browser extension.

Modeled from REQ-extension-connected-organizations-maximum-count so the claim can be checked for contradictions.
