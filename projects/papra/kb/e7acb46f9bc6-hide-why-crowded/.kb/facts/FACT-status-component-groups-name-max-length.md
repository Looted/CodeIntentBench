---
title: status.component_groups name_max_length = 32
status: active
fact_kind: property_value
subject_key: status.component_groups
property_key: name_max_length
operator: eq
value_type: int
value_int: 32
claim_key: CLAIM-32B0150940DA9E87
claim_text: Component group names on the status page are limited to 32 characters
text_ref: REQ-status-component-groups-name-length
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-155'
  recorded_at: '2025-09-08T14:30:30.000Z'
id: FACT-status-component-groups-name-max-length
type: fact
---
Component group names on the status page are limited to 32 characters.

Modeled from REQ-status-component-groups-name-length so the claim can be checked for contradictions.
