---
title: portal.client_labels delete_in_use = detached
status: active
fact_kind: property_value
subject_key: portal.client_labels
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-09174C74DC14FC9E
claim_text: Deleting a client label in the partner portal removes it from everything that uses it, without confirmation for each use
text_ref: REQ-portal-client-labels-delete-in-use
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-133'
  recorded_at: '2025-05-20T08:30:40.000Z'
id: FACT-portal-client-labels-delete-in-use
type: fact
---
Deleting a client label in the partner portal removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-portal-client-labels-delete-in-use so the claim can be checked for contradictions.
