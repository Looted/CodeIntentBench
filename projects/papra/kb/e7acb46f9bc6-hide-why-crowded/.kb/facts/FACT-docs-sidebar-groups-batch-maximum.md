---
title: docs.sidebar_groups batch_maximum = 5
status: active
fact_kind: property_value
subject_key: docs.sidebar_groups
property_key: batch_maximum
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-5BB6942CAACAF5D3
claim_text: At most 5 sidebar groups can be added or removed in one request on the documentation site
text_ref: REQ-docs-sidebar-groups-batch-size
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-193'
  recorded_at: '2025-06-12T12:52:06.000Z'
id: FACT-docs-sidebar-groups-batch-maximum
type: fact
---
At most 5 sidebar groups can be added or removed in one request on the documentation site.

Modeled from REQ-docs-sidebar-groups-batch-size so the claim can be checked for contradictions.
