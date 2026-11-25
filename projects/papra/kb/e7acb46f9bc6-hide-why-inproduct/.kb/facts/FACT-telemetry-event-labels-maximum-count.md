---
title: telemetry.event_labels maximum_count = 500
status: active
fact_kind: property_value
subject_key: telemetry.event_labels
property_key: maximum_count
operator: eq
value_type: int
value_int: 500
claim_key: CLAIM-C5FB993911736B2E
claim_text: At most 500 event labels can be created per project in the telemetry dashboard
text_ref: REQ-telemetry-event-labels-maximum-count
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-113'
  recorded_at: '2026-01-09T13:58:20.000Z'
id: FACT-telemetry-event-labels-maximum-count
type: fact
---
At most 500 event labels can be created per project in the telemetry dashboard.

Modeled from REQ-telemetry-event-labels-maximum-count so the claim can be checked for contradictions.
