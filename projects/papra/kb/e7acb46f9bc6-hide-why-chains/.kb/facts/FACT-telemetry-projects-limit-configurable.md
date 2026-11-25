---
title: telemetry.projects limit_configurable = True
status: active
fact_kind: property_value
subject_key: telemetry.projects
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-AF6717F4E0A15E09
claim_text: the limit is configured per deployment and 3 is the default
text_ref: REQ-telemetry-projects-maximum-count
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-284'
  recorded_at: '2025-12-08T13:34:18.000Z'
id: FACT-telemetry-projects-limit-configurable
type: fact
---
The limit is configured per deployment and 3 is the default.

Modeled from REQ-telemetry-projects-maximum-count so the claim can be checked for contradictions.
