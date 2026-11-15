---
title: document.storage_key existing_key_changes_only_by = synchronization_or_explicit_migration
status: active
fact_kind: property_value
subject_key: document.storage_key
property_key: existing_key_changes_only_by
operator: eq
value_type: string
value_string: synchronization_or_explicit_migration
claim_key: CLAIM-FEA995DFDF1A70AB
claim_text: existing documents keep their storage keys unless synchronization is enabled or they are explicitly migrated
text_ref: REQ-papra-storage-key-persisted-sync-optional
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 03-guides/09-storage-key-patterns.mdx#storage-key-persistence'
  recorded_at: '2026-11-15T22:56:55.858Z'
id: FACT-papra-document-storage-key-existing-key-changes-only-by
type: fact
---
Existing documents keep their storage keys unless synchronization is enabled or they are explicitly migrated.

Modeled from REQ-papra-storage-key-persisted-sync-optional so the claim can be checked for contradictions.
