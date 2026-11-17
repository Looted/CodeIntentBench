---
title: portal.partner_portal_payout_search query_min_length = 1
status: active
fact_kind: property_value
subject_key: portal.partner_portal_payout_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-5CEE7C4E0297A4C7
claim_text: The partner portal payout search runs only once the query has at least 1 character
text_ref: REQ-portal-partner-portal-payout-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-201'
  recorded_at: '2026-08-10T14:22:47.000Z'
id: FACT-portal-partner-portal-payout-search-query-min-length
type: fact
---
The partner portal payout search runs only once the query has at least 1 character.

Modeled from REQ-portal-partner-portal-payout-search-minimum-length so the claim can be checked for contradictions.
