---
title: static_assets.is_api_route an_api_route_starts_with_api = True
status: active
fact_kind: property_value
subject_key: static_assets.is_api_route
property_key: an_api_route_starts_with_api
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-CD7D1638E764AC83
claim_text: An api route starts with /api/*
text_ref: REQ-papra-static-assets-api-route-starts-with-api
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-566'
  recorded_at: '2025-05-07T15:25:21.000Z'
id: FACT-papra-static-assets-is-api-route-an-api-route-starts-with-api
type: fact
---
An api route starts with /api/*.

Modeled from REQ-papra-static-assets-api-route-starts-with-api so the claim can be checked for contradictions.
