---
title: document.storage_key changes_when_organization_renamed = False
status: active
fact_kind: property_value
subject_key: document.storage_key
property_key: changes_when_organization_renamed
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-2D576E32D35D0C0E
claim_text: Renaming an organization does not move its existing documents, even when storage-key synchronization is enabled
text_ref: REQ-papra-organization-rename-keeps-storage-keys
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 03-guides/09-storage-key-patterns.mdx#organization-names-and-renames'
  recorded_at: '2026-11-16T10:17:55.697Z'
id: FACT-papra-document-storage-key-changes-when-organization-renamed
type: fact
---
Renaming an organization does not move its existing documents, even when storage-key synchronization is enabled.

Modeled from REQ-papra-organization-rename-keeps-storage-keys so the claim can be checked for contradictions.
