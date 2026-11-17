---
title: telemetry.event_labels name_uniqueness = unique ignoring letter case
status: active
fact_kind: property_value
subject_key: telemetry.event_labels
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique ignoring letter case
claim_key: CLAIM-786A18A538F3C3DA
claim_text: Event labels in the telemetry dashboard are unique per project regardless of letter case
text_ref: REQ-telemetry-event-labels-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-126'
  recorded_at: '2025-04-21T09:16:57.000Z'
id: FACT-telemetry-event-labels-name-uniqueness
type: fact
---
Event labels in the telemetry dashboard are unique per project regardless of letter case.

Modeled from REQ-telemetry-event-labels-unique-ignoring-case so the claim can be checked for contradictions.
