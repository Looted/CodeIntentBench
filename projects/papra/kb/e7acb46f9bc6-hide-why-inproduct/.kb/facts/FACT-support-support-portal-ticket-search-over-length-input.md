---
title: support.support_portal_ticket_search over_length_input = rejected
status: active
fact_kind: property_value
subject_key: support.support_portal_ticket_search
property_key: over_length_input
operator: eq
value_type: string
value_string: rejected
claim_key: CLAIM-778F39B5CA222673
claim_text: longer input is rejected with a validation error
text_ref: REQ-support-support-portal-ticket-search-query-length
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-138'
  recorded_at: '2025-09-08T12:07:58.000Z'
id: FACT-support-support-portal-ticket-search-over-length-input
type: fact
---
Longer input is rejected with a validation error.

Modeled from REQ-support-support-portal-ticket-search-query-length so the claim can be checked for contradictions.
