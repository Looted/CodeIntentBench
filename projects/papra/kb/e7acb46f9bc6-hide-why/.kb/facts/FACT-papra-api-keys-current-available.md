---
title: api_keys.current available = True
status: active
fact_kind: property_value
subject_key: api_keys.current
property_key: available
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-39475565A68A6DD7
claim_text: GET /api/api-keys/current describes the API key used for the request
text_ref: REQ-papra-current-api-key-endpoint
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.0.0 changelog, #718: Added api endpoint to check current API key (GET /api/api-ke'
  recorded_at: '2026-11-16T13:22:39.730Z'
id: FACT-papra-api-keys-current-available
type: fact
---
GET /api/api-keys/current describes the API key used for the request.

Modeled from REQ-papra-current-api-key-endpoint so the claim can be checked for contradictions.
