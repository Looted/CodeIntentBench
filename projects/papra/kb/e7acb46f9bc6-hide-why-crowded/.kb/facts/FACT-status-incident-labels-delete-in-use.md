---
title: status.incident_labels delete_in_use = detached
status: active
fact_kind: property_value
subject_key: status.incident_labels
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-5F75658E22737C46
claim_text: Deleting an incident label on the status page removes it from everything that uses it, without confirmation for each use
text_ref: REQ-status-incident-labels-delete-in-use
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-132'
  recorded_at: '2025-07-15T15:35:10.000Z'
id: FACT-status-incident-labels-delete-in-use
type: fact
---
Deleting an incident label on the status page removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-status-incident-labels-delete-in-use so the claim can be checked for contradictions.
