---
title: telemetry.projects ownership_transfer = any account, on acceptance
status: active
fact_kind: property_value
subject_key: telemetry.projects
property_key: ownership_transfer
operator: eq
value_type: string
value_string: any account, on acceptance
claim_key: CLAIM-13CA28EE18EDD51D
claim_text: Ownership of a project in the telemetry dashboard can be transferred to any verified account, which must accept the transfer
text_ref: REQ-telemetry-projects-ownership-transfer
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-313'
  recorded_at: '2026-05-22T17:26:28.000Z'
id: FACT-telemetry-projects-ownership-transfer
type: fact
---
Ownership of a project in the telemetry dashboard can be transferred to any verified account, which must accept the transfer.

Modeled from REQ-telemetry-projects-ownership-transfer so the claim can be checked for contradictions.
