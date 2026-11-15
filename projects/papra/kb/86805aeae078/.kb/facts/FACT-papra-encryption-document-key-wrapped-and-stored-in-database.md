---
title: encryption.document_key wrapped_and_stored_in_database = True
status: active
fact_kind: property_value
subject_key: encryption.document_key
property_key: wrapped_and_stored_in_database
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-E785C1898DC34DC8
claim_text: that key is wrapped with the configured key encryption key and stored in the database, separately from the encrypted file
text_ref: REQ-with-encryption-enabled-each-document-is-e-3A4DEA2F
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 03-guides/05-setup-document-encryption.mdx#dek'
  recorded_at: '2026-11-15T21:51:38.398Z'
id: FACT-papra-encryption-document-key-wrapped-and-stored-in-database
type: fact
---
That key is wrapped with the configured key encryption key and stored in the database, separately from the encrypted file.

Modeled from REQ-with-encryption-enabled-each-document-is-e-3A4DEA2F so the claim can be checked for contradictions.
