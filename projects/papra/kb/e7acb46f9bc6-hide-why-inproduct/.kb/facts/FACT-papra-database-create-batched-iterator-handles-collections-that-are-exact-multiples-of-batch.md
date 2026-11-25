---
title: database.create_batched_iterator handles_collections_that_are_exact_multiples_of_batch = True
status: active
fact_kind: property_value
subject_key: database.create_batched_iterator
property_key: handles_collections_that_are_exact_multiples_of_batch
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-BD3A817278998D82
claim_text: Handles collections that are exact multiples of batch size
text_ref: REQ-papra-database-handles-collections-that-are-exact-multiples-of
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-532'
  recorded_at: '2025-02-25T10:36:56.000Z'
id: FACT-papra-database-create-batched-iterator-handles-collections-that-are-exact-multiples-of-batch
type: fact
---
Handles collections that are exact multiples of batch size.

Modeled from REQ-papra-database-handles-collections-that-are-exact-multiples-of so the claim can be checked for contradictions.
