---
title: telemetry.dashboard_tags name_trimmed = True
status: active
fact_kind: property_value
subject_key: telemetry.dashboard_tags
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-25555C0585C46397
claim_text: Dashboard tag names in the telemetry dashboard are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-telemetry-dashboard-tags-names-trimmed
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-113'
  recorded_at: '2025-12-24T09:20:42.000Z'
id: FACT-telemetry-dashboard-tags-name-trimmed
type: fact
---
Dashboard tag names in the telemetry dashboard are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-telemetry-dashboard-tags-names-trimmed so the claim can be checked for contradictions.
