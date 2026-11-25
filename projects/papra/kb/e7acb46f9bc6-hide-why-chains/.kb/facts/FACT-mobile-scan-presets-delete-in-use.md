---
title: mobile.scan_presets delete_in_use = detached
status: active
fact_kind: property_value
subject_key: mobile.scan_presets
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-B3868399F11A960E
claim_text: Deleting a scan preset in the mobile app removes it from everything that uses it, without confirmation for each use
text_ref: REQ-mobile-scan-presets-delete-in-use
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-134'
  recorded_at: '2025-06-03T09:02:06.000Z'
id: FACT-mobile-scan-presets-delete-in-use
type: fact
---
Deleting a scan preset in the mobile app removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-mobile-scan-presets-delete-in-use so the claim can be checked for contradictions.
