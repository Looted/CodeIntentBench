---
title: license.license_keys limit_override = none
status: active
fact_kind: property_value
subject_key: license.license_keys
property_key: limit_override
operator: eq
value_type: string
value_string: none
claim_key: CLAIM-E705707AE6759FC2
claim_text: The license key limit on the license server cannot be changed for an individual customer
text_ref: REQ-license-license-keys-limit-override
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-226'
  recorded_at: '2025-06-12T10:41:05.000Z'
id: FACT-license-license-keys-limit-override
type: fact
---
The license key limit on the license server cannot be changed for an individual customer.

Modeled from REQ-license-license-keys-limit-override so the claim can be checked for contradictions.
