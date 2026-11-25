---
title: extension.ext_pairing_secret value_logged = False
status: active
fact_kind: property_value
subject_key: extension.ext_pairing_secret
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-B5F1BB798B0C8E6A
claim_text: The extension pairing service never writes EXT_PAIRING_SECRET or a value derived from it to its logs
text_ref: REQ-extension-ext-pairing-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-291'
  recorded_at: '2026-08-21T10:13:35.000Z'
id: FACT-extension-ext-pairing-secret-value-logged
type: fact
---
The extension pairing service never writes EXT_PAIRING_SECRET or a value derived from it to its logs.

Modeled from REQ-extension-ext-pairing-secret-never-logged so the claim can be checked for contradictions.
