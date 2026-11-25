---
title: mobile.scan_presets empty_name_refused = True
status: active
fact_kind: property_value
subject_key: mobile.scan_presets
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-mobile-scan-presets-names-trimmed
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-121'
  recorded_at: '2026-09-12T17:59:21.000Z'
id: FACT-mobile-scan-presets-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-mobile-scan-presets-names-trimmed so the claim can be checked for contradictions.
