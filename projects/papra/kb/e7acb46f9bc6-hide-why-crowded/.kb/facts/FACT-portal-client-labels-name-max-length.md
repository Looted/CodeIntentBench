---
title: portal.client_labels name_max_length = 100
status: active
fact_kind: property_value
subject_key: portal.client_labels
property_key: name_max_length
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-0AFA75F37DAB5294
claim_text: Client label names in the partner portal are limited to 100 characters
text_ref: REQ-portal-client-labels-name-length
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-121'
  recorded_at: '2025-03-19T10:46:41.000Z'
id: FACT-portal-client-labels-name-max-length
type: fact
---
Client label names in the partner portal are limited to 100 characters.

Modeled from REQ-portal-client-labels-name-length so the claim can be checked for contradictions.
