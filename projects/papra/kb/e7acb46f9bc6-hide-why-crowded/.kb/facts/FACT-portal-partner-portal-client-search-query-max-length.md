---
title: portal.partner_portal_client_search query_max_length = 2048
status: active
fact_kind: property_value
subject_key: portal.partner_portal_client_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 2048
claim_key: CLAIM-568EA768CE9C106A
claim_text: A query in the partner portal client search is limited to 2048 characters
text_ref: REQ-portal-partner-portal-client-search-query-length
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-165'
  recorded_at: '2026-04-20T14:01:15.000Z'
id: FACT-portal-partner-portal-client-search-query-max-length
type: fact
---
A query in the partner portal client search is limited to 2048 characters.

Modeled from REQ-portal-partner-portal-client-search-query-length so the claim can be checked for contradictions.
