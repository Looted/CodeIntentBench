---
title: backoffice.customer_tags duplicate_error = customer-tag-already-exists
status: active
fact_kind: property_value
subject_key: backoffice.customer_tags
property_key: duplicate_error
operator: eq
value_type: string
value_string: customer-tag-already-exists
claim_key: CLAIM-130B8BE033174E4D
claim_text: a duplicate is reported as customer-tag-already-exists
text_ref: REQ-backoffice-customer-tags-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-102'
  recorded_at: '2026-06-05T13:57:22.000Z'
id: FACT-backoffice-customer-tags-duplicate-error
type: fact
---
A duplicate is reported as customer-tag-already-exists.

Modeled from REQ-backoffice-customer-tags-unique-ignoring-case so the claim can be checked for contradictions.
