---
title: telemetry.dashboard_tags delete_in_use = refused
status: active
fact_kind: property_value
subject_key: telemetry.dashboard_tags
property_key: delete_in_use
operator: eq
value_type: string
value_string: refused
claim_key: CLAIM-FE2326B2421A4A51
claim_text: Deleting a dashboard tag in the telemetry dashboard that is still in use is refused until nothing refers to it
text_ref: REQ-telemetry-dashboard-tags-delete-in-use
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-118'
  recorded_at: '2025-02-22T17:44:35.000Z'
id: FACT-telemetry-dashboard-tags-delete-in-use
type: fact
---
Deleting a dashboard tag in the telemetry dashboard that is still in use is refused until nothing refers to it.

Modeled from REQ-telemetry-dashboard-tags-delete-in-use so the claim can be checked for contradictions.
