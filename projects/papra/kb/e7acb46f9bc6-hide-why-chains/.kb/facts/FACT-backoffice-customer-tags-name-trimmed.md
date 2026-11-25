---
title: backoffice.customer_tags name_trimmed = True
status: active
fact_kind: property_value
subject_key: backoffice.customer_tags
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A54C4E6EB3AAD66E
claim_text: Customer tag names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-backoffice-customer-tags-names-trimmed
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-116'
  recorded_at: '2026-03-27T09:47:13.000Z'
id: FACT-backoffice-customer-tags-name-trimmed
type: fact
---
Customer tag names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-backoffice-customer-tags-names-trimmed so the claim can be checked for contradictions.
