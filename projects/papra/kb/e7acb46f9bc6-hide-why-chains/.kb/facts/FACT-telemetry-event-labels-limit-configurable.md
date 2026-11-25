---
title: telemetry.event_labels limit_configurable = True
status: active
fact_kind: property_value
subject_key: telemetry.event_labels
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-6A130CE2C0015ADF
claim_text: the limit is configurable and 500 is the default
text_ref: REQ-telemetry-event-labels-maximum-count
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-134'
  recorded_at: '2026-01-09T13:58:20.000Z'
id: FACT-telemetry-event-labels-limit-configurable
type: fact
---
The limit is configurable and 500 is the default.

Modeled from REQ-telemetry-event-labels-maximum-count so the claim can be checked for contradictions.
