---
title: status.incident_labels empty_name_refused = True
status: active
fact_kind: property_value
subject_key: status.incident_labels
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-status-incident-labels-names-trimmed
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-119'
  recorded_at: '2025-03-01T11:49:35.000Z'
id: FACT-status-incident-labels-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-status-incident-labels-names-trimmed so the claim can be checked for contradictions.
