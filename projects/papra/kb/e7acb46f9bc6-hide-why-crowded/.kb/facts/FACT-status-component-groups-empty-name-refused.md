---
title: status.component_groups empty_name_refused = True
status: active
fact_kind: property_value
subject_key: status.component_groups
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-status-component-groups-names-trimmed
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-163'
  recorded_at: '2025-04-10T08:01:35.000Z'
id: FACT-status-component-groups-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-status-component-groups-names-trimmed so the claim can be checked for contradictions.
