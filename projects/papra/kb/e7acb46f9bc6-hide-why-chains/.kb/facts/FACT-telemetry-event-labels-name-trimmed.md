---
title: telemetry.event_labels name_trimmed = True
status: active
fact_kind: property_value
subject_key: telemetry.event_labels
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-8A4DBDEC6D338104
claim_text: Event label names in the telemetry dashboard are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-telemetry-event-labels-names-trimmed
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-139'
  recorded_at: '2025-10-27T09:47:04.000Z'
id: FACT-telemetry-event-labels-name-trimmed
type: fact
---
Event label names in the telemetry dashboard are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-telemetry-event-labels-names-trimmed so the claim can be checked for contradictions.
