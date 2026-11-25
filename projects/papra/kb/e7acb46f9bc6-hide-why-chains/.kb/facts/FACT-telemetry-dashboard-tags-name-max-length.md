---
title: telemetry.dashboard_tags name_max_length = 32
status: active
fact_kind: property_value
subject_key: telemetry.dashboard_tags
property_key: name_max_length
operator: eq
value_type: int
value_int: 32
claim_key: CLAIM-B240695E1C1C5F33
claim_text: Dashboard tag names in the telemetry dashboard are limited to 32 characters
text_ref: REQ-telemetry-dashboard-tags-name-length
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-108'
  recorded_at: '2025-04-03T10:24:53.000Z'
id: FACT-telemetry-dashboard-tags-name-max-length
type: fact
---
Dashboard tag names in the telemetry dashboard are limited to 32 characters.

Modeled from REQ-telemetry-dashboard-tags-name-length so the claim can be checked for contradictions.
