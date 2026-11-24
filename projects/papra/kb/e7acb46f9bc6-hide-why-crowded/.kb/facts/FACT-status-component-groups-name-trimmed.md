---
title: status.component_groups name_trimmed = True
status: active
fact_kind: property_value
subject_key: status.component_groups
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-E7BF366B7B17158E
claim_text: Component group names on the status page are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-status-component-groups-names-trimmed
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-163'
  recorded_at: '2025-04-10T08:01:35.000Z'
id: FACT-status-component-groups-name-trimmed
type: fact
---
Component group names on the status page are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-status-component-groups-names-trimmed so the claim can be checked for contradictions.
