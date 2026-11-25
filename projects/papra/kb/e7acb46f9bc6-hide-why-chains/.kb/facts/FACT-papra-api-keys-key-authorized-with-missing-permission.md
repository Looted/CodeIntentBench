---
title: api_keys.key authorized_with_missing_permission = False
status: active
fact_kind: property_value
subject_key: api_keys.key
property_key: authorized_with_missing_permission
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-4ADF156CB91E4E55
claim_text: a key missing any one of them is unauthorized
text_ref: REQ-papra-api-key-scope-and-expiry
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): app/auth/auth.models.test.ts#api-key-scope-and-expiry'
  recorded_at: '2026-11-16T13:15:33.766Z'
id: FACT-papra-api-keys-key-authorized-with-missing-permission
type: fact
---
A key missing any one of them is unauthorized.

Modeled from REQ-papra-api-key-scope-and-expiry so the claim can be checked for contradictions.
