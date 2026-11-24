---
title: intake_email.attachment_mime coercion = magic_bytes_then_extension
status: active
fact_kind: property_value
subject_key: intake_email.attachment_mime
property_key: coercion
operator: eq
value_type: string
value_string: magic_bytes_then_extension
claim_key: CLAIM-F4B185C19190BD0D
claim_text: An intake attachment declared as application/octet-stream or with no type gets its MIME type from magic bytes, then from its extension
text_ref: REQ-papra-intake-attachment-mime-coercion
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.2.0 changelog, #896: Coerce MIME type of intake email attachments when declared a'
  recorded_at: '2026-11-16T10:36:12.944Z'
id: FACT-papra-intake-email-attachment-mime-coercion
type: fact
---
An intake attachment declared as application/octet-stream or with no type gets its MIME type from magic bytes, then from its extension.

Modeled from REQ-papra-intake-attachment-mime-coercion so the claim can be checked for contradictions.
