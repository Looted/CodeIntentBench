---
title: status.incident_labels maximum_count = 300
status: active
fact_kind: property_value
subject_key: status.incident_labels
property_key: maximum_count
operator: eq
value_type: int
value_int: 300
claim_key: CLAIM-719306FDAE5C6E83
claim_text: A site can hold at most 300 incident labels on the status page
text_ref: REQ-status-incident-labels-maximum-count
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-116'
  recorded_at: '2026-08-13T16:20:42.000Z'
id: FACT-status-incident-labels-maximum-count
type: fact
---
A site can hold at most 300 incident labels on the status page.

Modeled from REQ-status-incident-labels-maximum-count so the claim can be checked for contradictions.
