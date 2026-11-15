---
title: organizations.user_cap per_user_override_by_instance_admin = True
status: active
fact_kind: property_value
subject_key: organizations.user_cap
property_key: per_user_override_by_instance_admin
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A589213CFBBD8AAD
claim_text: an instance admin can raise or lower the cap for an individual user
text_ref: REQ-papra-user-owned-organization-cap
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#user-owned-organization-cap'
  recorded_at: '2026-11-15T22:58:26.775Z'
id: FACT-papra-organizations-user-cap-per-user-override-by-instance-admin
type: fact
---
An instance admin can raise or lower the cap for an individual user.

Modeled from REQ-papra-user-owned-organization-cap so the claim can be checked for contradictions.
