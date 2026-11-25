---
title: docs.sidebar_groups delete_in_use = refused
status: active
fact_kind: property_value
subject_key: docs.sidebar_groups
property_key: delete_in_use
operator: eq
value_type: string
value_string: refused
claim_key: CLAIM-5BF69823F55C617C
claim_text: Deleting a sidebar group on the documentation site that is still in use is refused until nothing refers to it
text_ref: REQ-docs-sidebar-groups-delete-in-use
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-185'
  recorded_at: '2026-02-07T13:24:09.000Z'
id: FACT-docs-sidebar-groups-delete-in-use
type: fact
---
Deleting a sidebar group on the documentation site that is still in use is refused until nothing refers to it.

Modeled from REQ-docs-sidebar-groups-delete-in-use so the claim can be checked for contradictions.
