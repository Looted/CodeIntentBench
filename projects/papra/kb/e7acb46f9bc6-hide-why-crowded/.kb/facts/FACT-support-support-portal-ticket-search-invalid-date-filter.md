---
title: support.support_portal_ticket_search invalid_date_filter = matches nothing
status: active
fact_kind: property_value
subject_key: support.support_portal_ticket_search
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: matches nothing
claim_key: CLAIM-7FF66C149614C488
claim_text: 'An invalid date in the opened: filter of the support portal ticket search makes the search return nothing'
text_ref: REQ-support-support-portal-ticket-search-invalid-date
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-161'
  recorded_at: '2025-06-12T13:30:47.000Z'
id: FACT-support-support-portal-ticket-search-invalid-date-filter
type: fact
---
An invalid date in the opened: filter of the support portal ticket search makes the search return nothing.

Modeled from REQ-support-support-portal-ticket-search-invalid-date so the claim can be checked for contradictions.
