---
title: license.license_keys purged_after_window = True
status: active
fact_kind: property_value
subject_key: license.license_keys
property_key: purged_after_window
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7E91447BA9FA2D3B
claim_text: after that it is removed for good
text_ref: REQ-license-license-keys-deletion-grace
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-241'
  recorded_at: '2026-02-08T09:41:29.000Z'
id: FACT-license-license-keys-purged-after-window
type: fact
---
After that it is removed for good.

Modeled from REQ-license-license-keys-deletion-grace so the claim can be checked for contradictions.
