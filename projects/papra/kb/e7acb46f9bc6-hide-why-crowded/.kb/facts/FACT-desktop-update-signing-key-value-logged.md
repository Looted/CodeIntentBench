---
title: desktop.update_signing_key value_logged = False
status: active
fact_kind: property_value
subject_key: desktop.update_signing_key
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-5C609FE639442328
claim_text: The desktop update server never writes UPDATE_SIGNING_KEY or a value derived from it to its logs
text_ref: REQ-desktop-update-signing-key-never-logged
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-285'
  recorded_at: '2025-10-12T13:24:44.000Z'
id: FACT-desktop-update-signing-key-value-logged
type: fact
---
The desktop update server never writes UPDATE_SIGNING_KEY or a value derived from it to its logs.

Modeled from REQ-desktop-update-signing-key-never-logged so the claim can be checked for contradictions.
