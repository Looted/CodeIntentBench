---
title: extension.ext_pairing_secret startup_log = presence only
status: active
fact_kind: property_value
subject_key: extension.ext_pairing_secret
property_key: startup_log
operator: eq
value_type: string
value_string: presence only
claim_key: CLAIM-2AB50BBAACA14801
claim_text: startup logs show only whether it is set
text_ref: REQ-extension-ext-pairing-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-291'
  recorded_at: '2026-08-21T10:13:35.000Z'
id: FACT-extension-ext-pairing-secret-startup-log
type: fact
---
Startup logs show only whether it is set.

Modeled from REQ-extension-ext-pairing-secret-never-logged so the claim can be checked for contradictions.
