---
title: support.support_portal_ticket_search page_size_maximum = 10
status: active
fact_kind: property_value
subject_key: support.support_portal_ticket_search
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-3D06FDAEBA2AC6F1
claim_text: The support portal ticket search returns at most 10 results per page
text_ref: REQ-support-support-portal-ticket-search-page-size
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-156'
  recorded_at: '2026-03-19T13:23:35.000Z'
id: FACT-support-support-portal-ticket-search-page-size-maximum
type: fact
---
The support portal ticket search returns at most 10 results per page.

Modeled from REQ-support-support-portal-ticket-search-page-size so the claim can be checked for contradictions.
