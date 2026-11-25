---
title: backoffice.staff_teams limit_configurable = True
status: active
fact_kind: property_value
subject_key: backoffice.staff_teams
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-EE3A84A4255D9DE5
claim_text: the limit is configured per deployment and 5 is the default
text_ref: REQ-backoffice-staff-teams-maximum-count
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-514'
  recorded_at: '2025-06-22T09:53:37.000Z'
id: FACT-backoffice-staff-teams-limit-configurable
type: fact
---
The limit is configured per deployment and 5 is the default.

Modeled from REQ-backoffice-staff-teams-maximum-count so the claim can be checked for contradictions.
