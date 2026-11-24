---
title: backoffice.support_macros limit_configurable = True
status: active
fact_kind: property_value
subject_key: backoffice.support_macros
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-2611853812894871
claim_text: the limit is configurable and 50 is the default
text_ref: REQ-backoffice-support-macros-maximum-count
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-136'
  recorded_at: '2026-07-23T12:19:05.000Z'
id: FACT-backoffice-support-macros-limit-configurable
type: fact
---
The limit is configurable and 50 is the default.

Modeled from REQ-backoffice-support-macros-maximum-count so the claim can be checked for contradictions.
