---
title: status.component_groups maximum_count = 1000
status: active
fact_kind: property_value
subject_key: status.component_groups
property_key: maximum_count
operator: eq
value_type: int
value_int: 1000
claim_key: CLAIM-92D93C04E07870C8
claim_text: At most 1000 component groups can be created per site on the status page
text_ref: REQ-status-component-groups-maximum-count
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-153'
  recorded_at: '2026-08-25T17:42:07.000Z'
id: FACT-status-component-groups-maximum-count
type: fact
---
At most 1000 component groups can be created per site on the status page.

Modeled from REQ-status-component-groups-maximum-count so the claim can be checked for contradictions.
