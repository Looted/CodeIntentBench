---
title: license.license_lookup unknown_filter = rejected
status: active
fact_kind: property_value
subject_key: license.license_lookup
property_key: unknown_filter
operator: eq
value_type: string
value_string: rejected
claim_key: CLAIM-B5D6781D2C8FAD59
claim_text: A filter name that the license lookup does not know is rejected with a list of the known filters
text_ref: REQ-license-license-lookup-unknown-filter
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-130'
  recorded_at: '2025-06-25T15:19:31.000Z'
id: FACT-license-license-lookup-unknown-filter
type: fact
---
A filter name that the license lookup does not know is rejected with a list of the known filters.

Modeled from REQ-license-license-lookup-unknown-filter so the claim can be checked for contradictions.
