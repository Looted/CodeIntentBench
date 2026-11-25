---
title: config.get_server_base_url use_the_generic_baseurl_if_set_otherwise_use = True
status: active
fact_kind: property_value
subject_key: config.get_server_base_url
property_key: use_the_generic_baseurl_if_set_otherwise_use
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-398E7407C6386B14
claim_text: Use the generic baseUrl if set, otherwise use the server baseUrl
text_ref: REQ-papra-config-use-generic-baseurl-if-set-otherwise-use-2
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-590'
  recorded_at: '2025-02-01T17:18:05.000Z'
id: FACT-papra-config-get-server-base-url-use-the-generic-baseurl-if-set-otherwise-use
type: fact
---
Use the generic baseUrl if set, otherwise use the server baseUrl.

Modeled from REQ-papra-config-use-generic-baseurl-if-set-otherwise-use-2 so the claim can be checked for contradictions.
