---
title: status.incident_labels duplicate_error = incident-label-already-exists
status: active
fact_kind: property_value
subject_key: status.incident_labels
property_key: duplicate_error
operator: eq
value_type: string
value_string: incident-label-already-exists
claim_key: CLAIM-50675D5F34B05A0D
claim_text: a duplicate is reported as incident-label-already-exists
text_ref: REQ-status-incident-labels-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-108'
  recorded_at: '2026-09-10T13:32:52.000Z'
id: FACT-status-incident-labels-duplicate-error
type: fact
---
A duplicate is reported as incident-label-already-exists.

Modeled from REQ-status-incident-labels-unique-ignoring-case so the claim can be checked for contradictions.
