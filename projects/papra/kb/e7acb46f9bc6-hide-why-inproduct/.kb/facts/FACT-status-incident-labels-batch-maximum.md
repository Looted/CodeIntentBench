---
title: status.incident_labels batch_maximum = 5
status: active
fact_kind: property_value
subject_key: status.incident_labels
property_key: batch_maximum
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-B53B24720FFD65DB
claim_text: At most 5 incident labels can be added or removed in one request on the status page
text_ref: REQ-status-incident-labels-batch-size
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-140'
  recorded_at: '2026-02-21T08:10:33.000Z'
id: FACT-status-incident-labels-batch-maximum
type: fact
---
At most 5 incident labels can be added or removed in one request on the status page.

Modeled from REQ-status-incident-labels-batch-size so the claim can be checked for contradictions.
