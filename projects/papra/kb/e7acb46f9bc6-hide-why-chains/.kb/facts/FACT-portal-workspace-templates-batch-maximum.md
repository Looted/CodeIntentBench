---
title: portal.workspace_templates batch_maximum = 25
status: active
fact_kind: property_value
subject_key: portal.workspace_templates
property_key: batch_maximum
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-74CC5509FE682EFE
claim_text: At most 25 workspace templates can be added or removed in one request in the partner portal
text_ref: REQ-portal-workspace-templates-batch-size
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-160'
  recorded_at: '2025-11-01T08:32:12.000Z'
id: FACT-portal-workspace-templates-batch-maximum
type: fact
---
At most 25 workspace templates can be added or removed in one request in the partner portal.

Modeled from REQ-portal-workspace-templates-batch-size so the claim can be checked for contradictions.
