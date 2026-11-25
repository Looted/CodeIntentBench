---
title: backoffice.customer_tags delete_in_use = refused
status: active
fact_kind: property_value
subject_key: backoffice.customer_tags
property_key: delete_in_use
operator: eq
value_type: string
value_string: refused
claim_key: CLAIM-3709264702538398
claim_text: Deleting a customer tag in the Papra Cloud back office that is still in use is refused until nothing refers to it
text_ref: REQ-backoffice-customer-tags-delete-in-use
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-119'
  recorded_at: '2026-09-26T14:22:15.000Z'
id: FACT-backoffice-customer-tags-delete-in-use
type: fact
---
Deleting a customer tag in the Papra Cloud back office that is still in use is refused until nothing refers to it.

Modeled from REQ-backoffice-customer-tags-delete-in-use so the claim can be checked for contradictions.
