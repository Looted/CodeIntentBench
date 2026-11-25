---
title: storage.build_endpoint_url in_virtual_hosted_style_the_bucket_is_prepended = True
status: active
fact_kind: property_value
subject_key: storage.build_endpoint_url
property_key: in_virtual_hosted_style_the_bucket_is_prepended
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-8C244E6083710A06
claim_text: In virtual-hosted style, the bucket is prepended to the regional host
text_ref: REQ-papra-storage-in-virtual-hosted-style-bucket-is-prepended
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1721'
  recorded_at: '2026-04-22T09:14:41.000Z'
id: FACT-papra-storage-build-endpoint-url-in-virtual-hosted-style-the-bucket-is-prepended
type: fact
---
In virtual-hosted style, the bucket is prepended to the regional host.

Modeled from REQ-papra-storage-in-virtual-hosted-style-bucket-is-prepended so the claim can be checked for contradictions.
