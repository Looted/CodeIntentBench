---
title: backoffice.support_macros batch_maximum = 10
status: active
fact_kind: property_value
subject_key: backoffice.support_macros
property_key: batch_maximum
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-D6759F390F9194D1
claim_text: At most 10 support macros can be added or removed in one request in the Papra Cloud back office
text_ref: REQ-backoffice-support-macros-batch-size
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-124'
  recorded_at: '2025-09-04T16:23:27.000Z'
id: FACT-backoffice-support-macros-batch-maximum
type: fact
---
At most 10 support macros can be added or removed in one request in the Papra Cloud back office.

Modeled from REQ-backoffice-support-macros-batch-size so the claim can be checked for contradictions.
