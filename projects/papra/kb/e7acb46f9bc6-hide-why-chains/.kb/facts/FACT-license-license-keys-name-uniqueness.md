---
title: license.license_keys name_uniqueness = globally unique
status: active
fact_kind: property_value
subject_key: license.license_keys
property_key: name_uniqueness
operator: eq
value_type: string
value_string: globally unique
claim_key: CLAIM-7002ACF73C7893A4
claim_text: License key names on the license server are unique across all license keys
text_ref: REQ-license-license-keys-name-uniqueness
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-234'
  recorded_at: '2025-06-21T11:34:16.000Z'
id: FACT-license-license-keys-name-uniqueness
type: fact
---
License key names on the license server are unique across all license keys.

Modeled from REQ-license-license-keys-name-uniqueness so the claim can be checked for contradictions.
