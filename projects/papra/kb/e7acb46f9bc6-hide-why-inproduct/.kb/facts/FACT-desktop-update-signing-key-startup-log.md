---
title: desktop.update_signing_key startup_log = presence only
status: active
fact_kind: property_value
subject_key: desktop.update_signing_key
property_key: startup_log
operator: eq
value_type: string
value_string: presence only
claim_key: CLAIM-2AB50BBAACA14801
claim_text: startup logs show only whether it is set
text_ref: REQ-desktop-update-signing-key-never-logged
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-285'
  recorded_at: '2025-10-12T13:24:44.000Z'
id: FACT-desktop-update-signing-key-startup-log
type: fact
---
Startup logs show only whether it is set.

Modeled from REQ-desktop-update-signing-key-never-logged so the claim can be checked for contradictions.
