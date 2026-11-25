---
title: organizations.user_cap per_user_override_by_instance_admin = False
status: deprecated
fact_kind: property_value
subject_key: organizations.user_cap
property_key: per_user_override_by_instance_admin
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-DBD226C4C76F02B0
claim_text: An instance admin cannot change the limit for an individual user
text_ref: REQ-papra-three-organizations-per-user
tags:
  - lane:strict
  - knowledge-source:papra-server-decisions
origin:
  kind: agent
  ref: 'Papra server decision log: SRV-094'
  recorded_at: '2025-04-03T11:17:28.000Z'
id: FACT-papra-organizations-user-cap-per-user-override-by-instance-admin-4f115d
type: fact
---
An instance admin cannot change the limit for an individual user.

Modeled from REQ-papra-three-organizations-per-user so the claim can be checked for contradictions.
