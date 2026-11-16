---
title: An intake attachment declared as application/octet-stream or with no type gets its MIME type from magic bytes, then from its extension.
status: active
semantic_text: An intake attachment declared as application/octet-stream or with no type gets its MIME type from magic bytes, then from its extension.
semantic_clauses:
  - An intake attachment declared as application/octet-stream or with no type gets its MIME type from magic bytes, then from its extension
logic_claims:
  - CLAIM-F4B185C19190BD0D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8150c7a2670c278d05a9402e75193e9cbdc5058a3b06971e9adabcb950010149
semantic_inventory:
  - claim_key: CLAIM-F4B185C19190BD0D
    claim_text: An intake attachment declared as application/octet-stream or with no type gets its MIME type from magic bytes, then from its extension
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 134
    subjects:
      - intake_email.attachment_mime
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.2.0 changelog, #896: Coerce MIME type of intake email attachments when declared a'
  recorded_at: '2026-11-16T13:22:29.814Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:intake-email
id: REQ-papra-intake-attachment-mime-coercion
type: req
---
An intake attachment declared as application/octet-stream or with no type gets its MIME type from magic bytes, then from its extension.

## Context

Reason not stated.

## Source

> Coerce MIME type of intake email attachments when declared as `application/octet-stream` or empty, using magic bytes detection with extension-based fallback.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.2.0 changelog, #896: Coerce MIME type of intake email attachments when declared a
