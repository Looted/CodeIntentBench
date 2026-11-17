---
title: backoffice.trial_organizations limit_configurable = True
status: active
fact_kind: property_value
subject_key: backoffice.trial_organizations
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-646750DD567C0C73
claim_text: the limit is configured per deployment and 2 is the default
text_ref: REQ-backoffice-trial-organizations-maximum-count
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-491'
  recorded_at: '2026-09-08T10:27:29.000Z'
id: FACT-backoffice-trial-organizations-limit-configurable
type: fact
---
The limit is configured per deployment and 2 is the default.

Modeled from REQ-backoffice-trial-organizations-maximum-count so the claim can be checked for contradictions.
