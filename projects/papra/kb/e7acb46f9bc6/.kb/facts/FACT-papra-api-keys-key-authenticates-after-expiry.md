---
title: api_keys.key authenticates_after_expiry = False
status: active
fact_kind: property_value
subject_key: api_keys.key
property_key: authenticates_after_expiry
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-A3F5D4723B15080E
claim_text: A key past its expiry date is treated as if it did not exist
text_ref: REQ-papra-api-key-scope-and-expiry
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): app/auth/auth.models.test.ts#api-key-scope-and-expiry'
  recorded_at: '2026-11-15T22:57:34.261Z'
id: FACT-papra-api-keys-key-authenticates-after-expiry
type: fact
---
A key past its expiry date is treated as if it did not exist.

Modeled from REQ-papra-api-key-scope-and-expiry so the claim can be checked for contradictions.
