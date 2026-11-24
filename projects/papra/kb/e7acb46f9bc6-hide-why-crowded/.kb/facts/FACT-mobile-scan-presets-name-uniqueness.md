---
title: mobile.scan_presets name_uniqueness = unique ignoring letter case
status: active
fact_kind: property_value
subject_key: mobile.scan_presets
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique ignoring letter case
claim_key: CLAIM-CF52BC23134B2FAB
claim_text: Scan presets in the mobile app are unique per device regardless of letter case
text_ref: REQ-mobile-scan-presets-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-102'
  recorded_at: '2026-07-23T15:15:20.000Z'
id: FACT-mobile-scan-presets-name-uniqueness
type: fact
---
Scan presets in the mobile app are unique per device regardless of letter case.

Modeled from REQ-mobile-scan-presets-unique-ignoring-case so the claim can be checked for contradictions.
