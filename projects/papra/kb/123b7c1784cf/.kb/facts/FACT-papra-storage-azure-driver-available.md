---
title: storage.azure_driver available = True
status: active
fact_kind: property_value
subject_key: storage.azure_driver
property_key: available
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7259A4A25D33BE7C
claim_text: Documents can be stored in Azure Blob Storage through the azure storage driver
text_ref: REQ-papra-azure-blob-storage-driver
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.4.0 changelog, #280: Added support for azure blob document storage'
  recorded_at: '2026-11-25T19:27:02.520Z'
id: FACT-papra-storage-azure-driver-available
type: fact
---
Documents can be stored in Azure Blob Storage through the azure storage driver.

Modeled from REQ-papra-azure-blob-storage-driver so the claim can be checked for contradictions.
