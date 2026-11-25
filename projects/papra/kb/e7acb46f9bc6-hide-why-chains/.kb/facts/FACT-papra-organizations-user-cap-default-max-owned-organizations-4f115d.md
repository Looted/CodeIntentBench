---
title: organizations.user_cap default_max_owned_organizations = 3
status: deprecated
fact_kind: property_value
subject_key: organizations.user_cap
property_key: default_max_owned_organizations
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-75EAFA2B3B07AA34
claim_text: A user can own at most 3 organizations
text_ref: REQ-papra-three-organizations-per-user
tags:
  - lane:strict
  - knowledge-source:papra-server-decisions
origin:
  kind: agent
  ref: 'Papra server decision log: SRV-094'
  recorded_at: '2025-04-03T11:17:28.000Z'
id: FACT-papra-organizations-user-cap-default-max-owned-organizations-4f115d
type: fact
---
A user can own at most 3 organizations.

Modeled from REQ-papra-three-organizations-per-user so the claim can be checked for contradictions.
