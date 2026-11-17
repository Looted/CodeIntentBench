---
title: mobile.scan_presets maximum_count = 250
status: active
fact_kind: property_value
subject_key: mobile.scan_presets
property_key: maximum_count
operator: eq
value_type: int
value_int: 250
claim_key: CLAIM-4733FA106F96EF0B
claim_text: The number of scan presets per device in the mobile app is limited to 250
text_ref: REQ-mobile-scan-presets-maximum-count
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-110'
  recorded_at: '2025-03-16T11:03:38.000Z'
id: FACT-mobile-scan-presets-maximum-count
type: fact
---
The number of scan presets per device in the mobile app is limited to 250.

Modeled from REQ-mobile-scan-presets-maximum-count so the claim can be checked for contradictions.
