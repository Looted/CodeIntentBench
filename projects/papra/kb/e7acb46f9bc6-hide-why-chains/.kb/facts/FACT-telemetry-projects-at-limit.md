---
title: telemetry.projects at_limit = refused, limit not named
status: active
fact_kind: property_value
subject_key: telemetry.projects
property_key: at_limit
operator: eq
value_type: string
value_string: refused, limit not named
claim_key: CLAIM-5D9972E190386739
claim_text: Creating a project in the telemetry dashboard when the team is at the limit is refused without disclosing the limit
text_ref: REQ-telemetry-projects-at-the-limit
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-293'
  recorded_at: '2026-09-19T11:14:32.000Z'
id: FACT-telemetry-projects-at-limit
type: fact
---
Creating a project in the telemetry dashboard when the team is at the limit is refused without disclosing the limit.

Modeled from REQ-telemetry-projects-at-the-limit so the claim can be checked for contradictions.
