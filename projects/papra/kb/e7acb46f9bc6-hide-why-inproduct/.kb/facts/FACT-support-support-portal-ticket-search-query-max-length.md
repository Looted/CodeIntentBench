---
title: support.support_portal_ticket_search query_max_length = 200
status: active
fact_kind: property_value
subject_key: support.support_portal_ticket_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 200
claim_key: CLAIM-226450C6755775B8
claim_text: A query in the support portal ticket search is limited to 200 characters
text_ref: REQ-support-support-portal-ticket-search-query-length
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-138'
  recorded_at: '2025-09-08T12:07:58.000Z'
id: FACT-support-support-portal-ticket-search-query-max-length
type: fact
---
A query in the support portal ticket search is limited to 200 characters.

Modeled from REQ-support-support-portal-ticket-search-query-length so the claim can be checked for contradictions.
