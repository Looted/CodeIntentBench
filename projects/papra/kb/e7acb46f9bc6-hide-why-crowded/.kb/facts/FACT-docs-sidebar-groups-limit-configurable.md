---
title: docs.sidebar_groups limit_configurable = True
status: active
fact_kind: property_value
subject_key: docs.sidebar_groups
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-73970E3A150076DB
claim_text: the limit is configurable and 25 is the default
text_ref: REQ-docs-sidebar-groups-maximum-count
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-166'
  recorded_at: '2026-09-02T08:26:54.000Z'
id: FACT-docs-sidebar-groups-limit-configurable
type: fact
---
The limit is configurable and 25 is the default.

Modeled from REQ-docs-sidebar-groups-maximum-count so the claim can be checked for contradictions.
