---
title: support.support_contacts maximum_count = 10
status: active
fact_kind: property_value
subject_key: support.support_contacts
property_key: maximum_count
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-089E22E796CFA478
claim_text: An organization can own at most 10 support contacts in the support portal
text_ref: REQ-support-support-contacts-maximum-count
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-293'
  recorded_at: '2026-08-17T09:57:01.000Z'
id: FACT-support-support-contacts-maximum-count
type: fact
---
An organization can own at most 10 support contacts in the support portal.

Modeled from REQ-support-support-contacts-maximum-count so the claim can be checked for contradictions.
