---
title: backoffice.organizations maximum_count = 50
status: active
fact_kind: property_value
subject_key: backoffice.organizations
property_key: maximum_count
operator: eq
value_type: int
value_int: 50
claim_key: CLAIM-9B2E08FD0D2B82C0
claim_text: A billing account can own at most 50 organizations in the Papra Cloud back office
text_ref: REQ-backoffice-organizations-maximum-count
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-228'
  recorded_at: '2025-03-13T13:42:46.000Z'
id: FACT-backoffice-organizations-maximum-count
type: fact
---
A billing account can own at most 50 organizations in the Papra Cloud back office.

Modeled from REQ-backoffice-organizations-maximum-count so the claim can be checked for contradictions.
