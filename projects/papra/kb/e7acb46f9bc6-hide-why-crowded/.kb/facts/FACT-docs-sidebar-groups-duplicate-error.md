---
title: docs.sidebar_groups duplicate_error = sidebar-group-already-exists
status: active
fact_kind: property_value
subject_key: docs.sidebar_groups
property_key: duplicate_error
operator: eq
value_type: string
value_string: sidebar-group-already-exists
claim_key: CLAIM-53BF42BCA169A9B6
claim_text: a duplicate is reported as sidebar-group-already-exists
text_ref: REQ-docs-sidebar-groups-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-164'
  recorded_at: '2025-05-26T17:04:36.000Z'
id: FACT-docs-sidebar-groups-duplicate-error
type: fact
---
A duplicate is reported as sidebar-group-already-exists.

Modeled from REQ-docs-sidebar-groups-unique-ignoring-case so the claim can be checked for contradictions.
