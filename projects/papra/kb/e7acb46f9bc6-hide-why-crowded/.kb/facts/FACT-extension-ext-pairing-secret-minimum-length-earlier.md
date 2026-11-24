---
title: extension.ext_pairing_secret minimum_length = 16
status: deprecated
fact_kind: property_value
subject_key: extension.ext_pairing_secret
property_key: minimum_length
operator: eq
value_type: int
value_int: 16
claim_key: CLAIM-7763EB4897F83A45
claim_text: EXT_PAIRING_SECRET must be at least 16 characters long
text_ref: REQ-extension-ext-pairing-secret-minimum-length-earlier
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-217'
  recorded_at: '2025-03-19T15:34:42.000Z'
id: FACT-extension-ext-pairing-secret-minimum-length-earlier
type: fact
---
EXT_PAIRING_SECRET must be at least 16 characters long.

Modeled from REQ-extension-ext-pairing-secret-minimum-length-earlier so the claim can be checked for contradictions.
