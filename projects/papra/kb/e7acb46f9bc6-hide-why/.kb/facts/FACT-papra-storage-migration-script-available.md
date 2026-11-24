---
title: storage.migration_script available = True
status: active
fact_kind: property_value
subject_key: storage.migration_script
property_key: available
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70C5D68880295300
claim_text: A document storage migration script moves documents from one storage service to another or updates their storage keys or configuration
text_ref: REQ-papra-storage-migration-script
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.3.0 changelog, #935: Add a document storage migration script to migrate documents'
  recorded_at: '2026-11-16T13:17:00.382Z'
id: FACT-papra-storage-migration-script-available
type: fact
---
A document storage migration script moves documents from one storage service to another or updates their storage keys or configuration.

Modeled from REQ-papra-storage-migration-script so the claim can be checked for contradictions.
