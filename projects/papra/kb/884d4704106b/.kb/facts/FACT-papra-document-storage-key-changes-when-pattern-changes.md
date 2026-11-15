---
title: document.storage_key changes_when_pattern_changes = False
status: active
fact_kind: property_value
subject_key: document.storage_key
property_key: changes_when_pattern_changes
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-0BBEDCA31DDAAD31
claim_text: changing the pattern configuration never changes the storage key of an existing document
text_ref: REQ-a-document-s-storage-key-is-generated-at-u-4715C9F2
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 03-guides/09-storage-key-patterns.mdx#persistence'
  recorded_at: '2026-11-15T21:44:43.776Z'
id: FACT-papra-document-storage-key-changes-when-pattern-changes
type: fact
---
Changing the pattern configuration never changes the storage key of an existing document.

Modeled from REQ-a-document-s-storage-key-is-generated-at-u-4715C9F2 so the claim can be checked for contradictions.
