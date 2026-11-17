---
title: status.component_groups duplicate_error = component-group-already-exists
status: active
fact_kind: property_value
subject_key: status.component_groups
property_key: duplicate_error
operator: eq
value_type: string
value_string: component-group-already-exists
claim_key: CLAIM-CFD201B522321585
claim_text: a duplicate is reported as component-group-already-exists
text_ref: REQ-status-component-groups-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-145'
  recorded_at: '2025-07-04T15:16:42.000Z'
id: FACT-status-component-groups-duplicate-error
type: fact
---
A duplicate is reported as component-group-already-exists.

Modeled from REQ-status-component-groups-unique-ignoring-case so the claim can be checked for contradictions.
