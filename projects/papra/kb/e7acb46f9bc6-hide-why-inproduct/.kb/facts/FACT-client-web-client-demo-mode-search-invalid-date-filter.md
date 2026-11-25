---
title: client.web_client_demo_mode_search invalid_date_filter = ignored
status: active
fact_kind: property_value
subject_key: client.web_client_demo_mode_search
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: ignored
claim_key: CLAIM-50902CD2C1F1EA7F
claim_text: 'An invalid date in the created: filter of the web client''s demo-mode search is ignored and the other filters still apply'
text_ref: REQ-client-web-client-demo-mode-search-invalid-date
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-168'
  recorded_at: '2025-12-10T16:49:29.000Z'
id: FACT-client-web-client-demo-mode-search-invalid-date-filter
type: fact
---
An invalid date in the created: filter of the web client's demo-mode search is ignored and the other filters still apply.

Modeled from REQ-client-web-client-demo-mode-search-invalid-date so the claim can be checked for contradictions.
