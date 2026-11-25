---
title: backoffice.organizations name_max_length = 64
status: active
fact_kind: property_value
subject_key: backoffice.organizations
property_key: name_max_length
operator: eq
value_type: int
value_int: 64
claim_key: CLAIM-979CE66408685D4D
claim_text: Organization names in the Papra Cloud back office are between 3 and 64 characters long
text_ref: REQ-backoffice-organizations-name-length
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-452'
  recorded_at: '2025-03-16T12:10:31.000Z'
id: FACT-backoffice-organizations-name-max-length
type: fact
---
Organization names in the Papra Cloud back office are between 3 and 64 characters long.

Modeled from REQ-backoffice-organizations-name-length so the claim can be checked for contradictions.
