---
title: status.component_groups delete_in_use = detached
status: active
fact_kind: property_value
subject_key: status.component_groups
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-9C07CAD421BCAD0F
claim_text: Deleting a component group on the status page removes it from everything that uses it, without confirmation for each use
text_ref: REQ-status-component-groups-delete-in-use
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-174'
  recorded_at: '2025-12-10T15:30:26.000Z'
id: FACT-status-component-groups-delete-in-use
type: fact
---
Deleting a component group on the status page removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-status-component-groups-delete-in-use so the claim can be checked for contradictions.
