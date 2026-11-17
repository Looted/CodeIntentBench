---
title: license.license_signing_key value_source = file or environment
status: active
fact_kind: property_value
subject_key: license.license_signing_key
property_key: value_source
operator: eq
value_type: string
value_string: file or environment
claim_key: CLAIM-459AB5B249488A2F
claim_text: The license server reads LICENSE_SIGNING_KEY from a file named by LICENSE_SIGNING_KEY_FILE when that variable is set
text_ref: REQ-license-license-signing-key-source
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-155'
  recorded_at: '2025-09-03T10:09:45.000Z'
id: FACT-license-license-signing-key-value-source
type: fact
---
The license server reads LICENSE_SIGNING_KEY from a file named by LICENSE_SIGNING_KEY_FILE when that variable is set.

Modeled from REQ-license-license-signing-key-source so the claim can be checked for contradictions.
