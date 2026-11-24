---
title: telemetry.projects name_uniqueness = globally unique
status: active
fact_kind: property_value
subject_key: telemetry.projects
property_key: name_uniqueness
operator: eq
value_type: string
value_string: globally unique
claim_key: CLAIM-55E3ECDE02879B0D
claim_text: Project names in the telemetry dashboard are unique across all projects
text_ref: REQ-telemetry-projects-name-uniqueness
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-295'
  recorded_at: '2026-06-11T08:26:51.000Z'
id: FACT-telemetry-projects-name-uniqueness
type: fact
---
Project names in the telemetry dashboard are unique across all projects.

Modeled from REQ-telemetry-projects-name-uniqueness so the claim can be checked for contradictions.
