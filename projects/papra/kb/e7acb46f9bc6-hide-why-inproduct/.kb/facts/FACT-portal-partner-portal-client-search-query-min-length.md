---
title: portal.partner_portal_client_search query_min_length = 1
status: active
fact_kind: property_value
subject_key: portal.partner_portal_client_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-AE60F36231ABD10F
claim_text: The partner portal client search runs only once the query has at least 1 character
text_ref: REQ-portal-partner-portal-client-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-149'
  recorded_at: '2025-03-21T10:06:37.000Z'
id: FACT-portal-partner-portal-client-search-query-min-length
type: fact
---
The partner portal client search runs only once the query has at least 1 character.

Modeled from REQ-portal-partner-portal-client-search-minimum-length so the claim can be checked for contradictions.
