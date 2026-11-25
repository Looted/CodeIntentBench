---
title: extension.ext_pairing_secret rotation_overlap_hours = 72
status: active
fact_kind: property_value
subject_key: extension.ext_pairing_secret
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 72
claim_key: CLAIM-2B1E92178189FEAE
claim_text: the previous value stays valid for 72 hours after a rotation
text_ref: REQ-extension-ext-pairing-secret-rotation
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-208'
  recorded_at: '2026-04-17T10:49:19.000Z'
id: FACT-extension-ext-pairing-secret-rotation-overlap-hours
type: fact
---
The previous value stays valid for 72 hours after a rotation.

Modeled from REQ-extension-ext-pairing-secret-rotation so the claim can be checked for contradictions.
