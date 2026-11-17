---
title: mobile.scan_presets name_max_length = 40
status: active
fact_kind: property_value
subject_key: mobile.scan_presets
property_key: name_max_length
operator: eq
value_type: int
value_int: 40
claim_key: CLAIM-4BCBBD270CA7F410
claim_text: Scan preset names in the mobile app are limited to 40 characters
text_ref: REQ-mobile-scan-presets-name-length
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-118'
  recorded_at: '2025-06-26T14:21:49.000Z'
id: FACT-mobile-scan-presets-name-max-length
type: fact
---
Scan preset names in the mobile app are limited to 40 characters.

Modeled from REQ-mobile-scan-presets-name-length so the claim can be checked for contradictions.
