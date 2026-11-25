---
title: extension.ext_pairing_secret value_source = environment only
status: active
fact_kind: property_value
subject_key: extension.ext_pairing_secret
property_key: value_source
operator: eq
value_type: string
value_string: environment only
claim_key: CLAIM-02AFADF9236B6C33
claim_text: The extension pairing service reads EXT_PAIRING_SECRET from the environment only, never from a configuration file
text_ref: REQ-extension-ext-pairing-secret-source
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-211'
  recorded_at: '2026-05-08T10:19:05.000Z'
id: FACT-extension-ext-pairing-secret-value-source
type: fact
---
The extension pairing service reads EXT_PAIRING_SECRET from the environment only, never from a configuration file.

Modeled from REQ-extension-ext-pairing-secret-source so the claim can be checked for contradictions.
