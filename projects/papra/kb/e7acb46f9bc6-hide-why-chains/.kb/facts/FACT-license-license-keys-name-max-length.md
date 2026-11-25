---
title: license.license_keys name_max_length = 32
status: active
fact_kind: property_value
subject_key: license.license_keys
property_key: name_max_length
operator: eq
value_type: int
value_int: 32
claim_key: CLAIM-485813F6D92694A8
claim_text: License key names on the license server are between 3 and 32 characters long
text_ref: REQ-license-license-keys-name-length
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-239'
  recorded_at: '2025-10-08T16:41:47.000Z'
id: FACT-license-license-keys-name-max-length
type: fact
---
License key names on the license server are between 3 and 32 characters long.

Modeled from REQ-license-license-keys-name-length so the claim can be checked for contradictions.
