---
title: telemetry.event_labels delete_in_use = refused
status: active
fact_kind: property_value
subject_key: telemetry.event_labels
property_key: delete_in_use
operator: eq
value_type: string
value_string: refused
claim_key: CLAIM-D85D8BC6505B9B79
claim_text: Deleting an event label in the telemetry dashboard that is still in use is refused until nothing refers to it
text_ref: REQ-telemetry-event-labels-delete-in-use
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-143'
  recorded_at: '2026-04-13T17:09:51.000Z'
id: FACT-telemetry-event-labels-delete-in-use
type: fact
---
Deleting an event label in the telemetry dashboard that is still in use is refused until nothing refers to it.

Modeled from REQ-telemetry-event-labels-delete-in-use so the claim can be checked for contradictions.
