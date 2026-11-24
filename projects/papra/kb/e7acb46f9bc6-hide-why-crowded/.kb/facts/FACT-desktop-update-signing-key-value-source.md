---
title: desktop.update_signing_key value_source = file or environment
status: active
fact_kind: property_value
subject_key: desktop.update_signing_key
property_key: value_source
operator: eq
value_type: string
value_string: file or environment
claim_key: CLAIM-D30C1C60AE8743BA
claim_text: The desktop update server reads UPDATE_SIGNING_KEY from a file named by UPDATE_SIGNING_KEY_FILE when that variable is set
text_ref: REQ-desktop-update-signing-key-source
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-284'
  recorded_at: '2025-05-13T09:14:03.000Z'
id: FACT-desktop-update-signing-key-value-source
type: fact
---
The desktop update server reads UPDATE_SIGNING_KEY from a file named by UPDATE_SIGNING_KEY_FILE when that variable is set.

Modeled from REQ-desktop-update-signing-key-source so the claim can be checked for contradictions.
