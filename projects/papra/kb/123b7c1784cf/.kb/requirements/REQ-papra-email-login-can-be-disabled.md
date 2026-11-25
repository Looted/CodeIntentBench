---
title: Email and password login can be disabled.
status: active
semantic_text: Email and password login can be disabled.
semantic_clauses:
  - Email and password login can be disabled
logic_claims:
  - CLAIM-E872A0DB0B72A4DC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 43be8ccfa85f0495e45a5185ebc50f46b48cde1da6b204d1e4b0b1d02accb09b
semantic_inventory:
  - claim_key: CLAIM-E872A0DB0B72A4DC
    claim_text: Email and password login can be disabled
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 40
    subjects:
      - auth.email_login
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.6.4 changelog, #394: Added the possibility to disable login via email, to support'
  recorded_at: '2026-11-25T19:30:43.890Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:auth
rationale: 'The changeset of #394 (2025-07-02): "to support sso-only auth".'
id: REQ-papra-email-login-can-be-disabled
type: req
---
Email and password login can be disabled.

## Context

The changeset of #394 (2025-07-02): "to support sso-only auth".

## Source

> Added the possibility to disable login via email, to support sso-only auth

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 0.6.4 changelog, #394: Added the possibility to disable login via email, to support
