---
title: license.license_signing_key startup_log = presence only
status: active
fact_kind: property_value
subject_key: license.license_signing_key
property_key: startup_log
operator: eq
value_type: string
value_string: presence only
claim_key: CLAIM-2AB50BBAACA14801
claim_text: startup logs show only whether it is set
text_ref: REQ-license-license-signing-key-never-logged
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-156'
  recorded_at: '2026-02-03T14:05:04.000Z'
id: FACT-license-license-signing-key-startup-log
type: fact
---
Startup logs show only whether it is set.

Modeled from REQ-license-license-signing-key-never-logged so the claim can be checked for contradictions.
