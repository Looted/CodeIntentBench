---
title: backoffice.customer_tags empty_name_refused = True
status: active
fact_kind: property_value
subject_key: backoffice.customer_tags
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-backoffice-customer-tags-names-trimmed
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-116'
  recorded_at: '2026-03-27T09:47:13.000Z'
id: FACT-backoffice-customer-tags-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-backoffice-customer-tags-names-trimmed so the claim can be checked for contradictions.
