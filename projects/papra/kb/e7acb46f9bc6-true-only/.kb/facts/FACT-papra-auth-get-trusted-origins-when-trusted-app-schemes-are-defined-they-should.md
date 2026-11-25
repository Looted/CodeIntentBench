---
title: auth.get_trusted_origins when_trusted_app_schemes_are_defined_they_should = True
status: active
fact_kind: property_value
subject_key: auth.get_trusted_origins
property_key: when_trusted_app_schemes_are_defined_they_should
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-6568A1FFAFA573FC
claim_text: When trusted app schemes are defined, they should be included in the trusted origins
text_ref: REQ-papra-auth-trusted-app-schemes-are-defined-they-should
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-514'
  recorded_at: '2026-04-07T13:51:56.000Z'
id: FACT-papra-auth-get-trusted-origins-when-trusted-app-schemes-are-defined-they-should
type: fact
---
When trusted app schemes are defined, they should be included in the trusted origins.

Modeled from REQ-papra-auth-trusted-app-schemes-are-defined-they-should so the claim can be checked for contradictions.
