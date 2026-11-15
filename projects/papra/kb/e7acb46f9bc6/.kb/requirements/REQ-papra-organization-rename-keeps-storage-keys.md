---
title: Renaming an organization does not move its existing documents, even when storage-key synchronization is enabled; their persisted keys remain usable, new uplo…
status: active
semantic_text: Renaming an organization does not move its existing documents, even when storage-key synchronization is enabled; their persisted keys remain usable, new uploads use the current organization name, and with synchronization enabled a later document name or document date change re-evaluates the entire pattern and uses the current organization name too.
semantic_clauses:
  - Renaming an organization does not move its existing documents, even when storage-key synchronization is enabled
  - their persisted keys remain usable
  - new uploads use the current organization name
  - with synchronization enabled a later document name or document date change re-evaluates the entire pattern and uses the current organization name too
logic_claims:
  - CLAIM-2D576E32D35D0C0E
  - CLAIM-14B5025A078BC371
  - CLAIM-85B2FC22D93F0E90
  - CLAIM-C75A37CC831B822B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2fd71f92906cc8a91f791204c7730babfb921fe54e60621372325a49ac9d5697
semantic_inventory:
  - claim_key: CLAIM-2D576E32D35D0C0E
    claim_text: Renaming an organization does not move its existing documents, even when storage-key synchronization is enabled
    role: normative
    status: modeled
    span:
      start: 0
      end: 111
    subjects:
      - document.storage_key
  - claim_key: CLAIM-14B5025A078BC371
    claim_text: their persisted keys remain usable
    role: descriptive
    status: modeled
    span:
      start: 113
      end: 147
    subjects:
      - document.storage_key
  - claim_key: CLAIM-85B2FC22D93F0E90
    claim_text: new uploads use the current organization name
    role: descriptive
    status: modeled
    span:
      start: 149
      end: 194
    subjects:
      - storage_pattern.organization_name
  - claim_key: CLAIM-C75A37CC831B822B
    claim_text: with synchronization enabled a later document name or document date change re-evaluates the entire pattern and uses the current organization name too
    role: descriptive
    status: modeled
    span:
      start: 200
      end: 349
    subjects:
      - document.storage_key_sync
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 03-guides/09-storage-key-patterns.mdx#organization-names-and-renames'
  recorded_at: '2026-11-15T22:57:09.392Z'
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:storage
id: REQ-papra-organization-rename-keeps-storage-keys
type: req
---
Renaming an organization does not move its existing documents, even when storage-key synchronization is enabled; their persisted keys remain usable, new uploads use the current organization name, and with synchronization enabled a later document name or document date change re-evaluates the entire pattern and uses the current organization name too.

## Context

Reason not stated.

## Source

> Renaming an organization does not move its existing documents, even when storage-key synchronization is enabled. Their persisted keys remain usable. New uploads use the current organization name. With synchronization enabled, a later document name or document date change re-evaluates the entire pattern and uses the current organization name too.

Source: Papra documentation site (apps/docs) - 03-guides/09-storage-key-patterns.mdx#organization-names-and-renames
