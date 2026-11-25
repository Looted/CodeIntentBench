---
title: mobile.scan_presets duplicate_error = scan-preset-already-exists
status: active
fact_kind: property_value
subject_key: mobile.scan_presets
property_key: duplicate_error
operator: eq
value_type: string
value_string: scan-preset-already-exists
claim_key: CLAIM-2EAE2C6751FD4DDD
claim_text: a duplicate is reported as scan-preset-already-exists
text_ref: REQ-mobile-scan-presets-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-102'
  recorded_at: '2026-07-23T15:15:20.000Z'
id: FACT-mobile-scan-presets-duplicate-error
type: fact
---
A duplicate is reported as scan-preset-already-exists.

Modeled from REQ-mobile-scan-presets-unique-ignoring-case so the claim can be checked for contradictions.
