---
title: upload.organization_scope non_member_upload_allowed = False
status: active
fact_kind: property_value
subject_key: upload.organization_scope
property_key: non_member_upload_allowed
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-E70929BF35DE68B8
claim_text: A user can only upload documents to an organization they are a member of
text_ref: REQ-papra-upload-only-to-member-organizations
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.11.0 changelog, #660: Removed the possibility for unauthorized upload to another o'
  recorded_at: '2026-11-16T10:34:23.476Z'
id: FACT-papra-upload-organization-scope-non-member-upload-allowed
type: fact
---
A user can only upload documents to an organization they are a member of.

Modeled from REQ-papra-upload-only-to-member-organizations so the claim can be checked for contradictions.
