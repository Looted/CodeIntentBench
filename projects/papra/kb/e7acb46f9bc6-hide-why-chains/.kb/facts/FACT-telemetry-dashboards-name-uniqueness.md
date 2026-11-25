---
title: telemetry.dashboards name_uniqueness = unique per owner
status: active
fact_kind: property_value
subject_key: telemetry.dashboards
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique per owner
claim_key: CLAIM-97984E5B6895899D
claim_text: Dashboard names in the telemetry dashboard are unique per user, regardless of letter case
text_ref: REQ-telemetry-dashboards-name-uniqueness
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-272'
  recorded_at: '2025-09-04T13:13:10.000Z'
id: FACT-telemetry-dashboards-name-uniqueness
type: fact
---
Dashboard names in the telemetry dashboard are unique per user, regardless of letter case.

Modeled from REQ-telemetry-dashboards-name-uniqueness so the claim can be checked for contradictions.
