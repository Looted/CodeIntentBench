---
title: support.support_contacts name_max_length = 100
status: active
fact_kind: property_value
subject_key: support.support_contacts
property_key: name_max_length
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-A7BA576B753A93F8
claim_text: Support contact names in the support portal are between 3 and 100 characters long
text_ref: REQ-support-support-contacts-name-length
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-307'
  recorded_at: '2026-02-09T12:05:24.000Z'
id: FACT-support-support-contacts-name-max-length
type: fact
---
Support contact names in the support portal are between 3 and 100 characters long.

Modeled from REQ-support-support-contacts-name-length so the claim can be checked for contradictions.
