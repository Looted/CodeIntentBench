---
title: storage.driver_delete missing_file_has_dedicated_error = True
status: active
fact_kind: property_value
subject_key: storage.driver_delete
property_key: missing_file_has_dedicated_error
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0253F688E5E7C8D5
claim_text: Storage drivers report a missing file as a dedicated file-not-found error instead of a generic failure
text_ref: REQ-papra-storage-missing-file-errors
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.9.0 changelog, #472: Properly handle missing files errors in storage drivers'
  recorded_at: '2026-11-16T10:19:45.603Z'
id: FACT-papra-storage-driver-delete-missing-file-has-dedicated-error
type: fact
---
Storage drivers report a missing file as a dedicated file-not-found error instead of a generic failure.

Modeled from REQ-papra-storage-missing-file-errors so the claim can be checked for contradictions.
