---
title: status.incident_labels limit_configurable = False
status: active
fact_kind: property_value
subject_key: status.incident_labels
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9B85215C347D6099
claim_text: the limit is fixed
text_ref: REQ-status-incident-labels-maximum-count
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-116'
  recorded_at: '2026-08-13T16:20:42.000Z'
id: FACT-status-incident-labels-limit-configurable
type: fact
---
The limit is fixed.

Modeled from REQ-status-incident-labels-maximum-count so the claim can be checked for contradictions.
