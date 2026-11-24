---
title: organizations.user_cap counted_organizations = owned_only
status: active
fact_kind: property_value
subject_key: organizations.user_cap
property_key: counted_organizations
operator: eq
value_type: string
value_string: owned_only
claim_key: CLAIM-6BD01E78BEC21C80
claim_text: Only organizations the user owns count toward the cap
text_ref: REQ-papra-user-owned-organization-cap
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#user-owned-organization-cap'
  recorded_at: '2026-11-16T10:30:33.890Z'
id: FACT-papra-organizations-user-cap-counted-organizations
type: fact
---
Only organizations the user owns count toward the cap.

Modeled from REQ-papra-user-owned-organization-cap so the claim can be checked for contradictions.
