---
title: api_keys.key expires_without_expiry_date = False
status: active
fact_kind: property_value
subject_key: api_keys.key
property_key: expires_without_expiry_date
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-3FA758643240966D
claim_text: a key with no expiry never expires
text_ref: REQ-papra-api-key-scope-and-expiry
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): app/auth/auth.models.test.ts#api-key-scope-and-expiry'
  recorded_at: '2026-11-15T22:57:34.873Z'
id: FACT-papra-api-keys-key-expires-without-expiry-date
type: fact
---
A key with no expiry never expires.

Modeled from REQ-papra-api-key-scope-and-expiry so the claim can be checked for contradictions.
