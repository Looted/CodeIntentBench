---
title: backoffice.sandbox_organizations limit_configurable = True
status: active
fact_kind: property_value
subject_key: backoffice.sandbox_organizations
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-646750DD567C0C73
claim_text: the limit is configured per deployment and 2 is the default
text_ref: REQ-backoffice-sandbox-organizations-maximum-count
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-464'
  recorded_at: '2025-05-10T08:41:03.000Z'
id: FACT-backoffice-sandbox-organizations-limit-configurable
type: fact
---
The limit is configured per deployment and 2 is the default.

Modeled from REQ-backoffice-sandbox-organizations-maximum-count so the claim can be checked for contradictions.
