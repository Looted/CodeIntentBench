---
title: portal.partner_portal_client_search invalid_date_filter = ignored
status: active
fact_kind: property_value
subject_key: portal.partner_portal_client_search
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: ignored
claim_key: CLAIM-048C1B628662E74D
claim_text: 'An invalid date in the onboarded: filter of the partner portal client search is ignored and the other filters still apply'
text_ref: REQ-portal-partner-portal-client-search-invalid-date
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-167'
  recorded_at: '2025-04-11T09:24:00.000Z'
id: FACT-portal-partner-portal-client-search-invalid-date-filter
type: fact
---
An invalid date in the onboarded: filter of the partner portal client search is ignored and the other filters still apply.

Modeled from REQ-portal-partner-portal-client-search-invalid-date so the claim can be checked for contradictions.
