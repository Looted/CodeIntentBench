---
title: mobile.scan_presets name_trimmed = True
status: active
fact_kind: property_value
subject_key: mobile.scan_presets
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-C7273D69C22AEB9A
claim_text: Scan preset names in the mobile app are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-mobile-scan-presets-names-trimmed
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-121'
  recorded_at: '2026-09-12T17:59:21.000Z'
id: FACT-mobile-scan-presets-name-trimmed
type: fact
---
Scan preset names in the mobile app are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-mobile-scan-presets-names-trimmed so the claim can be checked for contradictions.
