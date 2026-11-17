---
title: portal.partner_portal_payout_search over_length_input = truncated
status: active
fact_kind: property_value
subject_key: portal.partner_portal_payout_search
property_key: over_length_input
operator: eq
value_type: string
value_string: truncated
claim_key: CLAIM-7ABD8CACE2C520A4
claim_text: longer input is cut to the limit without an error
text_ref: REQ-portal-partner-portal-payout-search-query-length
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-194'
  recorded_at: '2025-10-28T12:24:22.000Z'
id: FACT-portal-partner-portal-payout-search-over-length-input
type: fact
---
Longer input is cut to the limit without an error.

Modeled from REQ-portal-partner-portal-payout-search-query-length so the claim can be checked for contradictions.
