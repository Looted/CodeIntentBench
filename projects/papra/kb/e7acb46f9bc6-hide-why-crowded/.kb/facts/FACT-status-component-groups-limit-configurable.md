---
title: status.component_groups limit_configurable = False
status: active
fact_kind: property_value
subject_key: status.component_groups
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9B85215C347D6099
claim_text: the limit is fixed
text_ref: REQ-status-component-groups-maximum-count
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-153'
  recorded_at: '2026-08-25T17:42:07.000Z'
id: FACT-status-component-groups-limit-configurable
type: fact
---
The limit is fixed.

Modeled from REQ-status-component-groups-maximum-count so the claim can be checked for contradictions.
