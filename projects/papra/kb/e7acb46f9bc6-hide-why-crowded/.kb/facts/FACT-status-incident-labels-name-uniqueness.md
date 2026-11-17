---
title: status.incident_labels name_uniqueness = unique ignoring letter case
status: active
fact_kind: property_value
subject_key: status.incident_labels
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique ignoring letter case
claim_key: CLAIM-FBA6BCCF55FEC054
claim_text: Incident labels on the status page are unique per site regardless of letter case
text_ref: REQ-status-incident-labels-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-108'
  recorded_at: '2026-09-10T13:32:52.000Z'
id: FACT-status-incident-labels-name-uniqueness
type: fact
---
Incident labels on the status page are unique per site regardless of letter case.

Modeled from REQ-status-incident-labels-unique-ignoring-case so the claim can be checked for contradictions.
