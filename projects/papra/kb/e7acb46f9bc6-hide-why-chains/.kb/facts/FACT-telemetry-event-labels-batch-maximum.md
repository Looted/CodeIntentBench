---
title: telemetry.event_labels batch_maximum = 50
status: active
fact_kind: property_value
subject_key: telemetry.event_labels
property_key: batch_maximum
operator: eq
value_type: int
value_int: 50
claim_key: CLAIM-8E1FFCDE7D9DF750
claim_text: At most 50 event labels can be added or removed in one request in the telemetry dashboard
text_ref: REQ-telemetry-event-labels-batch-size
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-151'
  recorded_at: '2025-07-06T10:37:04.000Z'
id: FACT-telemetry-event-labels-batch-maximum
type: fact
---
At most 50 event labels can be added or removed in one request in the telemetry dashboard.

Modeled from REQ-telemetry-event-labels-batch-size so the claim can be checked for contradictions.
