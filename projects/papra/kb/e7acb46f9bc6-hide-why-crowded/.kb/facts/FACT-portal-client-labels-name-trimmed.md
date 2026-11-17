---
title: portal.client_labels name_trimmed = True
status: active
fact_kind: property_value
subject_key: portal.client_labels
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-E99CAAF7839E9573
claim_text: Client label names in the partner portal are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-portal-client-labels-names-trimmed
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-124'
  recorded_at: '2026-03-03T13:29:22.000Z'
id: FACT-portal-client-labels-name-trimmed
type: fact
---
Client label names in the partner portal are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-portal-client-labels-names-trimmed so the claim can be checked for contradictions.
