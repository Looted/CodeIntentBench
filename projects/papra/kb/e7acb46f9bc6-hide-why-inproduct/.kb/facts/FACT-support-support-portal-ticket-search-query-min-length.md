---
title: support.support_portal_ticket_search query_min_length = 1
status: active
fact_kind: property_value
subject_key: support.support_portal_ticket_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-222C61B0FDACC93E
claim_text: The support portal ticket search runs only once the query has at least 1 character
text_ref: REQ-support-support-portal-ticket-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-151'
  recorded_at: '2026-04-08T17:54:17.000Z'
id: FACT-support-support-portal-ticket-search-query-min-length
type: fact
---
The support portal ticket search runs only once the query has at least 1 character.

Modeled from REQ-support-support-portal-ticket-search-minimum-length so the claim can be checked for contradictions.
