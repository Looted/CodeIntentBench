---
title: backoffice.organization_labels name_max_length = 32
status: active
fact_kind: property_value
subject_key: backoffice.organization_labels
property_key: name_max_length
operator: eq
value_type: int
value_int: 32
claim_key: CLAIM-A69D814BBA6886E0
claim_text: Organization label names in the Papra Cloud back office are limited to 32 characters
text_ref: REQ-backoffice-organization-labels-name-length
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-192'
  recorded_at: '2025-07-03T14:03:27.000Z'
id: FACT-backoffice-organization-labels-name-max-length
type: fact
---
Organization label names in the Papra Cloud back office are limited to 32 characters.

Modeled from REQ-backoffice-organization-labels-name-length so the claim can be checked for contradictions.
