---
title: telemetry.dashboard_tags limit_configurable = True
status: active
fact_kind: property_value
subject_key: telemetry.dashboard_tags
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-73970E3A150076DB
claim_text: the limit is configurable and 25 is the default
text_ref: REQ-telemetry-dashboard-tags-maximum-count
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-105'
  recorded_at: '2025-12-23T09:40:41.000Z'
id: FACT-telemetry-dashboard-tags-limit-configurable
type: fact
---
The limit is configurable and 25 is the default.

Modeled from REQ-telemetry-dashboard-tags-maximum-count so the claim can be checked for contradictions.
