---
title: backoffice.customer_tags name_uniqueness = unique ignoring letter case
status: active
fact_kind: property_value
subject_key: backoffice.customer_tags
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique ignoring letter case
claim_key: CLAIM-30E796899DA23EFC
claim_text: Customer tags in the Papra Cloud back office are unique per support team regardless of letter case
text_ref: REQ-backoffice-customer-tags-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-102'
  recorded_at: '2026-06-05T13:57:22.000Z'
id: FACT-backoffice-customer-tags-name-uniqueness
type: fact
---
Customer tags in the Papra Cloud back office are unique per support team regardless of letter case.

Modeled from REQ-backoffice-customer-tags-unique-ignoring-case so the claim can be checked for contradictions.
