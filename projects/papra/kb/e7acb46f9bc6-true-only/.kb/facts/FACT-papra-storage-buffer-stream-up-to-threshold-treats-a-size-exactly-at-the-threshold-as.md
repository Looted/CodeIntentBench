---
title: storage.buffer_stream_up_to_threshold treats_a_size_exactly_at_the_threshold_as = True
status: active
fact_kind: property_value
subject_key: storage.buffer_stream_up_to_threshold
property_key: treats_a_size_exactly_at_the_threshold_as
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-95CCC1A0943C1867
claim_text: Treats a size exactly at the threshold as fully buffered
text_ref: REQ-papra-storage-treats-size-exactly-at-threshold-as-fully
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1729'
  recorded_at: '2025-11-04T10:33:22.000Z'
id: FACT-papra-storage-buffer-stream-up-to-threshold-treats-a-size-exactly-at-the-threshold-as
type: fact
---
Treats a size exactly at the threshold as fully buffered.

Modeled from REQ-papra-storage-treats-size-exactly-at-threshold-as-fully so the claim can be checked for contradictions.
