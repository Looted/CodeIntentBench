---
title: encryption.document_key algorithm_per_document = aes-256-gcm_random_256_bit
status: active
fact_kind: property_value
subject_key: encryption.document_key
property_key: algorithm_per_document
operator: eq
value_type: string
value_string: aes-256-gcm_random_256_bit
claim_key: CLAIM-C77DAD2ED57BBA88
claim_text: With encryption enabled each document is encrypted with its own random 256-bit key (AES-256-GCM)
text_ref: REQ-with-encryption-enabled-each-document-is-e-3A4DEA2F
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 03-guides/05-setup-document-encryption.mdx#dek'
  recorded_at: '2026-11-15T21:46:51.933Z'
id: FACT-papra-encryption-document-key-algorithm-per-document
type: fact
---
With encryption enabled each document is encrypted with its own random 256-bit key (AES-256-GCM).

Modeled from REQ-with-encryption-enabled-each-document-is-e-3A4DEA2F so the claim can be checked for contradictions.
