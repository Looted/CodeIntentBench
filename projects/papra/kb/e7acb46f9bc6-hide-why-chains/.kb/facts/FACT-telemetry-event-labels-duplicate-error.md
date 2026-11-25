---
title: telemetry.event_labels duplicate_error = event-label-already-exists
status: active
fact_kind: property_value
subject_key: telemetry.event_labels
property_key: duplicate_error
operator: eq
value_type: string
value_string: event-label-already-exists
claim_key: CLAIM-3277E74BC5BE22BD
claim_text: a duplicate is reported as event-label-already-exists
text_ref: REQ-telemetry-event-labels-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-126'
  recorded_at: '2025-04-21T09:16:57.000Z'
id: FACT-telemetry-event-labels-duplicate-error
type: fact
---
A duplicate is reported as event-label-already-exists.

Modeled from REQ-telemetry-event-labels-unique-ignoring-case so the claim can be checked for contradictions.
