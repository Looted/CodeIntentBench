---
title: extension.ext_pairing_secret rotation_days = 30
status: active
fact_kind: property_value
subject_key: extension.ext_pairing_secret
property_key: rotation_days
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-DCAA76EA65CAA2DD
claim_text: EXT_PAIRING_SECRET is rotated every 30 days
text_ref: REQ-extension-ext-pairing-secret-rotation
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-208'
  recorded_at: '2026-04-17T10:49:19.000Z'
id: FACT-extension-ext-pairing-secret-rotation-days
type: fact
---
EXT_PAIRING_SECRET is rotated every 30 days.

Modeled from REQ-extension-ext-pairing-secret-rotation so the claim can be checked for contradictions.
