---
title: storage.build_endpoint_url a_trailing_slash_on_the_endpoint_does_not = True
status: active
fact_kind: property_value
subject_key: storage.build_endpoint_url
property_key: a_trailing_slash_on_the_endpoint_does_not
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0B4A67C7D5171271
claim_text: A trailing slash on the endpoint does not produce a double slash in path-style
text_ref: REQ-papra-storage-trailing-slash-on-endpoint-does-not-produce
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1711'
  recorded_at: '2025-04-11T15:22:39.000Z'
id: FACT-papra-storage-build-endpoint-url-a-trailing-slash-on-the-endpoint-does-not
type: fact
---
A trailing slash on the endpoint does not produce a double slash in path-style.

Modeled from REQ-papra-storage-trailing-slash-on-endpoint-does-not-produce so the claim can be checked for contradictions.
