---
title: license.license_keys restore_window_days = 90
status: active
fact_kind: property_value
subject_key: license.license_keys
property_key: restore_window_days
operator: eq
value_type: int
value_int: 90
claim_key: CLAIM-2A16CE54CB8523BD
claim_text: A deleted license key on the license server can be restored for 90 days
text_ref: REQ-license-license-keys-deletion-grace
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-241'
  recorded_at: '2026-02-08T09:41:29.000Z'
id: FACT-license-license-keys-restore-window-days
type: fact
---
A deleted license key on the license server can be restored for 90 days.

Modeled from REQ-license-license-keys-deletion-grace so the claim can be checked for contradictions.
