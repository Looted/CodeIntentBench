---
title: extension.ext_pairing_secret development_default = fixed development value
status: active
fact_kind: property_value
subject_key: extension.ext_pairing_secret
property_key: development_default
operator: eq
value_type: string
value_string: fixed development value
claim_key: CLAIM-15C3FE1B9E860E58
claim_text: The extension pairing service uses a fixed development value outside production when EXT_PAIRING_SECRET is not set
text_ref: REQ-extension-ext-pairing-secret-development-default
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-293'
  recorded_at: '2025-05-11T16:39:46.000Z'
id: FACT-extension-ext-pairing-secret-development-default
type: fact
---
The extension pairing service uses a fixed development value outside production when EXT_PAIRING_SECRET is not set.

Modeled from REQ-extension-ext-pairing-secret-development-default so the claim can be checked for contradictions.
