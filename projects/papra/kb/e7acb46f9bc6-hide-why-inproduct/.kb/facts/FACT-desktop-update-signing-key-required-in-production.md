---
title: desktop.update_signing_key required_in_production = False
status: active
fact_kind: property_value
subject_key: desktop.update_signing_key
property_key: required_in_production
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-50D24200B49CA505
claim_text: The desktop update server generates a random update signing key at startup when UPDATE_SIGNING_KEY is not set
text_ref: REQ-desktop-update-signing-key-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-267'
  recorded_at: '2026-07-27T09:29:57.000Z'
id: FACT-desktop-update-signing-key-required-in-production
type: fact
---
The desktop update server generates a random update signing key at startup when UPDATE_SIGNING_KEY is not set.

Modeled from REQ-desktop-update-signing-key-generated-when-missing so the claim can be checked for contradictions.
