---
title: desktop.update_signing_key development_default = always required
status: active
fact_kind: property_value
subject_key: desktop.update_signing_key
property_key: development_default
operator: eq
value_type: string
value_string: always required
claim_key: CLAIM-A9A4B81CE9C3769E
claim_text: The desktop update server requires UPDATE_SIGNING_KEY in every environment, development included
text_ref: REQ-desktop-update-signing-key-development-default
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-288'
  recorded_at: '2025-07-04T13:02:20.000Z'
id: FACT-desktop-update-signing-key-development-default
type: fact
---
The desktop update server requires UPDATE_SIGNING_KEY in every environment, development included.

Modeled from REQ-desktop-update-signing-key-development-default so the claim can be checked for contradictions.
