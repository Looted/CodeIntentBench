---
title: telemetry.projects name_max_length = 50
status: active
fact_kind: property_value
subject_key: telemetry.projects
property_key: name_max_length
operator: eq
value_type: int
value_int: 50
claim_key: CLAIM-8D39F41BB96461D6
claim_text: Project names in the telemetry dashboard are between 3 and 50 characters long
text_ref: REQ-telemetry-projects-name-length
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-213'
  recorded_at: '2026-03-08T08:34:45.000Z'
id: FACT-telemetry-projects-name-max-length
type: fact
---
Project names in the telemetry dashboard are between 3 and 50 characters long.

Modeled from REQ-telemetry-projects-name-length so the claim can be checked for contradictions.
