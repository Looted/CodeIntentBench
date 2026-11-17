---
title: license.license_lookup query_max_length = 512
status: active
fact_kind: property_value
subject_key: license.license_lookup
property_key: query_max_length
operator: eq
value_type: int
value_int: 512
claim_key: CLAIM-A6590A45CEEC2DB7
claim_text: A query in the license lookup is limited to 512 characters
text_ref: REQ-license-license-lookup-query-length
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-102'
  recorded_at: '2026-07-18T12:05:54.000Z'
id: FACT-license-license-lookup-query-max-length
type: fact
---
A query in the license lookup is limited to 512 characters.

Modeled from REQ-license-license-lookup-query-length so the claim can be checked for contradictions.
