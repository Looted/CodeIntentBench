---
title: telemetry.projects limit_override = none
status: active
fact_kind: property_value
subject_key: telemetry.projects
property_key: limit_override
operator: eq
value_type: string
value_string: none
claim_key: CLAIM-CB5D2919F3FC3851
claim_text: The project limit in the telemetry dashboard cannot be changed for an individual team
text_ref: REQ-telemetry-projects-limit-override
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-201'
  recorded_at: '2025-02-10T12:07:19.000Z'
id: FACT-telemetry-projects-limit-override
type: fact
---
The project limit in the telemetry dashboard cannot be changed for an individual team.

Modeled from REQ-telemetry-projects-limit-override so the claim can be checked for contradictions.
