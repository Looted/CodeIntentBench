---
title: status.incident_labels name_max_length = 48
status: active
fact_kind: property_value
subject_key: status.incident_labels
property_key: name_max_length
operator: eq
value_type: int
value_int: 48
claim_key: CLAIM-BC563D4B6F005BC5
claim_text: Incident label names on the status page are limited to 48 characters
text_ref: REQ-status-incident-labels-name-length
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-117'
  recorded_at: '2025-10-22T15:41:04.000Z'
id: FACT-status-incident-labels-name-max-length
type: fact
---
Incident label names on the status page are limited to 48 characters.

Modeled from REQ-status-incident-labels-name-length so the claim can be checked for contradictions.
