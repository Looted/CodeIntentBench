---
title: backoffice.organization_labels limit_configurable = True
status: active
fact_kind: property_value
subject_key: backoffice.organization_labels
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-73970E3A150076DB
claim_text: the limit is configurable and 25 is the default
text_ref: REQ-backoffice-organization-labels-maximum-count
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-187'
  recorded_at: '2026-07-03T16:27:08.000Z'
id: FACT-backoffice-organization-labels-limit-configurable
type: fact
---
The limit is configurable and 25 is the default.

Modeled from REQ-backoffice-organization-labels-maximum-count so the claim can be checked for contradictions.
