---
title: storage.build_endpoint_url an_existing_path_prefix_on_the_endpoint_is = True
status: active
fact_kind: property_value
subject_key: storage.build_endpoint_url
property_key: an_existing_path_prefix_on_the_endpoint_is
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-37AEA61682ADB016
claim_text: An existing path prefix on the endpoint is kept, with the bucket appended after it
text_ref: REQ-papra-storage-existing-path-prefix-on-endpoint-is-kept
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1715'
  recorded_at: '2025-03-19T17:03:02.000Z'
id: FACT-papra-storage-build-endpoint-url-an-existing-path-prefix-on-the-endpoint-is
type: fact
---
An existing path prefix on the endpoint is kept, with the bucket appended after it.

Modeled from REQ-papra-storage-existing-path-prefix-on-endpoint-is-kept so the claim can be checked for contradictions.
