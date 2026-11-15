---
title: When several versioned key encryption keys are configured, the highest version encrypts new documents and every configured key can still decrypt existing doc…
status: active
semantic_text: When several versioned key encryption keys are configured, the highest version encrypts new documents and every configured key can still decrypt existing documents.
logic_claims:
  - CLAIM-71F96BD843A3D6E9
  - CLAIM-2C3C2960AABB48F8
semantic_clauses:
  - When several versioned key encryption keys are configured, the highest version encrypts new documents
  - every configured key can still decrypt existing documents
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e69a988e8e9ddb09221776d387ec971ef9f87deef9de86c25d017efa19ccfcd5
semantic_inventory:
  - claim_key: CLAIM-71F96BD843A3D6E9
    claim_text: When several versioned key encryption keys are configured, the highest version encrypts new documents
    role: condition
    status: modeled
    span:
      start: 0
      end: 101
    subjects:
      - encryption.key_encryption_key
  - claim_key: CLAIM-2C3C2960AABB48F8
    claim_text: every configured key can still decrypt existing documents
    role: descriptive
    status: modeled
    span:
      start: 106
      end: 163
    subjects:
      - encryption.key_encryption_key
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 03-guides/05-setup-document-encryption.mdx#key-versions'
  recorded_at: '2026-10-14T12:11:39.530Z'
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:encryption
id: REQ-when-several-versioned-key-encryption-keys-2FAB9215
type: req
required_evidence: asserted
rationale: 'The encryption guide: versioned keys exist for key rotation, which "allows you to replace encryption keys without losing access to existing documents".'
---
When several versioned key encryption keys are configured, the highest version encrypts new documents and every configured key can still decrypt existing documents.

## Context

The encryption guide: versioned keys exist for key rotation, which "allows you to replace encryption keys without losing access to existing documents".

## Source

> The highest version key encrypts new documents

Source: Papra documentation site (apps/docs) - 03-guides/05-setup-document-encryption.mdx#key-versions
