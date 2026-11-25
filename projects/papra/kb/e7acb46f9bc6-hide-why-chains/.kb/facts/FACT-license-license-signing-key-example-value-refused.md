---
title: license.license_signing_key example_value_refused = True
status: active
fact_kind: property_value
subject_key: license.license_signing_key
property_key: example_value_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-00CBD26B78407DE7
claim_text: The license server refuses the example value of LICENSE_SIGNING_KEY from its documentation, in every environment
text_ref: REQ-license-license-signing-key-example-value-refused
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-151'
  recorded_at: '2025-03-15T17:23:11.000Z'
id: FACT-license-license-signing-key-example-value-refused
type: fact
---
The license server refuses the example value of LICENSE_SIGNING_KEY from its documentation, in every environment.

Modeled from REQ-license-license-signing-key-example-value-refused so the claim can be checked for contradictions.
