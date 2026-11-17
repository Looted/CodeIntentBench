---
title: license.license_lookup over_length_input = truncated
status: active
fact_kind: property_value
subject_key: license.license_lookup
property_key: over_length_input
operator: eq
value_type: string
value_string: truncated
claim_key: CLAIM-7ABD8CACE2C520A4
claim_text: longer input is cut to the limit without an error
text_ref: REQ-license-license-lookup-query-length
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-102'
  recorded_at: '2026-07-18T12:05:54.000Z'
id: FACT-license-license-lookup-over-length-input
type: fact
---
Longer input is cut to the limit without an error.

Modeled from REQ-license-license-lookup-query-length so the claim can be checked for contradictions.
