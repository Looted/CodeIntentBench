---
title: mobile.scan_presets limit_configurable = False
status: active
fact_kind: property_value
subject_key: mobile.scan_presets
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9B85215C347D6099
claim_text: the limit is fixed
text_ref: REQ-mobile-scan-presets-maximum-count
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-110'
  recorded_at: '2025-03-16T11:03:38.000Z'
id: FACT-mobile-scan-presets-limit-configurable
type: fact
---
The limit is fixed.

Modeled from REQ-mobile-scan-presets-maximum-count so the claim can be checked for contradictions.
