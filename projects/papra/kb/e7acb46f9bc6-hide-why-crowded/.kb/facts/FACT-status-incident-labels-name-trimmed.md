---
title: status.incident_labels name_trimmed = True
status: active
fact_kind: property_value
subject_key: status.incident_labels
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-52ABB18DA897C1E8
claim_text: Incident label names on the status page are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-status-incident-labels-names-trimmed
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-119'
  recorded_at: '2025-03-01T11:49:35.000Z'
id: FACT-status-incident-labels-name-trimmed
type: fact
---
Incident label names on the status page are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-status-incident-labels-names-trimmed so the claim can be checked for contradictions.
