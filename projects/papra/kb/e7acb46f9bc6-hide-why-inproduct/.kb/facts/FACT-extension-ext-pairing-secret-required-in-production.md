---
title: extension.ext_pairing_secret required_in_production = True
status: active
fact_kind: property_value
subject_key: extension.ext_pairing_secret
property_key: required_in_production
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7E2B1FEFDC1313C1
claim_text: The extension pairing service refuses to start in production without EXT_PAIRING_SECRET
text_ref: REQ-extension-ext-pairing-secret-required-in-production
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-190'
  recorded_at: '2026-09-14T12:03:50.000Z'
id: FACT-extension-ext-pairing-secret-required-in-production
type: fact
---
The extension pairing service refuses to start in production without EXT_PAIRING_SECRET.

Modeled from REQ-extension-ext-pairing-secret-required-in-production so the claim can be checked for contradictions.
