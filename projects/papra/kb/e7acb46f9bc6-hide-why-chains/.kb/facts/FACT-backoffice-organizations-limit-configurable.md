---
title: backoffice.organizations limit_configurable = True
status: active
fact_kind: property_value
subject_key: backoffice.organizations
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-441789201020C56C
claim_text: the limit is configured per deployment and 50 is the default
text_ref: REQ-backoffice-organizations-maximum-count
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-436'
  recorded_at: '2025-03-13T13:42:46.000Z'
id: FACT-backoffice-organizations-limit-configurable
type: fact
---
The limit is configured per deployment and 50 is the default.

Modeled from REQ-backoffice-organizations-maximum-count so the claim can be checked for contradictions.
