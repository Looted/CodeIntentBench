---
title: support.ticket_tags limit_configurable = False
status: active
fact_kind: property_value
subject_key: support.ticket_tags
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9B85215C347D6099
claim_text: the limit is fixed
text_ref: REQ-support-ticket-tags-maximum-count
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-105'
  recorded_at: '2026-07-12T16:32:49.000Z'
id: FACT-support-ticket-tags-limit-configurable
type: fact
---
The limit is fixed.

Modeled from REQ-support-ticket-tags-maximum-count so the claim can be checked for contradictions.
