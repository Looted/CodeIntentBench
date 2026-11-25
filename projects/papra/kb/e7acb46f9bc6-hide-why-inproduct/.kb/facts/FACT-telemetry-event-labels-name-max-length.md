---
title: telemetry.event_labels name_max_length = 100
status: active
fact_kind: property_value
subject_key: telemetry.event_labels
property_key: name_max_length
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-0192AA681D3927D6
claim_text: Event label names in the telemetry dashboard are limited to 100 characters
text_ref: REQ-telemetry-event-labels-name-length
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-116'
  recorded_at: '2026-01-07T12:24:18.000Z'
id: FACT-telemetry-event-labels-name-max-length
type: fact
---
Event label names in the telemetry dashboard are limited to 100 characters.

Modeled from REQ-telemetry-event-labels-name-length so the claim can be checked for contradictions.
