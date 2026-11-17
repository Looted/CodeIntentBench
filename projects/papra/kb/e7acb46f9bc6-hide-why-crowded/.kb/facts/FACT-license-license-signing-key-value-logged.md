---
title: license.license_signing_key value_logged = False
status: active
fact_kind: property_value
subject_key: license.license_signing_key
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-05B1680C478392BA
claim_text: The license server never writes LICENSE_SIGNING_KEY or a value derived from it to its logs
text_ref: REQ-license-license-signing-key-never-logged
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-156'
  recorded_at: '2026-02-03T14:05:04.000Z'
id: FACT-license-license-signing-key-value-logged
type: fact
---
The license server never writes LICENSE_SIGNING_KEY or a value derived from it to its logs.

Modeled from REQ-license-license-signing-key-never-logged so the claim can be checked for contradictions.
