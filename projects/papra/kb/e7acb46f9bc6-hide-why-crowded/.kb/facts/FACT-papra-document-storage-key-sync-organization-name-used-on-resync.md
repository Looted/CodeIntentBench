---
title: document.storage_key_sync organization_name_used_on_resync = current_name
status: active
fact_kind: property_value
subject_key: document.storage_key_sync
property_key: organization_name_used_on_resync
operator: eq
value_type: string
value_string: current_name
claim_key: CLAIM-C75A37CC831B822B
claim_text: with synchronization enabled a later document name or document date change re-evaluates the entire pattern and uses the current organization name too
text_ref: REQ-papra-organization-rename-keeps-storage-keys
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 03-guides/09-storage-key-patterns.mdx#organization-names-and-renames'
  recorded_at: '2026-11-16T13:15:06.763Z'
id: FACT-papra-document-storage-key-sync-organization-name-used-on-resync
type: fact
---
With synchronization enabled a later document name or document date change re-evaluates the entire pattern and uses the current organization name too.

Modeled from REQ-papra-organization-rename-keeps-storage-keys so the claim can be checked for contradictions.
