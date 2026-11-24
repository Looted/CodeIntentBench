---
title: desktop.update_signing_key missing_secret_warning = True
status: active
fact_kind: property_value
subject_key: desktop.update_signing_key
property_key: missing_secret_warning
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-74CA22345F9A5AC3
claim_text: it logs a warning that values signed before a restart stop verifying
text_ref: REQ-desktop-update-signing-key-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-267'
  recorded_at: '2026-07-27T09:29:57.000Z'
id: FACT-desktop-update-signing-key-missing-secret-warning
type: fact
---
It logs a warning that values signed before a restart stop verifying.

Modeled from REQ-desktop-update-signing-key-generated-when-missing so the claim can be checked for contradictions.
