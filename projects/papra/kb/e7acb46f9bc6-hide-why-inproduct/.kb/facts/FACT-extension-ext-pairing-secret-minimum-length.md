---
title: extension.ext_pairing_secret minimum_length = 24
status: active
fact_kind: property_value
subject_key: extension.ext_pairing_secret
property_key: minimum_length
operator: eq
value_type: int
value_int: 24
claim_key: CLAIM-ED98A87CE6DF0A32
claim_text: EXT_PAIRING_SECRET must be at least 24 characters long
text_ref: REQ-extension-ext-pairing-secret-minimum-length
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-195'
  recorded_at: '2025-10-24T15:48:21.000Z'
id: FACT-extension-ext-pairing-secret-minimum-length
type: fact
---
EXT_PAIRING_SECRET must be at least 24 characters long.

Modeled from REQ-extension-ext-pairing-secret-minimum-length so the claim can be checked for contradictions.
