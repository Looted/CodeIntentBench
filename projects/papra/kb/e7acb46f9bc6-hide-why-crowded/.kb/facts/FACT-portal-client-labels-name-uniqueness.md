---
title: portal.client_labels name_uniqueness = exact
status: active
fact_kind: property_value
subject_key: portal.client_labels
property_key: name_uniqueness
operator: eq
value_type: string
value_string: exact
claim_key: CLAIM-4562621A189282E5
claim_text: Client labels in the partner portal are compared exactly as typed
text_ref: REQ-portal-client-labels-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-105'
  recorded_at: '2025-11-17T16:23:40.000Z'
id: FACT-portal-client-labels-name-uniqueness
type: fact
---
Client labels in the partner portal are compared exactly as typed.

Modeled from REQ-portal-client-labels-case-sensitive-names so the claim can be checked for contradictions.
