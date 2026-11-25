---
title: storage.b2_driver available = True
status: deprecated
fact_kind: property_value
subject_key: storage.b2_driver
property_key: available
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A3A08000AE176052
claim_text: Documents can be stored in Backblaze B2 through a dedicated b2 storage driver
text_ref: REQ-papra-b2-storage-driver-supported
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.4.0 changelog, #280: Added support for b2 document storage'
  recorded_at: '2026-11-16T10:19:36.583Z'
id: FACT-papra-storage-b2-driver-available-v1
type: fact
---
Documents can be stored in Backblaze B2 through a dedicated b2 storage driver.

Modeled from REQ-papra-b2-storage-driver-supported so the claim can be checked for contradictions.
