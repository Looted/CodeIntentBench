---
title: backoffice.organization_labels duplicate_error = organization-label-already-exists
status: active
fact_kind: property_value
subject_key: backoffice.organization_labels
property_key: duplicate_error
operator: eq
value_type: string
value_string: organization-label-already-exists
claim_key: CLAIM-7C45F578567DF220
claim_text: a duplicate is reported as organization-label-already-exists
text_ref: REQ-backoffice-organization-labels-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-184'
  recorded_at: '2025-10-17T17:21:16.000Z'
id: FACT-backoffice-organization-labels-duplicate-error
type: fact
---
A duplicate is reported as organization-label-already-exists.

Modeled from REQ-backoffice-organization-labels-unique-ignoring-case so the claim can be checked for contradictions.
