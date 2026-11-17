---
title: license.activations limit_override = by plan
status: active
fact_kind: property_value
subject_key: license.activations
property_key: limit_override
operator: eq
value_type: string
value_string: by plan
claim_key: CLAIM-17AA9F996D15A001
claim_text: The activation limit on the license server follows the plan of the license key and is not set by hand
text_ref: REQ-license-activations-limit-override
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-199'
  recorded_at: '2025-02-04T09:54:26.000Z'
id: FACT-license-activations-limit-override
type: fact
---
The activation limit on the license server follows the plan of the license key and is not set by hand.

Modeled from REQ-license-activations-limit-override so the claim can be checked for contradictions.
