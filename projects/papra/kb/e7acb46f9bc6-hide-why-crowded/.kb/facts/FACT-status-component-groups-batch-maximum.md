---
title: status.component_groups batch_maximum = 20
status: active
fact_kind: property_value
subject_key: status.component_groups
property_key: batch_maximum
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-D798231B1F3BFE4C
claim_text: At most 20 component groups can be added or removed in one request on the status page
text_ref: REQ-status-component-groups-batch-size
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-176'
  recorded_at: '2026-02-17T16:01:05.000Z'
id: FACT-status-component-groups-batch-maximum
type: fact
---
At most 20 component groups can be added or removed in one request on the status page.

Modeled from REQ-status-component-groups-batch-size so the claim can be checked for contradictions.
