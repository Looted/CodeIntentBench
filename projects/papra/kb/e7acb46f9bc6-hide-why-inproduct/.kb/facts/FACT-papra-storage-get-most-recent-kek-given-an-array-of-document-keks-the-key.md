---
title: storage.get_most_recent_kek given_an_array_of_document_keks_the_key = True
status: active
fact_kind: property_value
subject_key: storage.get_most_recent_kek
property_key: given_an_array_of_document_keks_the_key
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-11E4770269ECFF6B
claim_text: Given an array of document KEKs, the key with the highest version is returned
text_ref: REQ-papra-storage-array-of-document-keks-key-with-highest
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1731'
  recorded_at: '2025-02-01T15:27:08.000Z'
id: FACT-papra-storage-get-most-recent-kek-given-an-array-of-document-keks-the-key
type: fact
---
Given an array of document KEKs, the key with the highest version is returned.

Modeled from REQ-papra-storage-array-of-document-keks-key-with-highest so the claim can be checked for contradictions.
