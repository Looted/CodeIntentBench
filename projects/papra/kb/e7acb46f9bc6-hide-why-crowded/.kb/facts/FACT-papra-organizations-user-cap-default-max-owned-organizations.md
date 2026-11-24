---
title: organizations.user_cap default_max_owned_organizations = 10
status: active
fact_kind: property_value
subject_key: organizations.user_cap
property_key: default_max_owned_organizations
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-A2BAF1E16FA79304
claim_text: A user can own at most a configured number of organizations (default 10)
text_ref: REQ-papra-user-owned-organization-cap
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#user-owned-organization-cap'
  recorded_at: '2026-11-16T13:16:31.075Z'
id: FACT-papra-organizations-user-cap-default-max-owned-organizations
type: fact
---
A user can own at most a configured number of organizations (default 10).

Modeled from REQ-papra-user-owned-organization-cap so the claim can be checked for contradictions.
