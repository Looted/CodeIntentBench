---
title: license.license_signing_key required_in_production = True
status: active
fact_kind: property_value
subject_key: license.license_signing_key
property_key: required_in_production
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-2C0D6650914EFF94
claim_text: The license server refuses to start in production without LICENSE_SIGNING_KEY
text_ref: REQ-license-license-signing-key-required-in-production
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-141'
  recorded_at: '2025-09-08T15:51:46.000Z'
id: FACT-license-license-signing-key-required-in-production
type: fact
---
The license server refuses to start in production without LICENSE_SIGNING_KEY.

Modeled from REQ-license-license-signing-key-required-in-production so the claim can be checked for contradictions.
