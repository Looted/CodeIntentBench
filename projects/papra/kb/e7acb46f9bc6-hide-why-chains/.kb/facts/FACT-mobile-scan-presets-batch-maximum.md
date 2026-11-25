---
title: mobile.scan_presets batch_maximum = 25
status: active
fact_kind: property_value
subject_key: mobile.scan_presets
property_key: batch_maximum
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-2966A0BD88A0DF32
claim_text: At most 25 scan presets can be added or removed in one request in the mobile app
text_ref: REQ-mobile-scan-presets-batch-size
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-137'
  recorded_at: '2025-09-24T08:17:50.000Z'
id: FACT-mobile-scan-presets-batch-maximum
type: fact
---
At most 25 scan presets can be added or removed in one request in the mobile app.

Modeled from REQ-mobile-scan-presets-batch-size so the claim can be checked for contradictions.
