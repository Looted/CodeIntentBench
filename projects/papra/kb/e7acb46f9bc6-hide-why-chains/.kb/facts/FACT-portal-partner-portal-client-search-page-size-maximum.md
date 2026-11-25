---
title: portal.partner_portal_client_search page_size_maximum = 10
status: active
fact_kind: property_value
subject_key: portal.partner_portal_client_search
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-72484C9D373F6480
claim_text: The partner portal client search returns at most 10 results per page
text_ref: REQ-portal-partner-portal-client-search-page-size
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-174'
  recorded_at: '2026-06-24T17:44:52.000Z'
id: FACT-portal-partner-portal-client-search-page-size-maximum
type: fact
---
The partner portal client search returns at most 10 results per page.

Modeled from REQ-portal-partner-portal-client-search-page-size so the claim can be checked for contradictions.
