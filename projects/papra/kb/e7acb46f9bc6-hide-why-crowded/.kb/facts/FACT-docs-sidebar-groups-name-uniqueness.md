---
title: docs.sidebar_groups name_uniqueness = unique ignoring letter case
status: active
fact_kind: property_value
subject_key: docs.sidebar_groups
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique ignoring letter case
claim_key: CLAIM-62036F329464BD8E
claim_text: Sidebar groups on the documentation site are unique per documentation version regardless of letter case
text_ref: REQ-docs-sidebar-groups-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-164'
  recorded_at: '2025-05-26T17:04:36.000Z'
id: FACT-docs-sidebar-groups-name-uniqueness
type: fact
---
Sidebar groups on the documentation site are unique per documentation version regardless of letter case.

Modeled from REQ-docs-sidebar-groups-unique-ignoring-case so the claim can be checked for contradictions.
