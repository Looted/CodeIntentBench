---
title: backoffice.organization_labels maximum_count = 25
status: active
fact_kind: property_value
subject_key: backoffice.organization_labels
property_key: maximum_count
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-46FBEF32AB01A0AF
claim_text: An instance can hold at most 25 organization labels in the Papra Cloud back office
text_ref: REQ-backoffice-organization-labels-maximum-count
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-187'
  recorded_at: '2026-07-03T16:27:08.000Z'
id: FACT-backoffice-organization-labels-maximum-count
type: fact
---
An instance can hold at most 25 organization labels in the Papra Cloud back office.

Modeled from REQ-backoffice-organization-labels-maximum-count so the claim can be checked for contradictions.
