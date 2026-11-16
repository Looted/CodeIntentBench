---
title: upload.client_guard limit_source = organization_max_file_size
status: active
fact_kind: property_value
subject_key: upload.client_guard
property_key: limit_source
operator: eq
value_type: string
value_string: organization_max_file_size
claim_key: CLAIM-B2618F18A3BECE8B
claim_text: The client's pre-upload size check uses the organization's maximum file size
text_ref: REQ-papra-client-guard-uses-organization-limit
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.10.1 changelog, #555: Use organization max file size limit for pre-upload validati'
  recorded_at: '2026-11-16T10:23:20.482Z'
id: FACT-papra-upload-client-guard-limit-source
type: fact
---
The client's pre-upload size check uses the organization's maximum file size.

Modeled from REQ-papra-client-guard-uses-organization-limit so the claim can be checked for contradictions.
