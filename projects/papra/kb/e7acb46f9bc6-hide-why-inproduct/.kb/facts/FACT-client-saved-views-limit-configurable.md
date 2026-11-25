---
title: client.saved_views limit_configurable = False
status: active
fact_kind: property_value
subject_key: client.saved_views
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9B85215C347D6099
claim_text: the limit is fixed
text_ref: REQ-client-saved-views-maximum-count
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-113'
  recorded_at: '2026-03-23T09:06:32.000Z'
id: FACT-client-saved-views-limit-configurable
type: fact
---
The limit is fixed.

Modeled from REQ-client-saved-views-maximum-count so the claim can be checked for contradictions.
