---
title: auth.get_trusted_origins if_the_app_baseurl_is_set_it_should = True
status: active
fact_kind: property_value
subject_key: auth.get_trusted_origins
property_key: if_the_app_baseurl_is_set_it_should
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-6924D9382240BB44
claim_text: If the app baseUrl is set, it should be used instead of the client baseUrl
text_ref: REQ-papra-auth-app-baseurl-is-set-it-should-be
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-489'
  recorded_at: '2026-05-19T14:14:06.000Z'
id: FACT-papra-auth-get-trusted-origins-if-the-app-baseurl-is-set-it-should
type: fact
---
If the app baseUrl is set, it should be used instead of the client baseUrl.

Modeled from REQ-papra-auth-app-baseurl-is-set-it-should-be so the claim can be checked for contradictions.
