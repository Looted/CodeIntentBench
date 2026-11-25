---
title: docs.sidebar_groups maximum_count = 25
status: active
fact_kind: property_value
subject_key: docs.sidebar_groups
property_key: maximum_count
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-0AAE418C1A031F3F
claim_text: A documentation version can hold at most 25 sidebar groups on the documentation site
text_ref: REQ-docs-sidebar-groups-maximum-count
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-166'
  recorded_at: '2026-09-02T08:26:54.000Z'
id: FACT-docs-sidebar-groups-maximum-count
type: fact
---
A documentation version can hold at most 25 sidebar groups on the documentation site.

Modeled from REQ-docs-sidebar-groups-maximum-count so the claim can be checked for contradictions.
