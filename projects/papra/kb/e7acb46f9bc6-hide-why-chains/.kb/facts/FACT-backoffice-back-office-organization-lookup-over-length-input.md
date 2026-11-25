---
title: backoffice.back_office_organization_lookup over_length_input = truncated
status: active
fact_kind: property_value
subject_key: backoffice.back_office_organization_lookup
property_key: over_length_input
operator: eq
value_type: string
value_string: truncated
claim_key: CLAIM-7ABD8CACE2C520A4
claim_text: longer input is cut to the limit without an error
text_ref: REQ-backoffice-back-office-organization-lookup-query-length
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-240'
  recorded_at: '2026-08-27T11:40:54.000Z'
id: FACT-backoffice-back-office-organization-lookup-over-length-input
type: fact
---
Longer input is cut to the limit without an error.

Modeled from REQ-backoffice-back-office-organization-lookup-query-length so the claim can be checked for contradictions.
