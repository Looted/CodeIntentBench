---
title: With encryption enabled each document is encrypted with its own random 256-bit key (AES-256-GCM); that key is wrapped with the configured key encryption key…
status: active
semantic_text: With encryption enabled each document is encrypted with its own random 256-bit key (AES-256-GCM); that key is wrapped with the configured key encryption key and stored in the database, separately from the encrypted file.
logic_claims:
  - CLAIM-C77DAD2ED57BBA88
  - CLAIM-E785C1898DC34DC8
semantic_clauses:
  - With encryption enabled each document is encrypted with its own random 256-bit key (AES-256-GCM)
  - that key is wrapped with the configured key encryption key and stored in the database, separately from the encrypted file
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cd3f589a282094fa7041dda0f4c70e5da8daec1defe2142b9461d0f3636d5b4e
semantic_inventory:
  - claim_key: CLAIM-C77DAD2ED57BBA88
    claim_text: With encryption enabled each document is encrypted with its own random 256-bit key (AES-256-GCM)
    role: descriptive
    status: ontology_gap
    span:
      start: 0
      end: 96
  - claim_key: CLAIM-E785C1898DC34DC8
    claim_text: that key is wrapped with the configured key encryption key and stored in the database, separately from the encrypted file
    role: descriptive
    status: ontology_gap
    span:
      start: 98
      end: 219
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 03-guides/05-setup-document-encryption.mdx#dek'
  recorded_at: '2026-10-14T12:08:53.769Z'
rationale: This architecture means that even if someone gains access to your file storage, they cannot decrypt documents without access to both your document records and your KEK, in other words, without your database and your environment variables.
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:encryption
id: REQ-with-encryption-enabled-each-document-is-e-3A4DEA2F
type: req
---
With encryption enabled each document is encrypted with its own random 256-bit key (AES-256-GCM); that key is wrapped with the configured key encryption key and stored in the database, separately from the encrypted file.

## Context

This architecture means that even if someone gains access to your file storage, they cannot decrypt documents without access to both your document records and your KEK, in other words, without your database and your environment variables.

## Source

> Each document gets its own random 256-bit encryption key for maximum security

Source: Papra documentation site (apps/docs) - 03-guides/05-setup-document-encryption.mdx#dek
