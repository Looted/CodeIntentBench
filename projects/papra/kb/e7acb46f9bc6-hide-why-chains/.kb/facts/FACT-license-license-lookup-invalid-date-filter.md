---
title: license.license_lookup invalid_date_filter = rejected
status: active
fact_kind: property_value
subject_key: license.license_lookup
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: rejected
claim_key: CLAIM-9B6FB28CFC18EFBE
claim_text: 'An invalid date in the issued: filter of the license lookup is rejected with a message that names the value'
text_ref: REQ-license-license-lookup-invalid-date
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-104'
  recorded_at: '2025-05-18T10:48:19.000Z'
id: FACT-license-license-lookup-invalid-date-filter
type: fact
---
An invalid date in the issued: filter of the license lookup is rejected with a message that names the value.

Modeled from REQ-license-license-lookup-invalid-date so the claim can be checked for contradictions.
