---
title: license.license_lookup query_min_length = 3
status: active
fact_kind: property_value
subject_key: license.license_lookup
property_key: query_min_length
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-00165926C426B95A
claim_text: The license lookup runs only once the query has at least 3 characters
text_ref: REQ-license-license-lookup-minimum-length
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-110'
  recorded_at: '2025-12-11T12:37:10.000Z'
id: FACT-license-license-lookup-query-min-length
type: fact
---
The license lookup runs only once the query has at least 3 characters.

Modeled from REQ-license-license-lookup-minimum-length so the claim can be checked for contradictions.
