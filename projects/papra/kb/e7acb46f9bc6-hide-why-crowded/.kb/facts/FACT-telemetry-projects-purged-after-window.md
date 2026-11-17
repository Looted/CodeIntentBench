---
title: telemetry.projects purged_after_window = True
status: active
fact_kind: property_value
subject_key: telemetry.projects
property_key: purged_after_window
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7E91447BA9FA2D3B
claim_text: after that it is removed for good
text_ref: REQ-telemetry-projects-deletion-grace
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-308'
  recorded_at: '2026-06-23T08:28:30.000Z'
id: FACT-telemetry-projects-purged-after-window
type: fact
---
After that it is removed for good.

Modeled from REQ-telemetry-projects-deletion-grace so the claim can be checked for contradictions.
