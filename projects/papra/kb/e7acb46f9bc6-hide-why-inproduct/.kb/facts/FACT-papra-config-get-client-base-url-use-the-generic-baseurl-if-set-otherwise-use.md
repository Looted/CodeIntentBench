---
title: config.get_client_base_url use_the_generic_baseurl_if_set_otherwise_use = True
status: active
fact_kind: property_value
subject_key: config.get_client_base_url
property_key: use_the_generic_baseurl_if_set_otherwise_use
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-372D186AB5DAC2B5
claim_text: Use the generic baseUrl if set, otherwise use the client baseUrl
text_ref: REQ-papra-config-use-generic-baseurl-if-set-otherwise-use
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-587'
  recorded_at: '2026-02-12T14:02:16.000Z'
id: FACT-papra-config-get-client-base-url-use-the-generic-baseurl-if-set-otherwise-use
type: fact
---
Use the generic baseUrl if set, otherwise use the client baseUrl.

Modeled from REQ-papra-config-use-generic-baseurl-if-set-otherwise-use so the claim can be checked for contradictions.
