---
title: storage.b2_driver available = False
status: active
fact_kind: property_value
subject_key: storage.b2_driver
property_key: available
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-62D9AECF8E96ED54
claim_text: The dedicated Backblaze B2 storage driver is no longer supported
text_ref: REQ-papra-b2-storage-driver-dropped
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.9.0 changelog, #472: Dropped support for the dedicated backblaze b2 storage drive'
  recorded_at: '2026-11-16T13:16:47.314Z'
id: FACT-papra-storage-b2-driver-available
type: fact
---
The dedicated Backblaze B2 storage driver is no longer supported.

Modeled from REQ-papra-b2-storage-driver-dropped so the claim can be checked for contradictions.
