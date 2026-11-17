---
title: portal.partner_portal_payout_search query_max_length = 2048
status: active
fact_kind: property_value
subject_key: portal.partner_portal_payout_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 2048
claim_key: CLAIM-1005A64D1CEA428C
claim_text: A query in the partner portal payout search is limited to 2048 characters
text_ref: REQ-portal-partner-portal-payout-search-query-length
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-194'
  recorded_at: '2025-10-28T12:24:22.000Z'
id: FACT-portal-partner-portal-payout-search-query-max-length
type: fact
---
A query in the partner portal payout search is limited to 2048 characters.

Modeled from REQ-portal-partner-portal-payout-search-query-length so the claim can be checked for contradictions.
