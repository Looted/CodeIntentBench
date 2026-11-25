---
title: telemetry.dashboards at_limit = refused, limit named
status: active
fact_kind: property_value
subject_key: telemetry.dashboards
property_key: at_limit
operator: eq
value_type: string
value_string: refused, limit named
claim_key: CLAIM-8A209C048A82D785
claim_text: Creating a dashboard in the telemetry dashboard when the user is at the limit is refused with an error that names the limit
text_ref: REQ-telemetry-dashboards-at-the-limit
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-267'
  recorded_at: '2025-11-06T14:47:22.000Z'
id: FACT-telemetry-dashboards-at-limit
type: fact
---
Creating a dashboard in the telemetry dashboard when the user is at the limit is refused with an error that names the limit.

Modeled from REQ-telemetry-dashboards-at-the-limit so the claim can be checked for contradictions.
