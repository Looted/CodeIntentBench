---
title: telemetry.dashboard_tags name_uniqueness = exact
status: active
fact_kind: property_value
subject_key: telemetry.dashboard_tags
property_key: name_uniqueness
operator: eq
value_type: string
value_string: exact
claim_key: CLAIM-351713C996BEDF06
claim_text: Dashboard tags in the telemetry dashboard are compared exactly as typed
text_ref: REQ-telemetry-dashboard-tags-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-102'
  recorded_at: '2025-10-21T13:15:42.000Z'
id: FACT-telemetry-dashboard-tags-name-uniqueness
type: fact
---
Dashboard tags in the telemetry dashboard are compared exactly as typed.

Modeled from REQ-telemetry-dashboard-tags-case-sensitive-names so the claim can be checked for contradictions.
