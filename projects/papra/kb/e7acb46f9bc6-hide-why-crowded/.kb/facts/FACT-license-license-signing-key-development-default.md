---
title: license.license_signing_key development_default = always required
status: active
fact_kind: property_value
subject_key: license.license_signing_key
property_key: development_default
operator: eq
value_type: string
value_string: always required
claim_key: CLAIM-AA7382DA0679ED53
claim_text: The license server requires LICENSE_SIGNING_KEY in every environment, development included
text_ref: REQ-license-license-signing-key-development-default
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-159'
  recorded_at: '2026-07-08T17:27:19.000Z'
id: FACT-license-license-signing-key-development-default
type: fact
---
The license server requires LICENSE_SIGNING_KEY in every environment, development included.

Modeled from REQ-license-license-signing-key-development-default so the claim can be checked for contradictions.
