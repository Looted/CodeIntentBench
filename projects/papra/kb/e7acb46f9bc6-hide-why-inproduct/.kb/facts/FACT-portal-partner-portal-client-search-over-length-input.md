---
title: portal.partner_portal_client_search over_length_input = truncated
status: active
fact_kind: property_value
subject_key: portal.partner_portal_client_search
property_key: over_length_input
operator: eq
value_type: string
value_string: truncated
claim_key: CLAIM-7ABD8CACE2C520A4
claim_text: longer input is cut to the limit without an error
text_ref: REQ-portal-partner-portal-client-search-query-length
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-141'
  recorded_at: '2026-04-20T14:01:15.000Z'
id: FACT-portal-partner-portal-client-search-over-length-input
type: fact
---
Longer input is cut to the limit without an error.

Modeled from REQ-portal-partner-portal-client-search-query-length so the claim can be checked for contradictions.
