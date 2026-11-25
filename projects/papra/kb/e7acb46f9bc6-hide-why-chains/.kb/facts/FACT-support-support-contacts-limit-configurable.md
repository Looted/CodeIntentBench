---
title: support.support_contacts limit_configurable = True
status: active
fact_kind: property_value
subject_key: support.support_contacts
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-F9F100316FFC81D2
claim_text: the limit is configured per deployment and 10 is the default
text_ref: REQ-support-support-contacts-maximum-count
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-293'
  recorded_at: '2026-08-17T09:57:01.000Z'
id: FACT-support-support-contacts-limit-configurable
type: fact
---
The limit is configured per deployment and 10 is the default.

Modeled from REQ-support-support-contacts-maximum-count so the claim can be checked for contradictions.
