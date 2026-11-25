---
title: portal.client_labels empty_name_refused = True
status: active
fact_kind: property_value
subject_key: portal.client_labels
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-portal-client-labels-names-trimmed
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-124'
  recorded_at: '2026-03-03T13:29:22.000Z'
id: FACT-portal-client-labels-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-portal-client-labels-names-trimmed so the claim can be checked for contradictions.
