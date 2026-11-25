---
title: Resetting a password revokes all of the user's sessions.
status: active
semantic_text: Resetting a password revokes all of the user's sessions.
semantic_clauses:
  - Resetting a password revokes all of the user's sessions
logic_claims:
  - CLAIM-C96B0C216066BFFA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7691f5d5800624d01add24c6a401bf345d2c7482f07e9f6039a1c0507a755cce
semantic_inventory:
  - claim_key: CLAIM-C96B0C216066BFFA
    claim_text: Resetting a password revokes all of the user's sessions
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 55
    subjects:
      - auth.password_reset
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.2 changelog, #1406: Security fix: revoke all user sessions on password reset. Th'
  recorded_at: '2026-11-16T13:22:12.780Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:auth
id: REQ-papra-password-reset-revokes-sessions
type: req
---
Resetting a password revokes all of the user's sessions.

## Context

Reason not stated.

## Why this changed

Reason not stated. This decision replaces REQ-papra-password-reset-keeps-other-devices without saying why it changed.

## Source

> Security fix: revoke all user sessions on password reset. Thank you to [MMartinez](https://github.com/murillomr) for the responsible disclosure of this issue.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.6.2 changelog, #1406: Security fix: revoke all user sessions on password reset. Th
