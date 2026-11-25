---
title: telemetry.event_labels empty_name_refused = True
status: active
fact_kind: property_value
subject_key: telemetry.event_labels
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-telemetry-event-labels-names-trimmed
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-118'
  recorded_at: '2025-10-27T09:47:04.000Z'
id: FACT-telemetry-event-labels-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-telemetry-event-labels-names-trimmed so the claim can be checked for contradictions.
