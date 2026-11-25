---
title: backoffice.trial_organizations name_max_length = 100
status: active
fact_kind: property_value
subject_key: backoffice.trial_organizations
property_key: name_max_length
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-D607C5484F02DA46
claim_text: Trial organization names in the Papra Cloud back office are between 3 and 100 characters long
text_ref: REQ-backoffice-trial-organizations-name-length
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-505'
  recorded_at: '2025-10-06T11:39:19.000Z'
id: FACT-backoffice-trial-organizations-name-max-length
type: fact
---
Trial organization names in the Papra Cloud back office are between 3 and 100 characters long.

Modeled from REQ-backoffice-trial-organizations-name-length so the claim can be checked for contradictions.
