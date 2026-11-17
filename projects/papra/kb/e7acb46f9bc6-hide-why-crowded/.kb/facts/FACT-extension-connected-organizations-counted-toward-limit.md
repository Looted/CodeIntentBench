---
title: extension.connected_organizations counted_toward_limit = active only
status: active
fact_kind: property_value
subject_key: extension.connected_organizations
property_key: counted_toward_limit
operator: eq
value_type: string
value_string: active only
claim_key: CLAIM-E06125195C1246CF
claim_text: Archived connected organizations do not count toward the limit in the browser extension
text_ref: REQ-extension-connected-organizations-what-counts
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-303'
  recorded_at: '2025-12-23T13:24:25.000Z'
id: FACT-extension-connected-organizations-counted-toward-limit
type: fact
---
Archived connected organizations do not count toward the limit in the browser extension.

Modeled from REQ-extension-connected-organizations-what-counts so the claim can be checked for contradictions.
