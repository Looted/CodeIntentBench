---
title: api_keys.key route_access_requires = all_required_permissions_granted
status: active
fact_kind: property_value
subject_key: api_keys.key
property_key: route_access_requires
operator: eq
value_type: string
value_string: all_required_permissions_granted
claim_key: CLAIM-19F9B9BDE09DB9C1
claim_text: An API key can only call routes whose required permissions are all explicitly granted to the key
text_ref: REQ-papra-api-key-scope-and-expiry
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): app/auth/auth.models.test.ts#api-key-scope-and-expiry'
  recorded_at: '2026-11-15T23:00:34.893Z'
id: FACT-papra-api-keys-key-route-access-requires
type: fact
---
An API key can only call routes whose required permissions are all explicitly granted to the key.

Modeled from REQ-papra-api-key-scope-and-expiry so the claim can be checked for contradictions.
